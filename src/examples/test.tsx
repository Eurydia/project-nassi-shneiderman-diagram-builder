import { FC, Fragment } from "react";
import {
	ProcessBlock,
	SwitchBlock,
	CaseBlock,
	LoopBlock,
	// StartBlock,
	// EndBlock,
} from "../components";

export const Test: FC = () => {
	return (
		<Fragment>
			<ProcessBlock> cnt := 0</ProcessBlock>
			<ProcessBlock>
				previous_income := 0
			</ProcessBlock>
			<LoopBlock
				variant="first"
				condition="i = 1 .. N"
			>
				<SwitchBlock condition="income[i] > previous_income">
					<CaseBlock condition="True">
						<ProcessBlock>
							previous_income := income[i]
						</ProcessBlock>
						<ProcessBlock>
							cnt := cnt + 1
						</ProcessBlock>
					</CaseBlock>
					<CaseBlock condition="False">
						<ProcessBlock>-</ProcessBlock>
					</CaseBlock>
				</SwitchBlock>
			</LoopBlock>
		</Fragment>
	);
};
