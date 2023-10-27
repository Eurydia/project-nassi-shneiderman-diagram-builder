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
      <ProcessBlock>Count := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = 1..length(X)">
        <SwitchBlock condition="A(X[i])">
          <CaseBlock condition="True">
            <ProcessBlock>Count := Count + 1</ProcessBlock>
            <ProcessBlock>Y[Count] := X[i]</ProcessBlock>
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
      <ProcessBlock>count := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = 1..N">
        <SwitchBlock condition="P / D > 100">
          <CaseBlock condition="True">
            <ProcessBlock>count := count + 1</ProcessBlock>
            <ProcessBlock>fcities[count] := i</ProcessBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>-</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>
    </Fragment>
  );
};
