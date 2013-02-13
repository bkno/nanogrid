# NanoGrid

The intention of NanoGrid is to make the HTML and CSS markup as simple as possible, with as few classes and elements as possible, without the need for additional dependencies such as SASS. I am working on browser support in IE.

## Why NanoGrid?

- Less code than any other grid
- No row elements or class
- No clearfix or clear class
- Responsive
- Fluid
- Supports nesting
- No dependencies
- Simple

## Two implementations

Many grids come with a lot of code, I have aimed to cut almost all of it out. As such there are some implications of less code, in that there are currently two versions:

1. nanogrid-fluid-gutter.css

   This is my original version. The percentage numbers are nice and simple. If you nest grid elements, the 2% gutter is based on the width of the parent, so gutters are smaller on nested elements. On some designs this is not apparent, but on others it would be annoying.

2. nanogrid-fixed-gutter.css

   My revised implementation. This uses padding to set gutters at a fixed pixel width, to ensure gutters are not smaller on nested elements. For IE6/7 support of box-sizing use the [polyfill](https://github.com/Schepp/box-sizing-polyfill).

## HTML example

Example: one big column followed by two smaller ones:

    <div class="grid3 first">
      6 columns
    </div>
    <div class="grid3">
      3 columns
    </div>
    <div class="grid3">
      3 columns
    </div>