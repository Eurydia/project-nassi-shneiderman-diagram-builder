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
        <SwitchBlock condition="A(X[i])">
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
      <ProcessBlock>result := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = 1..(N - 1)">
        <SwitchBlock
          condition={
            <Fragment>
              (watchposts[index] + <br />
              watchposts[index + 1]) = 2
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
