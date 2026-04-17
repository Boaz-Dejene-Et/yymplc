import { Box, Container, Flex, HStack, VStack, Text, Heading, Link } from '@chakra-ui/react'

const quickLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Our work', href: '#our-work' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQs', href: '#faqs' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <Box bg="#1a1a1a" py={16}>
      <Container maxW="1200px" px={6}>
        <Flex justify="space-between" align="start" direction={{ base: 'column', md: 'row' }} gap={12} mb={12}>
          <VStack align="start" gap={4} maxW="320px">
            <Heading as="a" href="#" size="md" fontWeight={900} color="#fff" letterSpacing="1px">YYM PLC</Heading>
            <Text fontSize="sm" color="rgba(255,255,255,0.5)" lineHeight={1.8}>
              Complete metal fabrication and industrial engineering services delivering excellence across Ethiopia and beyond.
            </Text>
          </VStack>

          <VStack align="start" gap={4}>
            <Text fontSize="xs" fontWeight={700} letterSpacing="2px" color="rgba(255,255,255,0.4)" textTransform="uppercase">Quick links</Text>
            {quickLinks.map((l) => (
              <Link key={l.href} href={l.href} fontSize="sm" color="rgba(255,255,255,0.65)"
                _hover={{ color: '#fff', textDecoration: 'none' }} transition="color 0.2s">
                {l.label}
              </Link>
            ))}
          </VStack>

          <VStack align="start" gap={4}>
            <Text fontSize="xs" fontWeight={700} letterSpacing="2px" color="rgba(255,255,255,0.4)" textTransform="uppercase">Contact</Text>
            {[
              { label: 'Email', value: 'yymplc@ethionet.et' },
              { label: 'Phone', value: '+251-11-372-7466' },
              { label: 'Location', value: 'Addis Ababa, Ethiopia' },
            ].map((item) => (
              <Box key={item.label}>
                <Text fontSize="xs" color="rgba(255,255,255,0.4)" mb={0.5}>{item.label}</Text>
                <Text fontSize="sm" color="rgba(255,255,255,0.7)" fontWeight={500}>{item.value}</Text>
              </Box>
            ))}
          </VStack>
        </Flex>

        <Box borderTop="1px solid rgba(255,255,255,0.1)" pt={8}>
          <Flex justify="space-between" align="center" direction={{ base: 'column', md: 'row' }} gap={4}>
            <Text fontSize="xs" color="rgba(255,255,255,0.4)">© 2025 YYM PLC. All rights reserved.</Text>
            <HStack gap={6}>
              {['Privacy Policy', 'Terms of Service'].map((l) => (
                <Link key={l} fontSize="xs" color="rgba(255,255,255,0.4)"
                  _hover={{ color: '#fff', textDecoration: 'none' }} transition="color 0.2s">{l}</Link>
              ))}
            </HStack>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}
