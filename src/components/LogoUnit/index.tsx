import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import resume from '../../../_content/resume.json'
import styles from './index.module.css'

type Props = {
  small?: boolean
  hideLogo?: boolean
};

export default function LogoUnit({ small, hideLogo }: Props) {
  const router = useRouter()
  const { pathname } = router
  const isHome = pathname === '/'

  const H = small ? 'h2' : 'h1'

  return (
    <Link
      className={`${styles.logounit} ${small ? styles.small : ''}`}
      href="/"
      aria-current={isHome ? 'page' : null}
    >
      {!hideLogo && (
        <Image
          src="/karaLogo.png"
          alt="Kara Logo"
          className={styles.logo}
          width={500}
          height={100}
        />
      )}
      <H className={`p-name ${styles.title}`}>
        {resume.basics.name.toLowerCase()}
      </ H>
      <p className={`p-job-title ${styles.description}`}>
        {resume.basics.label.toLowerCase()}
      </p>
    </ Link>
  )
}
