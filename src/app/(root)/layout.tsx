import type { FC, ReactNode } from 'react'
import Providers from './providers'

type LayoutProps = Readonly<{
  children: ReactNode
}>

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default Layout
