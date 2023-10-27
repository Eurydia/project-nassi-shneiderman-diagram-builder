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
      <ProcessBlock>element: Integer</ProcessBlock>
      <ProcessBlock>arraySize: Integer</ProcessBlock>
      <ProcessBlock>array: Array[1..arraySize: Integer]</ProcessBlock>
      <ProcessBlock>Exists: Boolean := False</ProcessBlock>
      <LoopBlock variant="first" condition="i = 1..arraySize">
        <SwitchBlock condition="array[i] = element">
          <CaseBlock condition="True">
            <ProcessBlock>Exists := True</ProcessBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>-</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock>

      {/* <ProcessBlock>N: Integer</ProcessBlock>
      <ProcessBlock>ages: [1..N: Integer]</ProcessBlock>
      <ProcessBlock>count: Integer = 0</ProcessBlock>
      <ProcessBlock>uniqueAges: Array[1.. : Integer]</ProcessBlock>
      <LoopBlock variant="first" condition="i = 1..N">
        <SwitchBlock condition="NOT hasArray(ages[i], N, ages]">
          <CaseBlock condition="True">
            <ProcessBlock>uniqueAges[count] := ages[i]</ProcessBlock>
            <ProcessBlock>count := count + 1</ProcessBlock>
          </CaseBlock>
          <CaseBlock condition="False">
            <ProcessBlock>-</ProcessBlock>
          </CaseBlock>
        </SwitchBlock>
      </LoopBlock> */}
    </Fragment>
  );
};

export const Algo: FC = () => {
  return <Fragment></Fragment>;
};
