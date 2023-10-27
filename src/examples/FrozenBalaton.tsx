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
      <ProcessBlock>count := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = begin..end">
        <SwitchBlock condition="A(X[i])">
          <CaseBlock condition="True">
            <ProcessBlock>count := count + 1</ProcessBlock>
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
        <SwitchBlock condition="frozen[i] > 0">
          <CaseBlock condition="True">
            <ProcessBlock>count := count + 1</ProcessBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>-</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>
    </Fragment>
  );
};
