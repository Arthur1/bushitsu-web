import type { FC, ReactNode } from 'react'
import Providers from './providers'
import Header from './_components/Header'
import Footer from './_components/Footer'
import './globals.css'

type LayoutProps = Readonly<{
  children: ReactNode
}>

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
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
