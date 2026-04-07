import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  DownloadIcon,
  IconLabel,
  LinkedInIcon,
  MailIcon,
} from '../components/IconLabel'
import type {
  EducationItem,
  ExperienceItem,
  LeadershipItem,
  ProjectItem,
  SiteContent,
  SkillGroup,
} from '../content/siteContent'
import styles from './ResumePage.module.css'

type ResumePageProps = {
  content: SiteContent
}

export function ResumePage({ content }: ResumePageProps) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.heroLabel}>Resume / Detailed View</p>
          <h1 className={styles.heroTitle}>{content.profile.name}</h1>
          <p className={styles.heroText}>{content.profile.summary}</p>
        </div>
        <div className={styles.heroActions}>
          <a
            className={styles.actionPrimary}
            download="Ryan_Hassell_Resume.pdf"
            href={content.resumePdf}
          >
            <IconLabel icon={<DownloadIcon />}>Download Resume</IconLabel>
          </a>
          <a className={styles.actionSecondary} href={`mailto:${content.contact.email}`}>
            <IconLabel icon={<MailIcon />}>Email</IconLabel>
          </a>
          <a
            className={styles.actionSecondary}
            href={content.contact.linkedinUrl}
            rel="noreferrer"
            target="_blank"
          >
            <IconLabel icon={<LinkedInIcon />}>LinkedIn</IconLabel>
          </a>
          <Link className={styles.actionSecondary} to="/">
            Back to Index
          </Link>
        </div>
      </section>

      <ResumeSection
        description="Fuller context for the roles shaping the current portfolio."
        title="Experience"
      >
        {content.experience.map((item) => (
          <ExperienceEntry item={item} key={`${item.company}-${item.role}`} />
        ))}
      </ResumeSection>

      <ResumeSection
        description="Project work spanning AI interfaces, research automation, and public-utility scale backend systems."
        title="Projects"
      >
        {content.projects.map((project) => (
          <ProjectEntry key={project.name} project={project} />
        ))}
      </ResumeSection>

      <ResumeSection
        description="Formal background and student leadership."
        title="Education & Leadership"
      >
        <div className={styles.stack}>
          {content.education.map((item) => (
            <EducationEntry item={item} key={item.school} />
          ))}
          {content.leadership.map((item) => (
            <LeadershipEntry item={item} key={`${item.organization}-${item.role}`} />
          ))}
        </div>
      </ResumeSection>

      <ResumeSection
        description="Core technical range used across production work and project delivery."
        title="Skills"
      >
        <div className={styles.skillGrid}>
          {content.skills.map((group) => (
            <SkillBlock group={group} key={group.title} />
          ))}
        </div>
      </ResumeSection>
    </div>
  )
}

function ResumeSection({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLead}>
        <p className={styles.sectionTitle}>{title}</p>
        <p className={styles.sectionDescription}>{description}</p>
      </div>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  )
}

function ExperienceEntry({ item }: { item: ExperienceItem }) {
  return (
    <article className={styles.entry}>
      <div className={styles.entryHeader}>
        <h2 className={styles.entryTitle}>{item.role}</h2>
        <p className={styles.entryDate}>
          {item.start} - {item.end}
        </p>
      </div>
      <div className={styles.entrySubhead}>
        <span>{item.company}</span>
        <span>{item.location}</span>
      </div>
      <p className={styles.entrySummary}>{item.summary}</p>
      <ul className={styles.entryList}>
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className={styles.tagList}>
        {item.technologies.map((technology) => (
          <span className={styles.tag} key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </article>
  )
}

function ProjectEntry({ project }: { project: ProjectItem }) {
  return (
    <article className={styles.entry}>
      <div className={styles.entryHeader}>
        <h2 className={styles.entryTitle}>{project.name}</h2>
        <p className={styles.entryDate}>{project.organization}</p>
      </div>
      <p className={styles.entrySummary}>{project.summary}</p>
      <ul className={styles.entryList}>
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className={styles.tagList}>
        {project.stack.map((item) => (
          <span className={styles.tag} key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}

function EducationEntry({ item }: { item: EducationItem }) {
  return (
    <article className={styles.entry}>
      <div className={styles.entryHeader}>
        <h2 className={styles.entryTitle}>{item.school}</h2>
        <p className={styles.entryDate}>{item.end}</p>
      </div>
      <div className={styles.entrySubhead}>
        <span>{item.degree}</span>
        <span>{item.location}</span>
      </div>
    </article>
  )
}

function LeadershipEntry({ item }: { item: LeadershipItem }) {
  return (
    <article className={styles.entry}>
      <div className={styles.entryHeader}>
        <h2 className={styles.entryTitle}>{item.role}</h2>
        <p className={styles.entryDate}>
          {item.start} - {item.end}
        </p>
      </div>
      <div className={styles.entrySubhead}>
        <span>{item.organization}</span>
        <span>{item.location}</span>
      </div>
      <p className={styles.entrySummary}>{item.summary}</p>
      <ul className={styles.entryList}>
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  )
}

function SkillBlock({ group }: { group: SkillGroup }) {
  return (
    <article className={styles.skillBlock}>
      <p className={styles.skillBlockHeader}>{group.title}</p>
      <div className={styles.skillBlockBody}>
        {group.items.map((item) => (
          <span className={styles.tag} key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  )
}
