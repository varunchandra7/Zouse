import { motion } from 'framer-motion';
import { Search, Brain, Palette, Code2, TrendingUp, Rocket } from 'lucide-react';

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Research',
    desc: 'Understand your audience',
    icon: <Search size={24} color="#111111" strokeWidth={1.5} />,
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Plan the conversion journey',
    icon: <Brain size={24} color="#111111" strokeWidth={1.5} />,
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Create a high-converting experience',
    icon: <Palette size={24} color="#111111" strokeWidth={1.5} />,
  },
  {
    num: '04',
    title: 'Build',
    desc: 'Develop a fast landing page',
    icon: <Code2 size={24} color="#111111" strokeWidth={1.5} />,
  },
  {
    num: '05',
    title: 'Optimize',
    desc: 'Improve performance and conversions',
    icon: <TrendingUp size={24} color="#111111" strokeWidth={1.5} />,
  },
  {
    num: '06',
    title: 'Launch',
    desc: 'Go live and start growing',
    icon: <Rocket size={24} color="#111111" strokeWidth={1.5} />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

export default function Process() {
  return (
    <>
      <style>{`
        .process-section {
          background: #ffffff;
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
        }

        .process-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .process-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .timeline-container {
          position: relative;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }

        /* The base gray line */
        .timeline-track {
          position: absolute;
          top: 36px;
          left: calc(100% / 12);
          right: calc(100% / 12);
          height: 1px;
          background: #EEEEEE;
          z-index: 0;
        }

        /* The animated dark line */
        .timeline-progress {
          position: absolute;
          top: 36px;
          left: calc(100% / 12);
          width: calc(100% - (100% / 6));
          height: 1px;
          background: #111111;
          z-index: 0;
          transform-origin: left;
        }

        .process-step {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .process-icon-wrap {
          width: 44px;
          height: 44px;
          background: #ffffff;
          border: 1px solid #EEEEEE;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          font-size: 18px;
          color: #111111;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .process-step:hover .process-icon-wrap {
          transform: translateY(-4px);
          border-color: #111111;
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }

        .process-num {
          font-size: 10px;
          font-weight: 700;
          color: #AAAAAA;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.1em;
          margin-bottom: 6px;
        }

        .process-title {
          font-size: 15px;
          font-weight: 700;
          color: #111111;
          font-family: 'Inter', sans-serif;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }

        .process-desc {
          font-size: 12px;
          line-height: 1.5;
          color: #666666;
          font-family: 'Inter', sans-serif;
          max-width: 140px;
        }

        @media (max-width: 1024px) {
          .timeline-container {
            grid-template-columns: repeat(3, 1fr);
            gap: 40px 16px;
          }
          .timeline-track, .timeline-progress {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .timeline-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 16px;
          }
          .process-header {
            margin-bottom: 48px;
          }
        }
      `}</style>

      <section id="process" className="process-section">
        {/* Top border */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: '#EEEEEE' }} />

        <div className="process-inner">
          <div className="process-header">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5 }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 12,
                fontSize: 10,
                fontWeight: 600,
                color: '#AAAAAA',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
              }}>
                <div style={{ width: 16, height: 1, background: '#CCCCCC' }} />
                OUR PROCESS
                <div style={{ width: 16, height: 1, background: '#CCCCCC' }} />
              </div>
              
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 800,
                color: '#111111',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: 12,
              }}>
                How We Turn Visitors Into Customers
              </h2>
              
              <p style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: '#666666',
                fontFamily: 'Inter, sans-serif',
                maxWidth: 480,
                margin: '0 auto',
              }}>
                Simple. Fast. Conversion-Focused.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="timeline-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {/* Background Line */}
            <div className="timeline-track" />
            
            {/* Animated Draw Line */}
            <motion.div 
              className="timeline-progress"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
            />

            {PROCESS_STEPS.map((step) => (
              <motion.div key={step.num} className="process-step" variants={stepVariants}>
                <div className="process-icon-wrap">
                  {step.icon}
                </div>
                <div className="process-num">{step.num}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
