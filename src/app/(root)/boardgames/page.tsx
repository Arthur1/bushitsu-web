import Container from '@/app/(root)/_common/components/Container'
import Headline1 from '@/app/(root)/_common/components/Headline1'
import type { BoardGame } from '@/app/api/boardgames/route'
import BoardGamesTable from './_components/BoardGamesTable'

const getBoardgames = async () => {
  const res = await fetch('http://localhost:3000/api/boardgames')
  const boardgames = (await res.json()) as BoardGame[]
  return boardgames
}

const BoardGamesPage = async () => {
  const boardgames = await getBoardgames()
  return (
    <Container>
      <Headline1>Boardgames</Headline1>
      <p>友人から預かっているものも含まれています。</p>
      <BoardGamesTable boardgames={boardgames} />
    </Container>
  )
}

export default BoardGamesPage
