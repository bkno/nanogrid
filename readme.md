# NanoGrid

The intention of NanoGrid is to make the HTML and CSS markup as simple as possible, without imposing limitations. Many grids come with a lot of code, I have aimed to cut almost all of it out.


- Less code than any other grid
- No row element
- Fluid and responsive
- Supports nesting
- No dependencies
- Simple by design
- Supports IE6 and up

## Which CSS file do you need?

Included are a few different versions with varying gutter sizes, to suit the design you need.

nanogrid-2.css is a 2% gutter, nanogrid-3.css is a 3% gutter and so on.

## HTML example

Example: one big column followed by two smaller ones:

    <div class="grid8 first">
      spans 6 of 12 columns
    </div>
    <div class="grid4">
      spans 4 of 12 columns
    </div>

## No row element?

Requiring a row element has always bothered me about other grids. Therefore from day one I did not want one. Instead you just assign the class 'first' to the first element in a row. This ensures your floated grid content remains correctly ordered even when the height of elements changes in a responsive design on smaller screen sizes.

## A note on nesting

If you nest grid elements, the 2% gutter is based on the width of the parent, so gutters are smaller on nested elements. Sometimes this is nice or not apparent in a design, but it may be an issue with very boxy nested designs. It's not bothered me so far.