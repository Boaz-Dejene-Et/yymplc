import { useState } from 'react'
import { Box, Container, VStack, Text, Heading } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from './utils'

const faqs = [
  { q: 'What services does YYM PLC provide?', a: 'YYM PLC offers metal fabrication, installation, erection, and maintenance. Our expertise covers air conditioning systems, steel structures, aluminum works, distribution network construction, and industrial piping.' },
  { q: 'What industries does YYM PLC serve?', a: 'We work with construction, manufacturing, oil and gas, utilities, and infrastructure development — providing high-quality metal fabrication and engineering solutions customized to each sector.' },
  { q: 'What makes YYM PLC different?', a: 'Our strength lies in technical competence, reliability, and commitment to quality. We combine advanced technology, skilled craftsmanship, and efficient project management to deliver outstanding results.' },
  { q: 'Does YYM PLC handle large-scale industrial projects?', a: 'Yes. YYM PLC has successfully executed several large-scale projects across Ethiopia and other African countries — from industrial plants to complex piping and structural steelwork.' },
  { q: 'How does YYM PLC ensure quality and safety?', a: 'We follow strict quality control procedures and adhere to international safety standards throughout every stage of production and installation.' },
  { q: 'Where is YYM PLC located and how can I contact you?', a: 'Our head office and workshop are located in Addis Ababa, Ethiopia. Address: Woreda 03, Sub City Nifas Silk Lafto. Phone: +251-11-372-7466. Email: yymplc@ethionet.et' },
  { q: 'Can YYM PLC provide customized metal fabrication solutions?', a: 'Absolutely. We specialize in custom-built metal structures and fabricated components tailored to each client\'s exact specifications.' },
]

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <Box id="faqs" bg="#f8f8f8" py={24}>
      <Container maxW="1200px" px={6}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={stagger}>
          <motion.div variants={fadeUp} custom={0}>
            <VStack align="start" gap={3} mb={14}>
              <Text fontSize="xs" fontWeight={700} letterSpacing="2px" color="#888" textTransform="uppercase">FAQs</Text>
              <Heading fontSize={{ base: '2rem', lg: '2.4rem' }} fontWeight={900} color="#1a1a1a">
                Got more questions? Send us your enquiry below
              </Heading>
            </VStack>
          </motion.div>

          <VStack gap={0} align="stretch">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <Box borderTop="1px solid #e5e5e5" py={5} cursor="pointer"
                  onClick={() => setOpen(open === i ? null : i)}>
                  <Box display="flex" justifyContent="space-between" alignItems="center" gap={4}>
                    <Text fontWeight={700} fontSize="md" color="#1a1a1a">{faq.q}</Text>
                    <Box
                      w="28px" h="28px" borderRadius="full" bg="#1a1a1a" flexShrink={0}
                      display="flex" alignItems="center" justifyContent="center"
                      style={{ transition: 'transform 0.3s ease', transform: open === i ? 'rotate(45deg)' : 'none' }}
                    >
                      <Text color="#fff" fontSize="lg" lineHeight={1}>+</Text>
                    </Box>
                  </Box>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                        <Text fontSize="sm" color="#666" lineHeight={1.8} mt={4} maxW="700px">{faq.a}</Text>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              </motion.div>
            ))}
            <Box borderTop="1px solid #e5e5e5" />
          </VStack>
        </motion.div>
      </Container>
    </Box>
  )
}
