import { useRouter } from 'next/router'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Overview from '../../components/Overview'
import MetaFavicon from '../../components/Meta/Favicon'
import ThemeSwitch from '../../components/ThemeSwitch'
import ScrollToTop from '../../components/ScrollToTop'
import styles from './index.module.css'

export default function Site({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const currentSlug = router.query.slug as string

  return (
    <>
      <MetaFavicon />
      <ThemeSwitch />
      <Header small={router.pathname !== '/'} currentSlug={currentSlug} />
      {router.pathname === '/' && <Overview />}
      <main className={styles.screen}>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
