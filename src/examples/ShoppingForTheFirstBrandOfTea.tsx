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
      <ProcessBlock>sum := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = 1..length(X)">
        <ProcessBlock>sum := sum + X[i]</ProcessBlock>
      </LoopBlock>
    </Fragment>
  );
};

export const Algo: FC = () => {
  return (
    <Fragment>
      <ProcessBlock>totalAmountFromFirstBrand := 0</ProcessBlock>
      <LoopBlock variant="first" condition="i = 1..n">
        <ProcessBlock>
          totalAmountFromFirstBrand := (totalAmountFromFirstBrand +
          sale)
        </ProcessBlock>
      </LoopBlock>
    </Fragment>
  );
};
