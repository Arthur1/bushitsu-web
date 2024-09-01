import { NextResponse } from 'next/server'
import fs from 'fs'
import { parse } from 'papaparse'
import path from 'path'

export type BoardGame = Readonly<{
  id: number
  name: string
  isExpansion: boolean
}>

export const GET = async () => {
  const data = fs.readFileSync(
    path.resolve('src', 'app', 'api', 'boardgames', 'boardgames.csv'),
    'utf8',
  )
  const boardgames = parse(data, { header: true, dynamicTyping: true, skipEmptyLines: true })
  return NextResponse.json(boardgames.data)
}
