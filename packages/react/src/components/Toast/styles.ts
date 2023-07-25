import * as Toast from '@radix-ui/react-toast'

import { keyframes, styled } from '../../styles'

// Keyframes

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 3rem))` },
  to: { transform: 'translateX(0)' },
})

// const slideOut = keyframes({
//   from: { transform: 'translateX(0)' },
//   to: { transform: `translateX(calc(100% + 3rem))` },
// })

const close = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

// Styled Components

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  padding: '1.2rem 2rem',
  borderRadius: 6,
  border: '1px solid $colors$gray600',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
  '&[data-state="closed"]': {
    animation: `${close} 200ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  color: '$white',
  fontWeight: '$bold',
  fontSize: '$xl',
  fontFamily: '$default',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  fontFamily: '$default',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',

  cursor: 'pointer',
  color: '$gray200',
  lineHeight: 0,

  display: 'flex',
  justifyContent: 'center',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
