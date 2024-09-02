'use client'

import { Link } from '@nextui-org/link'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import { usePathname } from 'next/navigation'
import { useState, type FC } from 'react'

const Header: FC = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const links = [
    { href: '/', label: 'About' },
    { href: '/boardgames/', label: 'Board Games' },
    { href: '/facilities/', label: 'Facilities' },
    { href: '/access/', label: 'Access' },
  ]
  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
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
        {links.map(link => (
          <NavbarItem key={link.href} isActive={pathname === link.href}>
            <Link color="foreground" href={link.href}>
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {links.map(link => (
          <NavbarMenuItem key={link.href} isActive={pathname === link.href}>
            <Link color="foreground" href={link.href}>
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
