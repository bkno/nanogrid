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

Many grids come with a lot of code, I have aimed to cut almost all of it out.

If you nest grid elements, the 2% gutter is based on the width of the parent, so gutters are smaller on nested elements. Sometimes this is actually nice, on some designs this is not apparent, but if it is an issue with your design try to avoid nesting by keeping your HTML simple.

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