import type { FC, ReactNode } from 'react'

type ContainerProps = Readonly<{
  children: ReactNode
}>

const Headline2: FC<ContainerProps> = ({ children }) => (
  <h1 className="text-3xl font-medium mb-3 mt-4 text-slate-800">{children}</h1>
)

export default Headline2
