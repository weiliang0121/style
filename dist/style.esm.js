import { select, selectAll } from 'd3-selection';

var SVG_ATTRIBUTES = {
    alignmentBaseline: "alignment-baseline",
    clipPath: "clip-path",
    dominantBaseline: "dominant-baseline",
    fillOpacity: "fill-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    pointerEvents: "pointer-events",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strokeDasharray: "stroke-dasharray",
    strokeDashoffset: "stroke-dashoffset",
    strokeLinecap: "stroke-linecap",
    strokeLinejoin: "stroke-linejoin",
    strokeMiterlimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    vectorEffect: "vector-effect",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xlinkHref: "xlink:href",
    xlinkTitle: "xlink:title",
};

var warning = function () {
    if (!document || !document.createElementNS) {
        throw new Error("document is not defined");
    }
};
/**
 * Create SVG element
 * @param tagName tag name
 * @returns element
 */
var createSVGElement = function (tagName) {
    warning();
    return document.createElementNS("http://www.w3.org/2000/svg", tagName);
};
/**
 * Query a CSS selector or d3 selection
 * @param selector CSS selector or d3 selection
 * @returns d3 selection
 */
var query = function (selector) {
    if (typeof selector === "string")
        return select(selector);
    return selector;
};
/**
 * Query all CSS selector or d3 selection
 * @param selector CSS selector or d3 selection
 * @returns d3 selection
 */
var queryAll = function (selector) {
    if (typeof selector === "string")
        return selectAll(selector);
    return selector;
};
/**
 * Covert CamelCase-named attributes to svg attributes
 * @param source CamelCase-named attributes
 * @returns svg attributes
 */
var covertSVGAttributes = function (source) {
    var target = {};
    Object.entries(source).forEach(function (_a) {
        var _b;
        var key = _a[0], value = _a[1];
        var targetKey = (_b = SVG_ATTRIBUTES[key]) !== null && _b !== void 0 ? _b : key;
        target[targetKey] = value;
    });
    return target;
};
/**
 * Set CSS attributes
 * @param element CSS selector or original element or d3 selection
 * @param attributes CSS attributes
 */
var setAttributes = function (element, attributes) {
    var selection = query(element);
    Object.entries(covertSVGAttributes(attributes)).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        selection.attr(key, value);
    });
    return selection;
};
/**
 * Set CSS styles
 * @param element CSS selector or original element or d3 selection
 * @param styles CSS styles
 */
var setStyles = function (element, styles) {
    var selection = query(element);
    Object.entries(styles).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        selection.style(key, value);
    });
    return selection;
};

export { covertSVGAttributes, createSVGElement, query, queryAll, setAttributes, setStyles };
