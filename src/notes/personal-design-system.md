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
1. variables representing HSL(hue, saturation, lightness) values of the colors, for example `--blue-1-: '222, 89%, 90%'`
2. alias or meaning mapped variables, like `--brand: hsl(var(--blue-50))`. Use the colors defined in the first layer and compose them or expand.

This system works for 2 reasons:
1. components never references actual colors, rather they use alias, like `--brand`. This makes components resilient, because all I have to do is update the `--brand` variable, and all the components referencing it will update accordingly.
2. enables color token composition: [detail here](https://blog.maximeheckel.com/posts/the-power-of-composition-with-css-variables/)
3. theming becomes easier. Like light and dark, in light mode `--brand` refers to `--blue-60`, in dark mode it refers to `--blue-20`

#### Steps to pick colors, create a palette, and tokens:
1. ![base-colors.png](../assets/notes/base-colors.png)
2. ![color-scale.png](../assets/notes/color-scale.png)
3. ![pick-name-themes.png](../assets/notes/pick-name-themes.png)

#### other tokens
- spacing tokens `--space-0: 0px; --space-1: 4px; ... --space-12: 96px`

Noticed it uses a scale factor of 4 up to --space-4: 16px, and then becomes less granular at larger sizes. 

***systematic alternative*** similar to tailwind's convention  

strict 4px scale:
`--space-0: 0;
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;`

#### a good rule to guide my design system:  

space-1 to space-4: internal element spacing  
space-5 to space-7: component padding and gaps  
space-8 to space-12: page and section spacing  

#### typography tokens
`--font-size-1: 0.75rem;
--font-size-2: 0.875rem;
--font-size-3: 1rem;
--font-size-4: 1.125rem;
--font-size-5: 1.25rem;
--font-size-6: 1.5rem;
--font-size-7: 2rem;`

#### radii tokens
`--border-radius-0: 4px;
--border-radius-1: 8px;
--border-radius-2: 16px;`

#### naming-convention
1. size-related token sets, using numerical suffixes with increments of 1
2. tokens that needs more gradularity in the future, like color scales. The numerical suffixes with increments of 10 / 100

