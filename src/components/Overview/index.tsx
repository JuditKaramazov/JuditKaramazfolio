import styles from './index.module.css'

export default function Overview() {
    const overviewStack = [
        "HTML", 
        "CSS", 
        "SCSS", 
        "JavaScript", 
        "TypeScript", 
        "Python",
        "Swift",
        "React", 
        "Astro",
        "Next.js", 
        "Jest", 
        "Cafelito ☕️"
    ]

  return (
    <>
    <h2 className={styles.sectionTitle}>/overview</h2>
    <div className={styles.projectTechstack}>
        <ul>
        {overviewStack.map((tech) => (
            <li key={tech}>{tech}</li>
        ))}
        </ul>
        <p className={styles.contentDownload}>
            <a 
                className={`${styles.iconDownload} ${styles.btn} ${styles.btnPrimary}`} 
                href="/JuditKaramazovCV.pdf">Download CV
            </a>
        </p>
    </div>
    </>
  )
}
