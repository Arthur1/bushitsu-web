import type { FC, ReactNode } from 'react'

type LayoutProps = Readonly<{
  children: ReactNode
}>

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}

export default Layout
