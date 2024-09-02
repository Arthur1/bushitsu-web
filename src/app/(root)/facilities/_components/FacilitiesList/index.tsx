'use client'

import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from '@nextui-org/table'
import type { FC } from 'react'

type FacilitiesListProps = Readonly<{
  facilities: readonly string[]
  tableLabel: string
}>

const FacilitiesList: FC<FacilitiesListProps> = ({ facilities, tableLabel }) => {
  const items = facilities.map(facility => ({ name: facility }))
  return (
    <Table hideHeader isStriped removeWrapper aria-label={tableLabel}>
      <TableHeader>
        <TableColumn>備品名</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {item => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}

export default FacilitiesList
