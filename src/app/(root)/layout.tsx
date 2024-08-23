import type { FC, ReactNode } from 'react'
import Providers from './providers'
import Header from './_components/Header'
import './globals.css'

type LayoutProps = Readonly<{
  children: ReactNode
}>

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <header>
            <Header />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default Layout
