import type {Selection} from "d3-selection";

export interface SVGAttributes {
  [key: string]: string | number;
}

export type Selector = string | Selection<any, any, HTMLElement, any>;
