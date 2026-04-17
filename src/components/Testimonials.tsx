import { Box, Container, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { fadeUp } from './utils'

const reviews = [
  { text: 'YYM PLC displayed excellent technical capability and professionalism.', name: 'Omo Kuraz Sugar Factory' },
  { text: 'Their reliability and craftsmanship were crucial to our success.', name: 'GERD Project Office' },
  { text: 'The project was delivered flawlessly, workmanship exceeded expectations.', name: 'Ethio Plywood Factory' },
  { text: 'High-quality tanks and trailers that perform exceptionally well in our operations.', name: 'Private Logistics Firm' },
  { text: 'Remarkable precision and commitment to quality on every deliverable.', name: 'Construction Client' },
  { text: 'Professional team, on-time delivery, and outstanding results.', name: 'Manufacturing Client' },
]

const doubled = [...reviews, ...reviews]

export default function Testimonials() {
  return (
    <Box bg="#fff" py={20} overflow="hidden">
      <Container maxW="1200px" px={6} mb={12}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <Text fontSize="xs" fontWeight={700} letterSpacing="2px" color="#888" textTransform="uppercase" mb={3}>
            Testimonials
          </Text>
          <Text fontSize={{ base: '2rem', lg: '2.4rem' }} fontWeight={900} color="#1a1a1a">
            Hear from our clients
          </Text>
        </motion.div>
      </Container>

      <Box position="relative">
        <motion.div
          style={{ display: 'flex', gap: 24, width: 'max-content' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((r, i) => (
            <Box key={i} minW="320px" maxW="320px" bg="#f8f8f8" borderRadius="12px" p={6}
              border="1px solid #eee">
              <VStack align="start" gap={3}>
                <Text fontSize="sm" color="#555" lineHeight={1.75} fontStyle="italic">
                  "{r.text}"
                </Text>
                <Text fontSize="xs" fontWeight={700} color="#1a1a1a">— {r.name}</Text>
              </VStack>
            </Box>
          ))}
        </motion.div>
        <Box position="absolute" left={0} top={0} bottom={0} w="80px"
          background="linear-gradient(to right, #fff, transparent)" pointerEvents="none" />
        <Box position="absolute" right={0} top={0} bottom={0} w="80px"
          background="linear-gradient(to left, #fff, transparent)" pointerEvents="none" />
      </Box>
    </Box>
  )
}
