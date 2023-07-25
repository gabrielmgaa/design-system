import { styled } from '../../styles'

import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  padding: '$3 $4',
  borderRadius: '$sm',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
