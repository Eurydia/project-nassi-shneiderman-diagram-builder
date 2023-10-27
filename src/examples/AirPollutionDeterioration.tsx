import { FC, Fragment } from "react";
import {
  ProcessBlock,
  SwitchBlock,
  CaseBlock,
  LoopBlock,
} from "../components";

export const Pattern: FC = () => {
  return (
    <Fragment>
      <ProcessBlock>result := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = start..end">
        <SwitchBlock condition="CMP(i)">
          <CaseBlock condition="True">
            <ProcessBlock>result := result + 1</ProcessBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>-</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>
    </Fragment>
  );
};

export const Algo: FC = () => {
  return (
    <Fragment>
      {/* <ProcessBlock>result := 0</ProcessBlock>
        <LoopBlock variant="first" condition="i = 2..N">
          <SwitchBlock condition="cmp(i)">
            <CaseBlock condition="True">
              <ProcessBlock>result := result + 1</ProcessBlock>
            </CaseBlock>
            <CaseBlock condition="False">
              <ProcessBlock>-</ProcessBlock>
            </CaseBlock>
          </SwitchBlock>
        </LoopBlock>*/}
      <ProcessBlock>result := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = 2..N">
        <SwitchBlock
          condition={
            <Fragment>
              {"AQ[i - 1, 1] < AQ[i, 1] AND"}
              <br />
              {"AQ[i - 1, 2] < AQ[i, 2]"}
            </Fragment>
          }
        >
          <CaseBlock condition="True">
            <ProcessBlock>result := result + 1</ProcessBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>-</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>
    </Fragment>
  );
};
