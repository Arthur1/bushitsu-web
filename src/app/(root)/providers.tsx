'use client'

import { NextUIProvider } from '@nextui-org/react'
import type { FC, ReactNode } from 'react'

type ProvidersProps = Readonly<{
  children: ReactNode
}>

const Providers: FC<ProvidersProps> = ({ children }) => <NextUIProvider>{children}</NextUIProvider>

export default Providers
