import { Box, Container, Grid, VStack, HStack, Text, Heading, Input, Textarea, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from './utils'

const inputStyle = {
  bg: '#f8f8f8', border: '1px solid #e5e5e5', borderRadius: '6px',
  color: '#1a1a1a', h: '50px', fontSize: 'sm' as const, fontWeight: 500,
  _placeholder: { color: '#aaa' },
  _focus: { borderColor: '#1a1a1a', bg: '#fff', boxShadow: '0 0 0 1px #1a1a1a', outline: 'none' },
  transition: 'all 0.2s',
}

export default function Contact() {
  return (
    <Box id="contact" bg="#fff" py={24}>
      <Container maxW="1200px" px={6}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={16}>
            <motion.div variants={fadeUp} custom={0}>
              <VStack align="start" gap={10}>
                <VStack align="start" gap={4}>
                  <Text fontSize="xs" fontWeight={700} letterSpacing="2px" color="#888" textTransform="uppercase">Contact</Text>
                  <Heading fontSize={{ base: '2rem', lg: '2.8rem' }} fontWeight={900} color="#1a1a1a" lineHeight={1.1}>
                    For any inquiries, contact our professional team
                  </Heading>
                  <Text fontSize="md" color="#666" lineHeight={1.8}>
                    Have a project in mind? We'd love to hear from you. Our team is ready to discuss your metal fabrication needs.
                  </Text>
                </VStack>

                <VStack align="start" gap={6}>
                  {[
                    { label: 'Office', value: 'Woreda 05, Sub City Bole, Addis Ababa, Ethiopia' },
                    { label: 'Email', value: 'visitus@yymplc.org' },
                    { label: 'Telephone', value: '+251-11-372-7466 / +251-11-372-2237' },
                  ].map((item) => (
                    <Box key={item.label}>
                      <Text fontSize="xs" fontWeight={700} letterSpacing="1.5px" color="#888" textTransform="uppercase" mb={1}>{item.label}</Text>
                      <Text fontSize="sm" color="#1a1a1a" fontWeight={600}>{item.value}</Text>
                    </Box>
                  ))}
                </VStack>
              </VStack>
            </motion.div>

            <motion.div variants={fadeUp} custom={1}>
              <VStack gap={4} align="stretch">
                <Input placeholder="Name *" {...inputStyle} />
                <Input placeholder="Email *" type="email" {...inputStyle} />
                <Input placeholder="Phone Number" type="tel" {...inputStyle} />
                <Textarea placeholder="Message *" {...inputStyle} h="auto" minH="140px" resize="none" />
                <Button
                  bg="#1a1a1a" color="#fff" fontWeight={700} letterSpacing="0.5px"
                  fontSize="sm" h="50px" borderRadius="6px" w="full"
                  _hover={{ bg: '#333', transform: 'translateY(-2px)', boxShadow: '0 10px 28px rgba(0,0,0,0.15)' }}
                  transition="all 0.3s"
                >Send message</Button>
              </VStack>
            </motion.div>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}
