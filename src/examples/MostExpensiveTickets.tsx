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
      <ProcessBlock>counter := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = S..E">
        <SwitchBlock condition="A(X[i])">
          <CaseBlock condition="True">
            <ProcessBlock>counter := counter + 1</ProcessBlock>
            <ProcessBlock>result[counter] := i</ProcessBlock>
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
      <ProcessBlock>cnt := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = 1..N">
        <SwitchBlock condition="P[i] / D[i] > 100">
          <CaseBlock condition="True">
            <ProcessBlock>cnt := cnt + 1</ProcessBlock>
            <ProcessBlock>res[cnt] := i</ProcessBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>-</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>
    </Fragment>
  );
};
