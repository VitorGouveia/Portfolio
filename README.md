<a href="https://github.com/vitorgouveia/project-model" target="_blank" rel="noopener">
  <img alt="Project Cover Image" src="assets/readme_cover.png" />
</a>

---

# Table of Contents
- [Intro](#intro)
- [Design](#design)
  * [The design process](#the-design-process)
  * [CSS framework](#css-framework)
    + [Colors](#colors)
    + [Spacing](#spacing)
  * [Figma Template](#figma-template)
- [Documentation](#documentation)
  * [Interactive Readme](#interactive-readme)
  * [Software](#software)
  * [Product](#product)
- [Technologies](#technologies)
  * [Finding out my project complexity level](#finding-out-my-project-complexity-level)
  * [Complexity 0](#complexity-0)
  * [Complexity 1](#complexity-1)
  * [Complexity 2](#complexity-2)

# Intro
This project defines rules and guidelines to be followed by other projects. All internal projects should follow theses rules.

This project-model should also facilitate de bootstrap of a new project as covers all product & project creation from scratch.

# Design
Inside this repository lies a highly customizable CSS framework to be used in internal projects.

There are some pre-built presets to use with this framework.

Read about the framework and how it works below:

## The design process
The design process is divided in 4 parts, each part being essential to a page creation flow:

[Style Guide](#style-guide) => [Design System](#design-system) => [Ui Kit](#ui-kit) => [Components](#components)

### Style Guide
The style-guide defines the tokens:

- Colors (100 to 900)
- Spacing (100 to 900)
- Font-sizes (100 to 900)
- Font-families (names)
- Breakpoints (mobile to desktop)

### Design System
These tokens can be later consumed by a design system, which you can think of as a theme of our application. Each theme would have a different design system.

It needs to be this way because I realized some things can differ between themes (not only colors), and having more low-level control over the tokens inside the design system can help with making themes more customizable.

An example would be a neumorphic theme, which changes shadows, border-radius and colors, these can only be modified if we have total control over our tokens and theme.

Another thing is, making a light and dark themed website is more than just inverting colors, you have to make sure that the contrast is still good in all situations and maybe change the saturation of accent-colors.

The design system gives names to the [style-guide](#style-guide) tokens and aims to minimize the number of variables it has to create.

Examples:

| **Style-guide**     | **Design-system** |
|------------------   |-------------------|
| colors-gray-900     | text-title        |
| colors-red-500      | danger-base       |
| spacing-200         | gap-base          |
| font-roboto         | font-reading      |
| breakpoints-mobile  | breakpoints-small |

You can see we don't actually care about the implementation details of fonts, colors or even spacings, we don't fill the design-system with numbers, this facilitates a lot, because you don't have to choose from an entire pallete of gray to color you text, you can just use the predefined variables from the theme.

### Ui Kit
A Ui Kit is predetermined set of global css that target specific elements and styles them according to the design. It uses the variables from the design-system to style these elements.

Note that these elements from the ui kit are not reffered to as "components", since components is an abstract concept created by UI Frameworks.

The point of the UI Kit is to leave the developer with an already styled and good looking page, even before he writes his first CSS.

An example of some elements that are styled in the ui kit are:

- Button
- Input
- Textarea
- Form
- Link
- h1, h2, h3, h4, h5, h6
- p, small

### Components
Components are the last level of our hierachy of styling, they compose the interfaces and do not come pre-built. Because they're components, they vary from framework to framework.

They inherit styling from the [ui kit](#ui-kit) and only add needed styling on top.

But a base for building components should be:

- Look out for accessibility features
- Include visible :hover, :active and :focus/:focus-visible states
- They should be tested against different color modes (contrast, colorblindness)

## CSS framework
The CSS framework is built upon some tools developed over the years by HyperDigital, as well as other 3rd-party tooling that comes with the javascript ecossystem such as tailwind.css, post.css and others.

The CSS framework is being built inside the `/css` folder.

The CSS framework uses SCSS by default, but also aims compatibility for LESS and Stylus pre-processor as they've shown expressive DX (Developer Experience) when compared to SCSS.

### Colors
In order to make color creation automatic a script was created to take care of colors. This script creates colors based on four parameters. But first, we need to understand the HSL color specification.

HSL stands for hue, saturation and lightness and made color tweaking and creation a lot simpler.

H - Color tone

S - How vibrant is that color

L - How much white is in that color

The main benefit of HSL against any other color specification is that HSL allows us to programatically create colors in a declarative way that's easy to understand.

The color creation script located inside the `colors` folder does one simple thing, it generates colors based on hue, satuation and lightness. Because we need to create a lot of color palletes for new projects we've already set up some templates for famous colors presets such as Pastel, Bebê or even Aquarella and over-saturated.

The four parameters you need to supply to the `color-generator` are:

- Hue
- Saturation
- Step
- Initial Lightness

With these parameters you can easily create beautiful looking color palletes for your `style-guide` such as the ones below:

<colors-img>

We also take part in 60-30-10 rule to make our design, that's why we tend to name colors with their role in the 60-30-10 rule.

| **Color**      | **Role** |
|----------------|----------|
| Red            | Accent   |
| Yellow         | Accent   |
| Green          | Accent   |
| Gray           | Primary  |
| <brand-color>  | Accent   |

Each color should have at least 9 different tones when generated via `color-generator`. 

### Spacing
Spacing defines all the parts of the UI that need, believe it or not, *spacing*.

Properties such as `padding`, `margin`, `gap`, `border-width`, `border-radius` are all going to be fed the `spacing` token from the [style-guide](#style-guide)

The spacing scale works similar to the color lightness scale, you have a initial value and a step. The `spacing-generator` will generate 9 of these spacing, those should be sufficient for you to use throughout your whole app.

## Figma Template
🚧 Work in progress 🚧

Download the figma template that contains our whole CSS framework using CSS variables.

<file>

# Documentation
In the `documentation` folder you can find templates to be used for documentating your project.

Each template serves a different purpose.

## Interactive Readme
🚧 Work in progress 🚧

## Software
The software documentation category refers to the code part of the project. It showcases technology and inovation by the dev team.

## Product
The product documentation category refers to the product part of the project. It should show the problem vs solution, biggest "selling points" and the business perspective of building.

# Technologies
Inside the `tech` folder you can find templates to be used for the software.

Each tech stack serves a differente purpose.

The tech stacks are also divided in 3 (three) different complexity levels. The complexity levels are numbered from 0 onwards. The bigger the complexity level the more complex and far from the basic web technologies (HTML, CSS, Javascript) it is.

> Always try the simple route. When simple is not enough, go up one stack. (disclaimer: if you have the correct sense of complexity of your application, then use the appropriate stack for it.)

## Finding out my project complexity level
If you don't know how complex your app is, fill the form below and get a basic sense of it.

<form link>

## Complexity 0
Complexity 0 refers to the bare bones of the web, HTML, CSS and Javascript, nothing more.

### Tools

- Typescript
- Parcel
- PostCSS
  - Autoprefixer
  - TailwindCSS


## Complexity 1
Complexity 1 introduces heavy data fetching combined with the use of interaction of the user with an API. But no need to have great SEO or render content on the server side

### Tools

- Solid.js
- PostCSS
  - Autoprefixer
  - TailwindCSS

## Complexity 2
Complexity 2 is the most complex stack, combining front-end, back-end and database work/management all in one.

### Tools

- Typescript
- Next.js
- Supabase
- SWR
- Turbopack
- Prisma
  - Postgres
- PostCSS
  - Autoprefixer
  - TailwindCSS