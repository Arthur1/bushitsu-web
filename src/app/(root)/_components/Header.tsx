'use client'

import { Link } from '@nextui-org/link'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import { usePathname } from 'next/navigation'
import type { FC } from 'react'

const Header: FC = () => {
  const pathname = usePathname()
  return (
    <Navbar>
      <NavbarBrand>Bushitsu</NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === '/'}>
          <Link color="foreground" href="/">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/boardgames'}>
          <Link color="foreground" href="/boardgames">
            Board Games
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/access'}>
          <Link color="foreground" href="/access">
            Access
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
