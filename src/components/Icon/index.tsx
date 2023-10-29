import {
  ArrowDownCircle,
  Check,
  ChevronDown,
  Compass,
  Contrast,
  FileText,
  Github,
  Globe,
  Image,
  Info,
  Instagram,
  Linkedin,
  Mail,
  Moon,
  Star,
  Sun
} from 'lucide-react'
import styles from './index.module.css'

export default function Icon({ name, ...props }: { name: string }) {
  const components = {
    Email: Mail,
    Link: Compass,
    Download: ArrowDownCircle,
    'Info & Download': ArrowDownCircle,
    Styleguide: FileText,
    Instagram: Instagram,
    ArrowDownCircle,
    GitHub: Github,
    Linkedin: Linkedin,
    Sun,
    Moon,
    Compass,
    FileText,
    Image,
    Mail,
    Globe,
    Star,
    Info,
    ChevronDown,
    Check,
    Contrast
  }

  const IconMapped = components[name]

  return IconMapped ? (
    <IconMapped className={`${styles.icon} ${styles[name]}`} {...props} />
  ) : null
}
