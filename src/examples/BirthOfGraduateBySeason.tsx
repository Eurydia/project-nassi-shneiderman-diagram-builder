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
      <ProcessBlock>MinVal := INF</ProcessBlock>
      <ProcessBlock>MinInd := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = 1..N">
        <SwitchBlock
          condition={"numbers[i] < MinVal && numbers[i] > 10"}
        >
          <CaseBlock condition="True">
            <ProcessBlock>MinInd := i</ProcessBlock>
            <ProcessBlock>MinVal := numbers[i]</ProcessBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>-</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>
      <ProcessBlock>{"MinInd > 0"}</ProcessBlock>
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
