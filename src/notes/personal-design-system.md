### Notes for Building a Design System from scratch
[original blog post](https://blog.maximeheckel.com/posts/building-a-design-system-from-scratch/)

### Context - why build a personal design system
- Branding
- Consistency
- Fun and learning

My own set of Lego pieces

### Tokens - discrete elements
- color palette
- spacing
- typography
- font sizes
- shadows

#### Color system
Two-tier color variable system:
1. variables representing HSL(hue, saturation, lightness) values of the colors, for example --blue-1-: '222, 89%, 90%'
2. alias or meaning mapped varibles, like --brand: hsl(var(--blue-50)). Use the colors defined in the first layer and compose them or expand.

This system works for 2 reasons:
1. components never references actual colors, rather they use alias, like --brand. This makes components resilient, because all I have to do is update the --brand variable, and all the components referencing it will update accordingly.
2. enables color token composition: [detail here](https://blog.maximeheckel.com/posts/the-power-of-composition-with-css-variables/)