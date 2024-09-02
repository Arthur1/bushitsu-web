import type { FC, ReactNode } from 'react'
import { Noto_Sans_JP } from 'next/font/google'
import Providers from './providers'
import Footer from './_components/Footer'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  preload: false,
  variable: '--font-noto-sans-jp',
})

type LayoutProps = Readonly<{
  children: ReactNode
}>

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            {children}
            <footer className="mt-auto">
              <Footer />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default Layout
