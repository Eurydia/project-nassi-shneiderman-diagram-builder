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
      <ProcessBlock>Y[]</ProcessBlock>
      <LoopBlock variant="first" condition="i = start..end">
        <SwitchBlock condition="A(X[i])">
          <CaseBlock condition="True">
            <ProcessBlock>Y[i] := a</ProcessBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>Y[i] := b</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>
      <ProcessBlock>maxVal := 0</ProcessBlock>
      <ProcessBlock>currVal := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = start..end">
        <SwitchBlock condition="B(Y[i])">
          <CaseBlock condition="True">
            <ProcessBlock>
              currVal <br />
              := currVal + 1
            </ProcessBlock>
            <SwitchBlock condition="currVal > maxVal">
              <CaseBlock condition="True">
                <ProcessBlock>maxVal := currVal</ProcessBlock>
              </CaseBlock>
              <CaseBlock condition="False">
                <ProcessBlock>-</ProcessBlock>
              </CaseBlock>
            </SwitchBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>currVal := 0</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>
    </Fragment>
  );
};

export const Algo: FC = () => {
  return (
    <Fragment>
      <ProcessBlock>walls[0..(n-2)]</ProcessBlock>
      <LoopBlock variant="first" condition="i = 0..(n-2)">
        <SwitchBlock condition="posts[i] + posts[i + 1] = 2">
          <CaseBlock condition="True">
            <ProcessBlock>walls[i] := 1</ProcessBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>walls[i] := 0</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>
      <ProcessBlock>maxSeq := 0</ProcessBlock>
      <ProcessBlock>currSeq := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = 0..(n-2)">
        <SwitchBlock condition="walls[i] = 0">
          <CaseBlock condition="True">
            <ProcessBlock>
              currSeq <br />
              := currSeq + 1
            </ProcessBlock>
            <SwitchBlock condition="currSeq > maxSeq">
              <CaseBlock condition="True">
                <ProcessBlock>maxSeq := currSeq</ProcessBlock>
              </CaseBlock>
              <CaseBlock condition="False">
                <ProcessBlock>-</ProcessBlock>
              </CaseBlock>
            </SwitchBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>currSeq := 0</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>
    </Fragment>
  );
};
