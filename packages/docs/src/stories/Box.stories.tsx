import type { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@call-sckedule/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>testando elemento box</Text>,
  },
  tags: ['autodocs'],
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
