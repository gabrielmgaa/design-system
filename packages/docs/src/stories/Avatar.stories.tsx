import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@call-sckedule/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  tags: ['autodocs'],
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/gabrielmgaa.png',
    alt: 'Gabriel Magalhães',
  },
}

export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
