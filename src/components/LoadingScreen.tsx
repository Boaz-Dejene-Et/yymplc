import { Box, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete()
    }, 1500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100vh' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#1a1a1a',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      >
        <Heading size="3xl" fontWeight={900} letterSpacing="4px" color="#fff">
          YYM PLC
        </Heading>
      </motion.div>
    </motion.div>
  )
}
