import { Box, Container, Grid, VStack, Text, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { CountUp, fadeLeft, fadeRight, scaleUp, stagger } from './utils'

import IMG_A from '../assets/IMG_20220223_171200.jpg'
import IMG_B from '../assets/2026-04-20 20.47.21.jpg'
import IMG_C from '../assets/2026-04-20 20.46.56.jpg'
import IMG_D from '../assets/2026-04-24 19.33.30.jpg'

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
            <motion.div variants={fadeLeft} custom={0}>
              <VStack align="start" gap={6}>
                <Text fontSize="xs" fontWeight={700} letterSpacing="2px" color="#888" textTransform="uppercase">About YYM</Text>
                <Heading fontSize={{ base: '2rem', lg: '2.6rem' }} fontWeight={900} lineHeight={1.15} color="#1a1a1a">
                  Next level metal work production
                </Heading>
              </VStack>
            </motion.div>
            <motion.div variants={fadeRight} custom={1}>
              <VStack align="start" gap={4}>
                <Text fontSize="md" color="#555" lineHeight={1.85}>
                  At YYM PLC, we specialize in providing complete metal fabrication and industrial engineering services — from design and manufacturing to installation and maintenance. Our team delivers technically competent, high-quality products and services that meet international standards.
                </Text>
                <Text fontSize="md" color="#555" lineHeight={1.85}>
                  We support clients across diverse industries including construction, manufacturing, energy, and infrastructure development. With extensive experience in both local and international projects, YYM PLC ensures precision, durability, and operational efficiency in every task.
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
              {[
                { src: IMG_A, title: 'Gold washing machine' },
                { src: IMG_B, title: 'Track mounted concrete pump' },
                { src: IMG_C, title: 'Smart pole street light Production' },
                { src: IMG_D, title: 'Smart pole Street light during night time' }
              ].map((item, i) => (
                <motion.div key={i} variants={scaleUp} custom={i}>
                  <Box position="relative" h="220px" borderRadius="10px" overflow="hidden"
                    _hover={{ transform: 'scale(1.04)', boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }}
                    style={{ transition: 'all 0.35s ease' }}>
                    <Box position="absolute" top={0} left={0} right={0} bg="rgba(0,0,0,0.5)" p={3} zIndex={1}>
                      <Text color="white" fontSize="sm" fontWeight={600} textAlign="center" textTransform="capitalize">
                        {item.title}
                      </Text>
                    </Box>
                    <Box as={"img" as any} src={item.src} w="full" h="full" style={{ objectFit: 'cover' }} />
                  </Box>
                </motion.div>
              ))}
            </Grid>
          </motion.div>

          <Grid templateColumns={{ base: '1fr 1fr', lg: 'repeat(4,1fr)' }} gap={8}>
            {stats.map((s, i) => (
              <motion.div key={i} variants={scaleUp} custom={i}>
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
