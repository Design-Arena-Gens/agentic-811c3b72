'use client';

import type { VideoIdea } from '@/lib/ideaGenerator';

import styles from './VideoIdeaCard.module.css';

interface VideoIdeaCardProps {
  idea: VideoIdea;
  index: number;
}

export function VideoIdeaCard({ idea, index }: VideoIdeaCardProps) {
  return (
    <article className={styles.card} aria-labelledby={`${idea.id}-title`}>
      <header className={styles.header}>
        <div className={styles.tagRow}>
          <span className={styles.tag}>Video {index + 1}</span>
          <span className={styles.tag}>Mood: {idea.concept.mood}</span>
          <span className={styles.tag}>Emotion: {idea.concept.targetEmotion}</span>
        </div>
        <h2 id={`${idea.id}-title`}>{idea.concept.headline}</h2>
        <p className={styles.paragraph}>{idea.concept.logline}</p>
      </header>

      <section className={styles.section} aria-labelledby={`${idea.id}-concept`}>
        <h3 className={styles.sectionTitle} id={`${idea.id}-concept`}>
          A) Video Concept
        </h3>
        <p className={styles.paragraph}>{idea.concept.logline}</p>
      </section>

      <section className={styles.section} aria-labelledby={`${idea.id}-structure`}>
        <h3 className={styles.sectionTitle} id={`${idea.id}-structure`}>
          B) Story Flow
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Beginning:</strong> {idea.structure.beginning}
          </li>
          <li className={styles.listItem}>
            <strong>Middle:</strong> {idea.structure.middle}
          </li>
          <li className={styles.listItem}>
            <strong>Ending:</strong> {idea.structure.ending}
          </li>
        </ul>
      </section>

      <section className={styles.section} aria-labelledby={`${idea.id}-script`}>
        <h3 className={styles.sectionTitle} id={`${idea.id}-script`}>
          C) Script / Narration
        </h3>
        <ul className={styles.list}>
          {idea.script.map((line) => (
            <li className={styles.listItem} key={line}>
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby={`${idea.id}-visuals`}>
        <h3 className={styles.sectionTitle} id={`${idea.id}-visuals`}>
          D) Visual Prompts
        </h3>
        <ul className={styles.list}>
          {idea.visual.keyFrames.map((frame) => (
            <li className={styles.listItem} key={frame}>
              {frame}
            </li>
          ))}
        </ul>
        <p className={styles.paragraph}>
          <strong>Atmosphere:</strong> {idea.visual.atmosphere}
        </p>
      </section>

      <section className={styles.section} aria-labelledby={`${idea.id}-format`}>
        <h3 className={styles.sectionTitle} id={`${idea.id}-format`}>
          E) Format Guidance
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Suitable for:</strong> {idea.format.suitability}
          </li>
          <li className={styles.listItem}>
            <strong>Length:</strong> {idea.format.recommendedLength}
          </li>
          <li className={styles.listItem}>
            <strong>Camera feel:</strong> {idea.format.cameraStyle}
          </li>
          <li className={styles.listItem}>
            <strong>Pacing:</strong> {idea.format.pacing}
          </li>
        </ul>
      </section>

      <section className={styles.section} aria-labelledby={`${idea.id}-metadata`}>
        <h3 className={styles.sectionTitle} id={`${idea.id}-metadata`}>
          F) Title &amp; Description
        </h3>
        <p className={styles.paragraph}>
          <strong>Title:</strong> {idea.title}
        </p>
        <p className={styles.paragraph}>
          <strong>Description:</strong> {idea.description}
        </p>
      </section>

      <section className={styles.qualityCheck} aria-labelledby={`${idea.id}-quality`}>
        <h3 className={styles.qualityTitle} id={`${idea.id}-quality`}>
          Quality Control Check
        </h3>
        <ul className={styles.list}>
          {idea.qualityCheck.map((item) => (
            <li className={styles.listItem} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
