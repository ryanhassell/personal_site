import type { ReactNode, SVGProps } from 'react'
import linkedInBlueIcon from '../assets/linkedin-blue.svg'
import styles from './IconLabel.module.css'

type IconLabelProps = {
  icon: ReactNode
  children: ReactNode
}

export function IconLabel({ icon, children }: IconLabelProps) {
  return (
    <span className={styles.label}>
      <span aria-hidden="true" className={styles.icon}>
        {icon}
      </span>
      <span>{children}</span>
    </span>
  )
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 16 16" {...props}>
      <path
        d="M1.5 3.5h13v9h-13z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="m2.2 4.2 5.3 4.1a.8.8 0 0 0 1 0l5.3-4.1"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  )
}

export function LinkedInIcon() {
  return <img alt="" src={linkedInBlueIcon} />
}

export function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 16 16" {...props}>
      <path
        d="M8 2.2v7.2m0 0 2.6-2.6M8 9.4 5.4 6.8"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="1.2"
      />
      <path
        d="M2.3 12.5h11.4"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="1.2"
      />
    </svg>
  )
}
