import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@call-sckedule/tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText } = createStitches(
  {
    themeMap: {
      ...defaultThemeMap,
      width: 'space',
      height: 'space',
    },
    theme: {
      colors,
      fonts,
      fontSizes,
      fontWeights,
      lineHeights,
      radii,
      space,
    },
  },
)
