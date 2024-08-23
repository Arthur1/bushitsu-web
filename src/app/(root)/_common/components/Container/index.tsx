import type { FC, ReactNode } from 'react'

type ContainerProps = Readonly<{
  children: ReactNode
}>

const Container: FC<ContainerProps> = ({ children }) => (
  <div className="container mx-auto px-4">{children}</div>
)

export default Container
