/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPadding } from "./IPadding";

export type IButton = {
  title: string;
  padding: IPadding;
  action?: <Args extends any[]>(...props: Args) => void;
};
