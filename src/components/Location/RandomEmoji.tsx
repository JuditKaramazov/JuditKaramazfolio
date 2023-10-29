import styles from './index.module.css'

type Props = {
  country: {
    name: string
    code: string
  }
}

export function RandomEmoji ({ country }: Props) {
  const emojis = ['📖', '❤️', '✏️', '🌹', '🖥️', '🎵', '🎮']
  const randomIndex = Math.floor(Math.random() * emojis.length)
  const emoji = emojis[randomIndex]

  return (
    <span role="img" aria-label={country.name} className={styles.emoji}>
      {emoji}
    </span>
  )
}
