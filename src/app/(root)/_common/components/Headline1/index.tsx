import type { FC, ReactNode } from 'react'

type ContainerProps = Readonly<{
  children: ReactNode
}>

const Headline1: FC<ContainerProps> = ({ children }) => (
  <h1 className="text-4xl font-extrabold mb-4 mt-6">{children}</h1>
)

export default Headline1
