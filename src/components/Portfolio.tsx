import { useState } from 'react'
import { Box, Container, Grid, VStack, HStack, Text, Heading, Badge } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeLeft, fadeRight, stagger } from './utils'

import PI from '../assets/_DSC0427.JPG'
import PI2 from '../assets/2026-04-24 09.31.48.jpg'
import PI3 from '../assets/2026-04-24 09.29.15.jpg'
import PI4 from '../assets/2026-04-20 20.47.29.jpg'
import PI5 from '../assets/_DSC0052.JPG'
import PI6 from '../assets/2026-04-20 20.47.40.jpg'
import PI9 from '../assets/2026-04-20 20.47.44.jpg'
import PI10 from '../assets/2026-04-20 20.47.48.jpg'
import PI11 from '../assets/2026-04-24 17.21.38.jpg'
import PI12 from '../assets/2026-04-24 17.21.28.jpg'
import PI13 from '../assets/2026-04-20 20.47.36.jpg'
import PI14 from '../assets/2026-04-24 17.49.35.jpg'

const LeftArrow = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)
const RightArrow = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
)

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const next = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box position="relative" borderRadius="12px" overflow="hidden" h="380px" w="full"
      _hover={{ boxShadow: '0 20px 50px rgba(0,0,0,0.12)' }}
      style={{ transition: 'all 0.4s ease' }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AnimatePresence>
      {images.length > 1 && (
        <>
          <Box position="absolute" top="50%" left="4" transform="translateY(-50%)" cursor="pointer" bg="rgba(255,255,255,0.7)" borderRadius="full" p={2} onClick={prev} _hover={{ bg: 'white', transform: 'translateY(-50%) scale(1.1)' }} transition="all 0.2s">
            <LeftArrow />
          </Box>
          <Box position="absolute" top="50%" right="4" transform="translateY(-50%)" cursor="pointer" bg="rgba(255,255,255,0.7)" borderRadius="full" p={2} onClick={next} _hover={{ bg: 'white', transform: 'translateY(-50%) scale(1.1)' }} transition="all 0.2s">
            <RightArrow />
          </Box>
          <HStack position="absolute" bottom="4" left="50%" transform="translateX(-50%)" gap={2}>
            {images.map((_, i) => (
              <Box key={i} w={i === currentIndex ? "6" : "2"} h="2" borderRadius="full" bg={i === currentIndex ? 'white' : 'rgba(255,255,255,0.6)'} transition="all 0.3s" cursor="pointer" onClick={() => setCurrentIndex(i)} />
            ))}
          </HStack>
        </>
      )}
    </Box>
  );
}

const projects = [
  {
    images: [PI4, PI9, PI10], tag: 'Metal Work', duration: '4 weeks',
    title: 'Diffuser Piping at Omo Kuraz Sugar Factory',
    desc: 'YYM PLC designed, fabricated, and installed large-scale diffuser piping systems for the Omo Kuraz Sugar Project. Precision welding, assembly, and on-site installation under challenging industrial conditions.',
    quote: `"YYM PLC displayed excellent technical capability and completed our piping installation with high quality and professionalism."`,
    author: 'Project Supervisor, Omo Kuraz Sugar Factory',
  },
  {
    images: [PI2, PI13, PI14], tag: 'Metal Work', duration: '1 month',
    title: 'Great Ethiopian Renaissance Dam (GERD)',
    desc: 'Major structural and piping works for the GERD project, focusing on robust metal fabrication and assembly. Our team ensured reliable performance and safety compliance under tight schedules.',
    quote: `"Their reliability and craftsmanship were crucial to our success. YYM PLC consistently met our high engineering standards."`,
    author: 'Senior Engineer, GERD Project Office',
    flip: true,
  },
  {
    images: [PI3, PI12, PI11], tag: 'Metal Work', duration: '6 weeks',
    title: 'Duct Installation – Ethio Plywood and Furniture Factory',
    desc: 'Complete ducting and mechanical installations to improve factory air systems and operational efficiency. The project showcased expertise in precision fitting and metal fabrication.',
    quote: `"The project was delivered flawlessly, and the workmanship exceeded expectations. YYM PLC's team was responsive and professional throughout."`,
    author: 'Maintenance Head, Ethio Plywood and Furniture Factory',
  },
  {
    images: [PI6, PI5, PI], tag: 'Metal Work', duration: '6 weeks',
    title: 'Water Tank and Trailer Fabrication',
    desc: 'Fabricated and supplied customized steel water tanks, trailers, and industrial containers for clients across Ethiopia and neighboring regions, engineered for durability and field performance.',
    quote: `"YYM PLC delivered high-quality tanks and trailers that perform exceptionally well in our operations."`,
    author: 'Operations Manager, Private Transport & Logistics Firm',
    flip: true,
  },
]

export default function Portfolio() {
  return (
    <Box id="our-work" bg="#f8f8f8" py={24}>
      <Container maxW="1200px" px={6}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
          <motion.div variants={fadeLeft} custom={0}>
            <VStack align="start" gap={3} mb={16}>
              <Text fontSize="xs" fontWeight={700} letterSpacing="2px" color="#888" textTransform="uppercase">Portfolio</Text>
              <Heading fontSize={{ base: '2rem', lg: '2.6rem' }} fontWeight={900} color="#1a1a1a">
                See how we've transformed industrial projects<br />with expert craftsmanship.
              </Heading>
            </VStack>
          </motion.div>

          <VStack gap={20} align="stretch">
            {projects.map((p, i) => (
              <motion.div key={i} variants={i % 2 === 0 ? fadeLeft : fadeRight} custom={i}>
                <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={12} alignItems="center"
                  direction={p.flip ? 'row-reverse' : 'row'}>
                  {!p.flip && (
                    <ImageSlider images={p.images} />
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
                    <ImageSlider images={p.images} />
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
