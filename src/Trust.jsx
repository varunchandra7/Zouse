import { motion } from 'framer-motion'

export default function Trust() {
  return (
    <section 
      style={{
        backgroundColor: '#ffffff',
        padding: '80px 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <div 
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px'
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            color: '#111111',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.1,
            letterSpacing: '-0.04em',
            margin: 0
          }}
        >
          Beautiful Websites Don't Grow Businesses.<br />
          <span style={{ color: '#666666' }}>High-Converting Ones Do.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
            color: '#555555',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: 0,
            letterSpacing: '-0.01em'
          }}
        >
          We combine conversion strategy, modern design, and performance-focused development to turn more visitors into customers.
        </motion.p>
      </div>
    </section>
  )
}
