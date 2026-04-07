import type { PropsWithChildren } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { DownloadIcon, IconLabel, LinkedInIcon, MailIcon } from './IconLabel'
import type { SiteContent } from '../content/siteContent'
import styles from './SiteFrame.module.css'

type SiteFrameProps = PropsWithChildren<{
  content: SiteContent
}>

export function SiteFrame({ content, children }: SiteFrameProps) {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#content">
        Skip to content
      </a>
      <div className={styles.frame}>
        <header className={styles.header}>
          <Link className={styles.brand} to="/">
            <span className={styles.brandName}>{content.profile.name}</span>
            <span className={styles.brandMeta}>{content.profile.shortRole}</span>
          </Link>
          <p className={styles.headerNote}>{content.profile.headline}</p>
          <nav aria-label="Primary" className={styles.nav}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.navLinkActive}`
                  : styles.navLink
              }
              end
              to="/"
            >
              Index
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.navLinkActive}`
                  : styles.navLink
              }
              to="/resume"
            >
              Resume
            </NavLink>
            <a
              className={styles.navLink}
              download="Ryan_Hassell_Resume.pdf"
              href={content.resumePdf}
            >
              <IconLabel icon={<DownloadIcon />}>Download Resume</IconLabel>
            </a>
          </nav>
        </header>
        <main className={styles.main} id="content">
          {children}
        </main>
        <footer className={styles.footer}>
          <p className={styles.footerNote}>{content.profile.footerNote}</p>
          <div className={styles.footerLinks}>
            <a href={`mailto:${content.contact.email}`}>
              <IconLabel icon={<MailIcon />}>Email</IconLabel>
            </a>
            <a href={content.contact.linkedinUrl} rel="noreferrer" target="_blank">
              <IconLabel icon={<LinkedInIcon />}>LinkedIn</IconLabel>
            </a>
            <a download="Ryan_Hassell_Resume.pdf" href={content.contact.resumeUrl}>
              <IconLabel icon={<DownloadIcon />}>Download Resume</IconLabel>
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
