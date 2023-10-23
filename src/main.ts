import type {SVGAttributes, Selector} from "./type";
import {select, selectAll} from "d3-selection";
import {SVG_ATTRIBUTES} from "./constants";

const warning = () => {
  if (!document || !document.createElementNS) {
    throw new Error("document is not defined");
  }
};

/**
 * Create SVG element
 * @param tagName tag name
 * @returns element
 */
export const createSVGElement = (tagName: string) => {
  warning();
  return document.createElementNS("http://www.w3.org/2000/svg", tagName);
};

/**
 * Query a CSS selector or d3 selection
 * @param selector CSS selector or d3 selection
 * @returns d3 selection
 */
export const query = (selector: Selector) => {
  if (typeof selector === "string") return select(selector);
  return selector;
};

/**
 * Query all CSS selector or d3 selection
 * @param selector CSS selector or d3 selection
 * @returns d3 selection
 */
export const queryAll = (selector: Selector) => {
  if (typeof selector === "string") return selectAll(selector);
  return selector;
};

/**
 * Covert CamelCase-named attributes to svg attributes
 * @param source CamelCase-named attributes
 * @returns svg attributes
 */
export const covertSVGAttributes = (source: SVGAttributes) => {
  const target: SVGAttributes = {};
  Object.entries(source).forEach(([key, value]) => {
    const targetKey = SVG_ATTRIBUTES[key] ?? key;
    target[targetKey] = value;
  });
  return target;
};

/**
 * Set CSS attributes
 * @param element CSS selector or original element or d3 selection
 * @param attributes CSS attributes
 */
export const setAttributes = (element: any, attributes: SVGAttributes) => {
  const selection = query(element);
  Object.entries(covertSVGAttributes(attributes)).forEach(([key, value]) => {
    selection.attr(key, value);
  });
  return selection;
};

/**
 * Set CSS styles
 * @param element CSS selector or original element or d3 selection
 * @param styles CSS styles
 */
export const setStyles = (element: any, styles: Record<string, string>) => {
  const selection = query(element);
  Object.entries(styles).forEach(([key, value]) => {
    selection.style(key, value);
  });
  return selection;
};
