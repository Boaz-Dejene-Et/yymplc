import { useState, useEffect } from 'react'
import { Box, Container, HStack, Heading, Button, Link } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

const MotionBox = motion(Box)

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our work', href: '#our-work' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Box
        as="header"
        position="fixed" top={0} left={0} right={0} h="70px"
        bg={scrolled ? 'rgba(255,255,255,0.95)' : '#ffffff'}
        borderBottom="1px solid #e5e5e5"
        zIndex={1000} display="flex" alignItems="center"
        style={{
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxW="1200px" w="full" display="flex" justifyContent="space-between" alignItems="center" px={6}>
          <Heading as="a" href="#" size="md" fontWeight={900} letterSpacing="1px" color="#1a1a1a">
            YYM PLC
          </Heading>

          <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} fontSize="sm" fontWeight={500} color="#1a1a1a"
                _hover={{ color: '#666', textDecoration: 'none' }} transition="color 0.2s">
                {l.label}
              </Link>
            ))}
          </HStack>

          <Button
            as="a" href="#contact"
            bg="#1a1a1a" color="#fff" size="sm" fontWeight={600}
            fontSize="xs" px={6} h="38px" borderRadius="2px"
            _hover={{ bg: '#333', transform: 'translateY(-1px)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            display={{ base: 'none', md: 'flex' }} alignItems="center" transition="all 0.2s"
          >Get in touch</Button>

          <Box display={{ base: 'flex', md: 'none' }} flexDir="column" gap="5px"
            cursor="pointer" onClick={() => setMenuOpen(!menuOpen)} p={2}>
            {[0, 1, 2].map((i) => (
              <Box key={i} h="2px" w="22px" bg="#1a1a1a" borderRadius="2px"
                style={{
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                    : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'scaleX(0)'
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                  transition: 'all 0.25s ease',
                }} />
            ))}
          </Box>
        </Container>
      </Box>

      <AnimatePresence>
        {menuOpen && (
          <MotionBox
            display={{ base: 'flex', md: 'none' }}
            position="fixed" top="70px" left={0} right={0}
            bg="#fff" borderBottom="1px solid #e5e5e5"
            zIndex={999} flexDir="column" p={6} gap={4}
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.2 }}
          >
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} fontSize="sm" fontWeight={600}
                color="#1a1a1a" _hover={{ color: '#666', textDecoration: 'none' }}
                onClick={() => setMenuOpen(false)} py={1}>
                {l.label}
              </Link>
            ))}
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  )
}
