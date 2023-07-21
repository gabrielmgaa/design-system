import type { Meta, StoryObj } from '@storybook/react'

import { Heading, HeadingProps } from '@call-sckedule/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    children: 'Example Heading',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o componente começa com um `h2` mas pode ser mudado para qualquer elemento com a propriedade `as`',
      },
    },
  },
}
