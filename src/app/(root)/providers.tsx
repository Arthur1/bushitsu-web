'use client'

import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import type { FC, ReactNode } from 'react'

type ProvidersProps = Readonly<{
  children: ReactNode
}>

const Providers: FC<ProvidersProps> = ({ children }) => {
  const router = useRouter()
  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
}

export default Providers
