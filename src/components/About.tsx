import { Box, Container, Grid, VStack, Text, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { CountUp, fadeUp, stagger } from './utils'

const IMG_A = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80'
const IMG_B = 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80'
const IMG_C = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80'
const IMG_D = 'https://images.unsplash.com/photo-1565462905408-4c75a8e4c9e5?w=400&q=80'

const stats = [
  { value: 8, suffix: '+', label: 'Years experience', sub: 'Delivering industrial excellence' },
  { value: 25, suffix: '+', label: 'Projects completed', sub: 'Across Ethiopia and beyond' },
  { value: 30, suffix: '+', label: 'Skilled Tradespeople', sub: 'Our team of certified experts' },
  { value: 100, suffix: '%', label: 'Client satisfaction', sub: 'All clients satisfied with our work' },
]

export default function About() {
  return (
    <Box id="about" bg="#f8f8f8" py={24}>
      <Container maxW="1200px" px={6}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <Grid templateColumns={{ base: '1fr', lg: '5fr 7fr' }} gap={16} alignItems="start" mb={20}>
            <motion.div variants={fadeUp} custom={0}>
              <VStack align="start" gap={6}>
                <Text fontSize="xs" fontWeight={700} letterSpacing="2px" color="#888" textTransform="uppercase">About YYM</Text>
                <Heading fontSize={{ base: '2rem', lg: '2.6rem' }} fontWeight={900} lineHeight={1.15} color="#1a1a1a">
                  Next level metal work production
                </Heading>
              </VStack>
            </motion.div>
            <motion.div variants={fadeUp} custom={1}>
              <VStack align="start" gap={4}>
                <Text fontSize="md" color="#555" lineHeight={1.85}>
                  At YYM PLC, we specialize in providing complete metal fabrication and industrial engineering services — from design and manufacturing to installation and maintenance. Our team delivers technically competent, high-quality products and services that meet international standards.
                </Text>
                <Text fontSize="md" color="#555" lineHeight={1.85}>
                  We support clients across diverse industries including construction, manufacturing, oil and gas, energy, and infrastructure development. With extensive experience in both local and international projects, YYM PLC ensures precision, durability, and operational efficiency in every task.
                </Text>
                <Box mt={2} p={5} bg="#1a1a1a" borderRadius="8px">
                  <Text fontSize="sm" color="rgba(255,255,255,0.85)" fontStyle="italic" lineHeight={1.8}>
                    "YYM PLC is dedicated to advancing industrial technology in Ethiopia and Africa, ensuring that every project delivers lasting value, safety, and performance."
                  </Text>
                </Box>
              </VStack>
            </motion.div>
          </Grid>

          <motion.div variants={stagger}>
            <Grid templateColumns={{ base: '1fr 1fr', lg: 'repeat(4,1fr)' }} gap={4} mb={16}>
              {[IMG_A, IMG_B, IMG_C, IMG_D].map((src, i) => (
                <motion.div key={i} variants={fadeUp} custom={i}>
                  <Box h="220px" borderRadius="10px" overflow="hidden"
                    _hover={{ transform: 'scale(1.04)', boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }}
                    style={{ transition: 'all 0.35s ease' }}>
                    <Box as={"img" as any} src={src} w="full" h="full" style={{ objectFit: 'cover' }} />
                  </Box>
                </motion.div>
              ))}
            </Grid>
          </motion.div>

          <Grid templateColumns={{ base: '1fr 1fr', lg: 'repeat(4,1fr)' }} gap={8}>
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <VStack align="start" gap={1}>
                  <Heading fontSize="2.8rem" fontWeight={900} color="#1a1a1a" lineHeight={1}>
                    <CountUp end={s.value} suffix={s.suffix} />
                  </Heading>
                  <Text fontSize="sm" fontWeight={700} color="#1a1a1a">{s.label}</Text>
                  <Text fontSize="xs" color="#999">{s.sub}</Text>
                </VStack>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}
