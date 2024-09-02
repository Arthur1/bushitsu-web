import type { ReactNode, FC } from 'react'
import Header from './_components/Header'

type TemplateProps = Readonly<{
  children: ReactNode
}>

const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Template
