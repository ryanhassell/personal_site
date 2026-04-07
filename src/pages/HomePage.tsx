import { Link } from 'react-router-dom'
import portraitImage from '../assets/unnamed.jpg'
import {
  DownloadIcon,
  IconLabel,
  LinkedInIcon,
  MailIcon,
} from '../components/IconLabel'
import type {
  ExperienceItem,
  ProjectItem,
  SiteContent,
} from '../content/siteContent'
import styles from './HomePage.module.css'

type HomePageProps = {
  content: SiteContent
}

export function HomePage({ content }: HomePageProps) {
  const leadership = content.leadership[0]
  const education = content.education[0]

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <div className={styles.heroIntro}>
            <div className={styles.heroText}>
              <p className={styles.eyebrow}>
                {content.profile.location} / {content.profile.shortRole}
              </p>
              <div className={styles.titleWrap}>
                <h1 className={styles.title}>I'm {content.profile.name}</h1>
              </div>
              <p className={styles.lead}>{content.profile.statement}</p>
              <p className={styles.summary}>{content.profile.summary}</p>
              <div className={styles.actions}>
                <Link className={styles.actionPrimary} to="/resume">
                  Detailed Resume
                </Link>
                <a
                  className={styles.actionSecondary}
                  download="Ryan_Hassell_Resume.pdf"
                  href={content.resumePdf}
                >
                  <IconLabel icon={<DownloadIcon />}>Download Resume</IconLabel>
                </a>
                <a
                  className={styles.actionSecondary}
                  href={`mailto:${content.contact.email}`}
                >
                  <IconLabel icon={<MailIcon />}>Email</IconLabel>
                </a>
              </div>
            </div>
            <div aria-hidden="true" className={styles.titlePortraitFrame}>
              <img className={styles.titlePortrait} src={portraitImage} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.heroSide}>
          <article className={styles.introCard}>
            <p className={styles.panelLabel}>What I Do</p>
            <h2 className={styles.introTitle}>
              Build AI-driven products that make complex workflows easier to use.
            </h2>
            <p className={styles.introText}>{content.profile.heroNote}</p>
          </article>
          <div className={styles.metricGrid}>
            {content.profile.metrics.map((metric) => (
              <article className={styles.metricCard} key={metric.label}>
                <div className={styles.metricTop}>
                  <p className={styles.metricValue}>{metric.value}</p>
                  <p className={styles.metricLabel}>{metric.label}</p>
                </div>
                <p className={styles.metricDetail}>{metric.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.band}>
        <p className={styles.bandText}>{content.profile.band}</p>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLead}>
          <p className={styles.sectionKicker}>Experience</p>
          <h2 className={styles.sectionTitle}>
            Production systems with real users, messy data, and operational constraints.
          </h2>
          <p className={styles.sectionText}>
            Most of the work centers on AI interfaces, research tooling, analytics
            systems, and backend products that have to stay useful beyond the demo stage.
          </p>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.experienceGrid}>
            {content.experience.map((item) => (
              <ExperienceCard item={item} key={`${item.company}-${item.role}`} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLead}>
          <p className={styles.sectionKicker}>Selected Work</p>
          <h2 className={styles.sectionTitle}>
            Featured builds across internal AI tooling and large-scale data products.
          </h2>
          <p className={styles.sectionText}>
            The through-line is usually the same: connect the model layer to a workflow
            people already depend on, then make the results legible.
          </p>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.projectGrid}>
            {content.projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLead}>
          <p className={styles.sectionKicker}>Range</p>
          <h2 className={styles.sectionTitle}>
            AI orchestration on one side, product engineering on the other.
          </h2>
          <p className={styles.sectionText}>
            The stack shifts by project, but the center of gravity stays around applied
            AI systems, analytics infrastructure, and pragmatic full-stack delivery.
          </p>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.focusGrid}>
            <article className={styles.approachCard}>
              <p className={styles.panelLabel}>Working Style</p>
              <ul className={styles.approachList}>
                {content.profile.principles.map((principle) => (
                  <li className={styles.approachItem} key={principle}>
                    {principle}
                  </li>
                ))}
              </ul>
            </article>
            <div className={styles.skillGroups}>
              {content.skills.map((group) => (
                <article className={styles.skillGroup} key={group.title}>
                  <p className={styles.skillGroupHeader}>{group.title}</p>
                  <div className={styles.skillItems}>
                    {group.items.map((item) => (
                      <span className={styles.tag} key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionLead}>
          <p className={styles.sectionKicker}>Context</p>
          <h2 className={styles.sectionTitle}>Leadership, education, and direct contact.</h2>
          <p className={styles.sectionText}>
            A condensed read on the resume trajectory, plus the cleanest ways to reach
            out.
          </p>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.supportGrid}>
            <article className={styles.supportCard}>
              <p className={styles.panelLabel}>Leadership</p>
              <h3 className={styles.cardTitle}>{leadership.role}</h3>
              <p className={styles.cardOrg}>{leadership.organization}</p>
              <p className={styles.smallMeta}>
                {leadership.start} - {leadership.end}
              </p>
              <p className={styles.cardSummary}>{leadership.summary}</p>
            </article>

            <article className={styles.supportCard}>
              <p className={styles.panelLabel}>Education</p>
              <h3 className={styles.cardTitle}>{education.school}</h3>
              <p className={styles.cardOrg}>{education.degree}</p>
              <p className={styles.smallMeta}>
                {education.location} / {education.end}
              </p>
            </article>

            <article className={styles.supportCard}>
              <p className={styles.panelLabel}>Contact</p>
              <h3 className={styles.cardTitle}>{content.contact.email}</h3>
              <p className={styles.cardSummary}>{content.contact.note}</p>
              <div className={styles.supportLinks}>
                <a className={styles.inlineLink} href={`mailto:${content.contact.email}`}>
                  <IconLabel icon={<MailIcon />}>Email</IconLabel>
                </a>
                <a
                  className={styles.inlineLink}
                  href={content.contact.linkedinUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <IconLabel icon={<LinkedInIcon />}>LinkedIn</IconLabel>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardMeta}>
        <span>{item.company}</span>
        <span>
          {item.start} - {item.end}
        </span>
      </div>
      <div>
        <h3 className={styles.cardTitle}>{item.role}</h3>
        <p className={styles.cardOrg}>{item.location}</p>
      </div>
      <p className={styles.cardSummary}>{item.summary}</p>
      <ul className={styles.cardList}>
        {item.bullets.slice(0, 3).map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className={styles.tagList}>
        {item.technologies.slice(0, 8).map((technology) => (
          <span className={styles.tag} key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </article>
  )
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardMeta}>
        <span>{project.organization}</span>
      </div>
      <div>
        <h3 className={styles.cardTitle}>{project.name}</h3>
        <p className={styles.cardOrg}>{project.stack.join(' / ')}</p>
      </div>
      <p className={styles.cardSummary}>{project.summary}</p>
      <ul className={styles.cardList}>
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  )
}
