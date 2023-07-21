import type { Meta, StoryObj } from '@storybook/react'

import { ArrowRight } from 'phosphor-react'

import { Button, ButtonProps } from '@call-sckedule/react'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    onClick: {
      action: 'click',
    },
  },
  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Terciary: StoryObj<ButtonProps> = {
  args: {
    children: 'Cancel',
    variant: 'tertiary',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
