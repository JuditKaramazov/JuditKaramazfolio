import meta from '../../../_content/meta.json'
import resume from '../../../_content/resume.json'
import BrandLogo from '../BrandLogo'
import Networks from '../Networks'
import Vcard from '../Vcard'
import styles from './index.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={`h-card ${styles.footer}`}>
      <BrandLogo small />
      <Networks label="Networks Footer" small />

      <p className={styles.actions}>
        <Vcard />

        <a className="u-coffee" href={meta.metaphoricalCoffee}>
          Coffee time?
        </a>
        <a href={meta.bugs}>Found a bug?</a>
      </p>
      <p className={styles.copyright}>
        <small>
          &copy; {year}{' '}
          <a className="u-url" href={meta.url}>
            {resume.basics.name.toLowerCase()}
          </a>{' '}
          &mdash; All Rights Reserved
        </small>
      </p>
    </footer>
  )
}
