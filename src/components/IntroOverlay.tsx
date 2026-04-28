'use client';

import { useState, useCallback } from 'react';
import styles from './IntroOverlay.module.css';

interface IntroOverlayProps {
  onEnter: () => void;
}

export default function IntroOverlay({ onEnter }: IntroOverlayProps) {
  const [opened, setOpened] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    if (opened) return;
    setOpened(true);
    setTimeout(onEnter, 1200);
  }, [opened, onEnter]);

  return (
    <div
      className={`${styles.scene} ${opened ? styles.opened : ''}`}
      onClick={handleClick}
      role="button"
      aria-label="Click to enter"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      {/* Behind-door reveal */}
      <div className={styles.behindDoor} aria-hidden="true">
        <h1>fuck you!</h1>
        <p>You&apos;ve stepped inside.</p>
      </div>

      {/* Door */}
      <div className={styles.doorWrap}>
        <div className={styles.door}>
          <div className={styles.doorFront}>
            <div className={`${styles.doorPanel} ${styles.top}`} />
            <div className={`${styles.doorPanel} ${styles.bot}`} />
            <div className={styles.doorKnob} />
          </div>
        </div>
        <div className={styles.doorFrame} />
      </div>

      {/* Text below door */}
      <div className={styles.sceneText}>
        <h2>Welcome to the Magical Midwinter Festival</h2>
        <p>Open the Portal, What will you discover?</p>
      </div>

      <span className={styles.hint} aria-hidden="true">
        click to enter
      </span>
    </div>
  );
}
