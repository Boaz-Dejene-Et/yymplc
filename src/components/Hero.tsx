import { Box, Container, Grid, VStack, HStack, Text, Heading, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from './utils'

const MotionVStack = motion(VStack)

const IMG = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
const IMG2 = 'https://images.unsplash.com/photo-1565462905408-4c75a8e4c9e5?w=400&q=80'
const IMG3 = 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80'

export default function Hero() {
  return (
    <Box id="home" pt="100px" pb="80px" bg="#fff" overflow="hidden" position="relative">
      <motion.div
        style={{ position: 'absolute', top: '15%', right: '3%', width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,26,26,0.04) 0%, transparent 70%)', pointerEvents: 'none' }}
        animate={{ y: [0, -24, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Container maxW="1200px" px={6}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={16} alignItems="center">
          <MotionVStack gap={6} align="start" variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0}>
              <Box display="inline-flex" alignItems="center" gap={2} bg="#f3f3f3" px={3} py={1} borderRadius="full">
                <Box w="8px" h="8px" borderRadius="full" bg="#22c55e"
                  style={{ boxShadow: '0 0 0 0 rgba(34,197,94,0.4)' }}
                  as={motion.div as any}
                  animate={{ boxShadow: ['0 0 0 0 rgba(34,197,94,0.4)', '0 0 0 8px rgba(34,197,94,0)', '0 0 0 0 rgba(34,197,94,0.4)'] }}
                  transition={{ duration: 2, repeat: Infinity } as any}
                />
                <Text fontSize="xs" fontWeight={600} letterSpacing="0.5px">Available for work</Text>
              </Box>
            </motion.div>

            <motion.div variants={fadeUp} custom={1}>
              <Heading as="h1" fontSize={{ base: '2.8rem', lg: '3.8rem' }} fontWeight={900} lineHeight={1.1} color="#1a1a1a">
                Your trusted partner for quality metal work
              </Heading>
            </motion.div>

            <motion.div variants={fadeUp} custom={2}>
              <Text fontSize="md" color="#666" lineHeight={1.8} maxW="480px">
                Our goal is to exceed client expectations through outstanding workmanship, innovative solutions, and reliable service.
              </Text>
            </motion.div>

            <motion.div variants={fadeUp} custom={3}>
              <HStack gap={4}>
                <Button as="a" href="#contact" bg="#1a1a1a" color="#fff" fontWeight={600}
                  px={7} h="48px" borderRadius="4px" fontSize="sm"
                  _hover={{ bg: '#333', transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
                  transition="all 0.3s">Work with us</Button>
                <Button as="a" href="#our-work" bg="transparent" color="#1a1a1a" border="1.5px solid #1a1a1a"
                  fontWeight={600} px={7} h="48px" borderRadius="4px" fontSize="sm"
                  _hover={{ bg: '#1a1a1a', color: '#fff', transform: 'translateY(-2px)' }}
                  transition="all 0.3s">Our work</Button>
              </HStack>
            </motion.div>
          </MotionVStack>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}>
            <VStack gap={4}>
              <Box w="full" h="360px" borderRadius="12px" overflow="hidden">
                <Box as="img" src={IMG} w="full" h="full" style={{ objectFit: 'cover' }} />
              </Box>
              <HStack gap={4} w="full">
                <Box flex={1} h="180px" borderRadius="12px" overflow="hidden">
                  <Box as="img" src={IMG2} w="full" h="full" style={{ objectFit: 'cover' }} />
                </Box>
                <Box flex={1} h="180px" borderRadius="12px" overflow="hidden">
                  <Box as="img" src={IMG3} w="full" h="full" style={{ objectFit: 'cover' }} />
                </Box>
              </HStack>
            </VStack>
          </motion.div>
        </Grid>
      </Container>
    </Box>
  )
}
