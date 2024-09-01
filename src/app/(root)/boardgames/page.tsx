import type { FC } from 'react'
import Container from '@/app/(root)/_common/components/Container'
import Headline1 from '@/app/(root)/_common/components/Headline1'

const BoardGamesPage: FC = () => {
  return (
    <Container>
      <Headline1>Boardgames</Headline1>
      <p>友人から預かっているものも含まれています。</p>
    </Container>
  )
}

export default BoardGamesPage
