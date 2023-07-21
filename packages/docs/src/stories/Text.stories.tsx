import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@call-sckedule/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    children: 'Example text',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
  },
}
