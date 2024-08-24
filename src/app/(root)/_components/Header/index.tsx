'use client'

import { Link } from '@nextui-org/link'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import { usePathname } from 'next/navigation'
import { useState, type FC } from 'react'

const Header: FC = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link color="foreground" href="/">
            Bushitsu
          </Link>
        </NavbarBrand>
      </NavbarContent>
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
        <NavbarItem isActive={pathname === '/facilities'}>
          <Link color="foreground" href="/facilities">
            Facilities
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
