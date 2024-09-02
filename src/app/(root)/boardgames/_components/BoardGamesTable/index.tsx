'use client'

import type { BoardGame } from '@/app/api/boardgames/route'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/table'
import type { FC } from 'react'

type BoardGamesTableProps = Readonly<{
  boardgames: readonly BoardGame[]
}>

const BoardGamesTable: FC<BoardGamesTableProps> = ({ boardgames }) => (
  <Table isStriped removeWrapper className="mb-4" aria-label="ボードゲームの一覧">
    <TableHeader>
      <TableColumn>ボードゲーム名</TableColumn>
      <TableColumn>拡張か?</TableColumn>
    </TableHeader>
    <TableBody items={boardgames}>
      {boardgame => (
        <TableRow key={boardgame.id}>
          <TableCell>{boardgame.name}</TableCell>
          <TableCell>{boardgame.isExpansion ? '✓' : ''}</TableCell>
        </TableRow>
      )}
    </TableBody>
  </Table>
)

export default BoardGamesTable
