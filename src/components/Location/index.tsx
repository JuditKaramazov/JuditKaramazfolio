import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion'
import { useLocation } from '../../hooks/useLocation'
import { getAnimationProps, moveInTop } from '../Transitions'
import { RandomEmoji } from './RandomEmoji'
import styles from './index.module.css'

export default function Location() {
  const { now } = useLocation()
  const shouldReduceMotion = useReducedMotion()

  return now?.city ? (
    <LazyMotion features={domAnimation}>
      <m.section
        aria-label="Location"
        variants={moveInTop}
        className={styles.location}
        {...getAnimationProps(shouldReduceMotion)}
      >
        <RandomEmoji country={{ code: now.country_code, name: now.country }} />
        {now.city} <span>Now</span>
      </ m.section>
    </ LazyMotion>
  ) : null
}
