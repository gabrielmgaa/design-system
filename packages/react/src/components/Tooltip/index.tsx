import * as TooltipRadix from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent } from './styles'

export function Tooltip() {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root delayDuration={500}>
        <TooltipRadix.Trigger>21</TooltipRadix.Trigger>

        <TooltipRadix.Portal>
          <TooltipContent sideOffset={6} side="top">
            21 de Outubro - Indisponível
            <TooltipArrow width={16} height={8} />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
