import { useState } from 'react'

import { X } from 'phosphor-react'

import * as ToastRadix from '@radix-ui/react-toast'

import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export function Toast() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <ToastRadix.Provider swipeDirection="right">
      <button onClick={() => setIsOpen((prev) => !prev)}>Oi</button>

      <ToastRoot open={isOpen} onOpenChange={setIsOpen}>
        <ToastTitle>
          Agendamento realizado
          <ToastClose>
            <X size={20} />
          </ToastClose>
        </ToastTitle>
        <ToastDescription>Quarta-feira, 23 de Outubro às 16h</ToastDescription>
      </ToastRoot>

      <ToastViewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
