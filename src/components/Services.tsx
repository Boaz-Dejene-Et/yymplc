import { useState } from 'react'
import { Box, Container, Grid, VStack, Text, Heading } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from './utils'

const services = [
  {
    title: 'Reliable Engineering Solutions',
    desc: 'At YYM PLC, we provide comprehensive engineering and metalwork services that combine innovation, precision, and reliability.',
    full: true,
  },
  {
    title: 'Design & Consultation',
    desc: 'Complete design and consultation services, including detailed engineering drawings, technical studies, and feasibility assessments.',
  },
  {
    title: 'Metal Fabrication',
    desc: 'High-quality metal fabrication and precision welding. Custom steel structures, tanks, platforms, ducts, and piping systems for industrial use.',
  },
  {
    title: 'Fabrication & Installation',
    desc: 'Professional installation and assembly services for mechanical systems, structural steelwork, and industrial machinery.',
  },
  {
    title: 'Maintenance & After-Sales',
    desc: 'Preventive maintenance, repair, and inspection services to keep your equipment and systems performing at their best.',
  },
  {
    title: 'Material Supply',
    desc: 'High-quality metal and mechanical materials including structural steel, pipes, fittings, and fabrication components.',
  },
]

export default function Services() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <Box id="services" bg="#fff" py={24}>
      <Container maxW="1200px" px={6}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
          <motion.div variants={fadeUp} custom={0}>
            <VStack align="start" gap={3} mb={14}>
              <Text fontSize="xs" fontWeight={700} letterSpacing="2px" color="#888" textTransform="uppercase">What we do</Text>
              <Heading fontSize={{ base: '2rem', lg: '2.6rem' }} fontWeight={900} color="#1a1a1a">
                Find out which one of our services<br />fit the needs of your project
              </Heading>
            </VStack>
          </motion.div>

          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={0}>
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}
                style={{ gridColumn: s.full ? '1 / -1' : 'auto' }}>
                <Box
                  p={8} borderBottom="1px solid #e8e8e8"
                  borderRight={{ md: i % 2 === 0 ? '1px solid #e8e8e8' : 'none' }}
                  cursor={s.full ? 'default' : 'pointer'} role="group"
                  bg={s.full || active === i ? '#1a1a1a' : '#fff'}
                  onClick={() => !s.full && setActive(active === i ? null : i)}
                  style={{ transition: 'background 0.3s ease' }}
                >
                  <VStack align="start" gap={3}>
                    <Box w="28px" h="2px" bg={s.full || active === i ? '#fff' : '#1a1a1a'}
                      style={{ transition: 'all 0.3s ease' }} />
                    <Heading fontSize="1.05rem" fontWeight={700}
                      color={s.full || active === i ? '#fff' : '#1a1a1a'}
                      style={{ transition: 'color 0.3s ease' }}>
                      {s.title}
                    </Heading>
                    <AnimatePresence>
                      {(active === i || s.full) && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                          <Text fontSize="sm" color={s.full || active === i ? 'rgba(255,255,255,0.75)' : '#888'}
                            lineHeight={1.7} style={{ transition: 'color 0.3s ease' }}>
                            {s.desc}
                          </Text>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <Text fontSize="lg" color={s.full || active === i ? '#fff' : '#1a1a1a'}
                      style={{ transition: 'all 0.3s ease', transform: active === i ? 'translateX(6px)' : 'none' }}>
                      →
                    </Text>
                  </VStack>
                </Box>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}
