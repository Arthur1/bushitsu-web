import type { FC, ReactNode } from 'react'

type ContainerProps = Readonly<{
  children: ReactNode
}>

const Headline2: FC<ContainerProps> = ({ children }) => (
  <h1 className="text-3xl font-extrabold mb-3 mt-4">{children}</h1>
)

export default Headline2
