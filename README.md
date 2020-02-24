# vev Assessment

This project was completed as part of the vev application process. It utilizes SVG components to recreate the task, vanilla Javascript to manipulate the dragging of the components, and implements distance and slope formulas for the line length calculations.

It is hosted [here](https://adoring-swanson-4e42a5.netlify.com/).

## Dependencies
- react: ^16.12.0
- react-dom: ^16.12.0
- react-scripts: 3.3.0

## Known Bugs
- Occasionally, the coordinate calculations on line length change will return `NaN`, which does cause the circle2 component to break. I will continue to investigate this to find a solution as the conditions that cause this bug are still unknown.
