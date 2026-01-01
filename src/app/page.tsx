'use client';

import { useCallback, useMemo, useState } from 'react';

import { VideoIdeaCard } from '@/components/VideoIdeaCard';
import { generateIdeas, type VideoIdea } from '@/lib/ideaGenerator';

const IDEA_COUNT = 3;

function useIdeaDeck(): [VideoIdea[], () => void] {
  const seededIdeas = useMemo(() => generateIdeas(IDEA_COUNT), []);
  const [ideas, setIdeas] = useState<VideoIdea[]>(seededIdeas);

  const regenerate = useCallback(() => {
    setIdeas(generateIdeas(IDEA_COUNT));
  }, []);

  return [ideas, regenerate];
}

export default function HomePage() {
  const [ideas, regenerate] = useIdeaDeck();

  return (
    <main className="page">
      <section className="hero">
        <header>
          <h1>Cat Video Concept Lab</h1>
          <p>
            Curated story blueprints engineered for high-retention, heartwarming feline content. Each
            lineup is handcrafted for originality, emotional depth, and viewer safety.
          </p>
        </header>
        <button type="button" onClick={regenerate} className="refreshButton">
          Generate Fresh Lineup
        </button>
      </section>

      <section className="ideaGrid" aria-live="polite">
        {ideas.map((idea, index) => (
          <VideoIdeaCard idea={idea} index={index} key={idea.id} />
        ))}
      </section>
    </main>
  );
}
