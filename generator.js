/* Calculate the widths by customising the variables */

var columns = 12
var gutter = 3
var output = ''
var grid = 100
for (var span=1;span<=columns;span++){
  gutters = gutter * (columns - 1)
  column_width = (grid - gutters) / columns
  span_width = (column_width * span) + (gutter * (span - 1))
  output += '.grid'+span+' { width: '+span_width+'%; }<br>'
}
document.write(output)