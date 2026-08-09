'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import { Logo, withBasePath } from '../images';
import styles from './IntroOverlay.module.css';

interface IntroOverlayProps {
  onEnter: () => void;
}

export default function IntroOverlay({ onEnter }: IntroOverlayProps) {
  const [opened, setOpened] = useState(false);

  const handleClick = useCallback(() => {
    if (opened) return;
    setOpened(true);
    setTimeout(onEnter, 4000);
  }, [opened, onEnter]);

  const doorImage = opened
    ? withBasePath('/assets/Images/doors/OpenDoor.png')
    : withBasePath('/assets/Images/doors/ClosedDoor.png');

  return (
    <div
      className={`${styles.scene} ${opened ? styles.opened : ''}`}
      onClick={handleClick}
      role="button"
      aria-label="Click to enter"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className={styles.portalStack} aria-hidden="true">
        <div className={styles.doorLogo}>
          <Image
            src={Logo}
            alt="Magical Midwinter logo"
            width={240}
            height={90}
            className={styles.doorLogoImage}
            priority
          />
        </div>

        <div className={styles.hint}>Click to Open the Portal</div>

        <div className={styles.doorWrap}>
          <div className={styles.doorGlow} aria-hidden="true" />
          <Image
            src={doorImage}
            alt={opened ? 'Open magical door' : 'Closed magical door'}
            width={420}
            height={520}
            className={styles.doorImage}
            priority
          />
        </div>
      </div>
    </div>
  );
}
