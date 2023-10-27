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
      <ProcessBlock>cnt := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = 1..(length(X))">
        <SwitchBlock condition="A(X[i])">
          <CaseBlock condition="True">
            <ProcessBlock>cnt := cnt + 1</ProcessBlock>
            <ProcessBlock>Y[cnt] := X[i]</ProcessBlock>
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
      <ProcessBlock>countOfSettlement := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = 1..n">
        <SwitchBlock
          condition={
            <Fragment>
              {"settlements[i, 1] >= 100 and"}
              <br />
              {"settlements[i, 2] < 100"}
            </Fragment>
          }
        >
          <CaseBlock condition="T">
            <ProcessBlock>countOfSettlement++</ProcessBlock>
            <ProcessBlock>
              goodSettlements[countOfSettlement] := i
            </ProcessBlock>
          </CaseBlock>
          <CaseBlock condition="F">
            <ProcessBlock>-</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>
    </Fragment>
  );
};
