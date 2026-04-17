import { Box, Container, Grid, VStack, HStack, Text, Heading, Badge } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from './utils'

const PI = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80'
const PI2 = 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=700&q=80'
const PI3 = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80'
const PI4 = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80'

const projects = [
  {
    img: PI, tag: 'Metal Work', duration: '4 weeks',
    title: 'Diffuser Piping at Omo Kuraz Sugar Factory',
    desc: 'YYM PLC designed, fabricated, and installed large-scale diffuser piping systems for the Omo Kuraz Sugar Project. Precision welding, assembly, and on-site installation under challenging industrial conditions.',
    quote: '"YYM PLC displayed excellent technical capability and completed our piping installation with high quality and professionalism."',
    author: 'Project Supervisor, Omo Kuraz Sugar Factory',
  },
  {
    img: PI2, tag: 'Metal Work', duration: '1 month',
    title: 'Great Ethiopian Renaissance Dam (GERD)',
    desc: 'Major structural and piping works for the GERD project, focusing on robust metal fabrication and assembly. Our team ensured reliable performance and safety compliance under tight schedules.',
    quote: '"Their reliability and craftsmanship were crucial to our success. YYM PLC consistently met our high engineering standards."',
    author: 'Senior Engineer, GERD Project Office',
    flip: true,
  },
  {
    img: PI3, tag: 'Metal Work', duration: '6 weeks',
    title: 'Duct Installation – Ethio Plywood and Furniture Factory',
    desc: 'Complete ducting and mechanical installations to improve factory air systems and operational efficiency. The project showcased expertise in precision fitting and metal fabrication.',
    quote: '"The project was delivered flawlessly, and the workmanship exceeded expectations. YYM PLC\'s team was responsive and professional throughout."',
    author: 'Maintenance Head, Ethio Plywood and Furniture Factory',
  },
  {
    img: PI4, tag: 'Metal Work', duration: '6 weeks',
    title: 'Water Tank and Trailer Fabrication',
    desc: 'Fabricated and supplied customized steel water tanks, trailers, and industrial containers for clients across Ethiopia and neighboring regions, engineered for durability and field performance.',
    quote: '"YYM PLC delivered high-quality tanks and trailers that perform exceptionally well in our operations."',
    author: 'Operations Manager, Private Transport & Logistics Firm',
    flip: true,
  },
]

export default function Portfolio() {
  return (
    <Box id="our-work" bg="#f8f8f8" py={24}>
      <Container maxW="1200px" px={6}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
          <motion.div variants={fadeUp} custom={0}>
            <VStack align="start" gap={3} mb={16}>
              <Text fontSize="xs" fontWeight={700} letterSpacing="2px" color="#888" textTransform="uppercase">Portfolio</Text>
              <Heading fontSize={{ base: '2rem', lg: '2.6rem' }} fontWeight={900} color="#1a1a1a">
                See how we've transformed industrial projects<br />with expert craftsmanship.
              </Heading>
            </VStack>
          </motion.div>

          <VStack gap={20} align="stretch">
            {projects.map((p, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center"
                  direction={p.flip ? 'row-reverse' : 'row'}>
                  {!p.flip && (
                    <Box borderRadius="12px" overflow="hidden" h="380px"
                      _hover={{ transform: 'scale(1.02)', boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}
                      style={{ transition: 'all 0.4s ease' }}>
                      <Box as="img" src={p.img} w="full" h="full" style={{ objectFit: 'cover' }} />
                    </Box>
                  )}
                  <VStack align="start" gap={5}>
                    <HStack gap={3}>
                      <Badge bg="#1a1a1a" color="#fff" borderRadius="full" px={3} py={1} fontSize="xs" fontWeight={600}>{p.tag}</Badge>
                      <Text fontSize="xs" color="#888">⏱ {p.duration}</Text>
                    </HStack>
                    <Heading fontSize={{ base: '1.5rem', lg: '1.8rem' }} fontWeight={900} color="#1a1a1a" lineHeight={1.2}>{p.title}</Heading>
                    <Text fontSize="sm" color="#666" lineHeight={1.8}>{p.desc}</Text>
                    <Box pl={5} borderLeft="3px solid #1a1a1a" py={2}>
                      <Text fontSize="sm" color="#1a1a1a" fontStyle="italic" lineHeight={1.7}>{p.quote}</Text>
                      <Text fontSize="xs" color="#888" mt={2} fontWeight={600}>— {p.author}</Text>
                    </Box>
                  </VStack>
                  {p.flip && (
                    <Box borderRadius="12px" overflow="hidden" h="380px"
                      _hover={{ transform: 'scale(1.02)', boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}
                      style={{ transition: 'all 0.4s ease' }}>
                      <Box as="img" src={p.img} w="full" h="full" style={{ objectFit: 'cover' }} />
                    </Box>
                  )}
                </Grid>
              </motion.div>
            ))}
          </VStack>
        </motion.div>
      </Container>
    </Box>
  )
}
