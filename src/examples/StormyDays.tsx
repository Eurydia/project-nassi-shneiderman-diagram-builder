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
      <ProcessBlock>stormy_days_count := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = 1..n">
        <SwitchBlock condition="wind_speeds[i] > 100">
          <CaseBlock condition="True">
            <ProcessBlock>stormy_days_count ++</ProcessBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>-</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>
    </Fragment>
  );
};
