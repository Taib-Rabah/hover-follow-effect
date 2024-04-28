# Cool Hover Follow Effect

**Table Of Content**

-  [Introduction](#introduction)
-  [Demos](#demos)
-  [Languages Used](#languages-used)
-  [How I Did It](#how-i-did-it)
-  [Contact Me](#contact-me)

## Introduction

This hover effect is inspired by [Kevin Powell's video](https://www.youtube.com/watch?v=IdxzJLQ3Mbs&t=176s&ab_channel=KevinPowell) on YouTube. However, This improved version ensures a smooth animation even if you hover over or away the box faster than the animation duration.

## Demos

-  [My Demo](https://taib-rabah.github.io/hover-follow-effect/)
-  [Kevin Powell's Code + Demo](https://codepen.io/kevinpowell/pen/ExJebPz) on [CodePen website](https://codepen.io/)

## Languages Used

-  HTML

-  [SASS (SCSS Syntax)](https://sass-lang.com/documentation/)

-  Vanilla Typescript

> If you are not familiar with Typescript and SASS, you can get the [HTML, CSS and JS Code Here](https://codepen.io/Rabah-Taib/pen/oNOOBMy) on [CodePen website](https://codepen.io/).

## How I Did It

> I assume that you already watched [Kevin Powell's video](https://www.youtube.com/watch?v=IdxzJLQ3Mbs&t=176s&ab_channel=KevinPowell) : - )

1. Start animation from the current `::before` pseudo-element's position upon hover, avoiding hard-coded positions.

2. Utilize custom hover class to set animation variables before animation starts, ensuring correct values.

The animation will look like this:

```css
@keyframes enter {
   from {
      top: var(--enter-top);
      left: var(--enter-left);
   }
   to {
      top: var(--current-top);
      left: var(--current-left);
   }
}
```

Similar approach for the `leave` animation:

```css
@keyframes leave {
   from {
      top: var(--leave-top);
      left: var(--leave-left);
   }
   to {
      top: var(--default-top);
      left: var(--default-left);
   }
}
```

## Contact Me

-  Telegram: [@Y_O_5](https://t.me/y_o_5)
-  Email: taib.rabah20@gmail.com

I appreciate any comments ♥
