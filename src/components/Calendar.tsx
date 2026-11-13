import styles from './Calendar.module.css';

type CalendarEvent = {
  text: string;
  href?: string;
};

type CalendarDay = {
  name: string;
  date: string;
  events: CalendarEvent[];
  ribbon?: string;
};

type CalendarWeek = {
  month: string;
  dateRange: string;
  title: string;
  days: CalendarDay[];
};

const calendar: CalendarWeek[] = [
  {
    month: 'NOV',
    dateRange: '27-29, 2026',
    title: 'FAE & MAGICAL BEASTS WEEKEND',
    days: [
      {
        name: 'FRIDAY',
        date: '27',
        ribbon: 'OPENING DAY!',
        events: [
          { text: '5-7p | Grae Kent, singer-songwriter' },
          {
            text: '5-7p | Three Moon Isis Divination',
            href: 'https://threemoonisis.wixsite.com/threemoonisis',
          },
          { text: '7-9:30p | 1133 Tarot & Charm Readings', href: 'https://1133energy.com/' },
          {
            text: '7-9p | Alicia New, Kentucy Songbird',
            href: 'https://www.facebook.com/p/Alicia-New-Music-100071712134275/',
          },
          {
            text: '9:30-11p | Veilbreakers After Dark',
            href: 'https://www.eventbrite.com/e/magical-midwinter-an-interactive-experience-tickets-1990290234669',
          },
        ],
      },
      {
        name: 'SATURDAY',
        date: '28',
        events: [
          {
            text: '3-6p | Seyla Startide (mermaid)',
            href: 'https://www.facebook.com/magickatfound',
          },
          { text: '3-8p | Jacob Lyons (pirate illusionist)' },
          {
            text: '6-7p | Three Moon Isis Divination',
            href: 'https://threemoonisis.wixsite.com/threemoonisis',
          },
          { text: '3-9:30p | 1133 Tarot & Charm Readings', href: 'https://1133energy.com/' },
          {
            text: '9:30-11p | Veilbreakers After Dark',
            href: 'https://www.eventbrite.com/e/magical-midwinter-an-interactive-experience-tickets-1990290234669',
          },
        ],
      },
      {
        name: 'SUNDAY',
        date: '29',
        events: [
          {
            text: '3-7p | Daisy Dewdrop (bubble fae)',
            href: 'https://www.facebook.com/magickatfound',
          },
          { text: '3-7p | Jacob Lyons (pirate illusionist)' },
          {
            text: '3-9p | Three Moon Isis Divination',
            href: 'https://threemoonisis.wixsite.com/threemoonisis',
          },
          { text: '7-9p | Grae Kent, singer-songwriter' },
        ],
      },
    ],
  },
  {
    month: 'DEC',
    dateRange: '4-6, 2026',
    title: 'ROGUES & REBELS WEEKEND',
    days: [
      {
        name: 'FRIDAY',
        date: '4',
        events: [
          { text: '5-9p | Jacob Lyons (pirate illusionist)' },
          { text: '5-7p | Crows Nest Tarot & Divination' },
          { text: '7-9:30p | 1133 Tarot & Charm Readings', href: 'https://1133energy.com/' },
          {
            text: '9:30-11p | Veilbreakers After Dark',
            href: 'https://www.eventbrite.com/e/magical-midwinter-an-interactive-experience-tickets-1990290234669',
          },
        ],
      },
      {
        name: 'SATURDAY',
        date: '5',
        events: [
          {
            text: '3-6p | Seyla Startide (mermaid)',
            href: 'https://www.facebook.com/magickatfound',
          },
          { text: '3-6p | Jacob Lyons (pirate illusionist)' },
          {
            text: '6-7p | Three Moon Isis Divination',
            href: 'https://threemoonisis.wixsite.com/threemoonisis',
          },
          {
            text: '6-9p | Alicia New, Kentucy Songbird',
            href: 'https://www.facebook.com/p/Alicia-New-Music-100071712134275/',
          },
          { text: '3-9:30p | 1133 Tarot & Charm Readings', href: 'https://1133energy.com/' },
          {
            text: '9:30-11p | Veilbreakers After Dark',
            href: 'https://www.eventbrite.com/e/magical-midwinter-an-interactive-experience-tickets-1990290234669',
          },
        ],
      },
      {
        name: 'SUNDAY',
        date: '6',
        events: [
          { text: '3-9p | Crows Nest Tarot & Divination' },
          { text: '7-9p | Grae Kent, singer-songwriter' },
        ],
      },
    ],
  },
  {
    month: 'DEC',
    dateRange: '11-13, 2026',
    title: 'LOREHOLLOW WEEKEND',
    days: [
      {
        name: 'FRIDAY',
        date: '11',
        events: [
          { text: '5-8p | Thomas Mooneagle Divination', href: 'https://thomasmooneagle.com/' },
          { text: '8-9:30p | 1133 Tarot & Charm Readings', href: 'https://1133energy.com/' },
          {
            text: '9:30-11p | Veilbreakers After Dark',
            href: 'https://www.eventbrite.com/e/magical-midwinter-an-interactive-experience-tickets-1990290234669',
          },
        ],
      },
      {
        name: 'SATURDAY',
        date: '12',
        events: [
          { text: '3-9:30p | 1133 Tarot & Charm Readings', href: 'https://1133energy.com/' },
          {
            text: '6-7p | Three Moon Isis Divination',
            href: 'https://threemoonisis.wixsite.com/threemoonisis',
          },
          {
            text: '6-9p | Alicia New, Kentucy Songbird',
            href: 'https://www.facebook.com/p/Alicia-New-Music-100071712134275/',
          },
          {
            text: '9:30-11p | Veilbreakers After Dark',
            href: 'https://www.eventbrite.com/e/magical-midwinter-an-interactive-experience-tickets-1990290234669',
          },
        ],
      },
      {
        name: 'SUNDAY',
        date: '13',
        events: [
          {
            text: '3-9p | Three Moon Isis Divination',
            href: 'https://threemoonisis.wixsite.com/threemoonisis',
          },
        ],
      },
    ],
  },
  {
    month: 'DEC',
    dateRange: '18-20, 2026',
    title: 'VEILBREAKERS WEEKEND',
    days: [
      {
        name: 'FRIDAY',
        date: '18',
        events: [
          { text: '5-8p | Thomas Mooneagle Divination', href: 'https://thomasmooneagle.com/' },
          { text: '7-9p | Grae Kent, singer-songwriter' },
          { text: '8-9:30p | 1133 Tarot & Charm Readings', href: 'https://1133energy.com/' },
          {
            text: '9:30-11p | Veilbreakers After Dark',
            href: 'https://www.eventbrite.com/e/magical-midwinter-an-interactive-experience-tickets-1990290234669',
          },
        ],
      },
      {
        name: 'SATURDAY',
        date: '19',
        events: [
          {
            text: '3-6p | Seyla Startide (mermaid)',
            href: 'https://www.facebook.com/magickatfound',
          },
          { text: '3-6p | Jacob Lyons (pirate illusionist)' },
          { text: '3-9:30p | 1133 Tarot & Charm Readings', href: 'https://1133energy.com/' },
          {
            text: '6-9p | Alicia New, Kentucy Songbird',
            href: 'https://www.facebook.com/p/Alicia-New-Music-100071712134275/',
          },
          {
            text: '9:30-11p | Veilbreakers After Dark',
            href: 'https://www.eventbrite.com/e/magical-midwinter-an-interactive-experience-tickets-1990290234669',
          },
        ],
      },
      {
        name: 'SUNDAY',
        date: '20',
        ribbon: 'CLOSING DAY!',
        events: [
          {
            text: '3-7p | Daisy Dewdrop (bubble fae)',
            href: 'https://www.facebook.com/magickatfound',
          },
          { text: '3-7p | Jacob Lyons (pirate illusionist)' },
          { text: '3-9p | Crows Nest Tarot & Divination' },
          { text: '7-9p | Grae Kent, singer-songwriter' },
        ],
      },
    ],
  },
];

export default function Calendar() {
  return (
    <section className={styles.section} aria-label="2026 calendar">
      <div className={styles.calendar}>
        {calendar.map((week) => (
          <article className={styles.week} key={week.dateRange}>
            <div className={styles.weekIntro}>
              <div className={styles.month}>
                <span className={styles.monthName}>{week.month}</span>
                <span className={styles.dateRange}>{week.dateRange}</span>
              </div>
              <div className={styles.weekend}>
                <h2>{week.title}</h2>
              </div>
            </div>
            <div className={styles.days}>
              {week.days.map((day) => (
                <section
                  className={styles.day}
                  key={day.date}
                  aria-label={`${day.name} ${day.date}`}
                >
                  {day.ribbon && <span className={styles.ribbon}>{day.ribbon}</span>}
                  <h3 className={styles.dayHeading}>
                    <span>{day.name}</span>
                    <span>{day.date}</span>
                  </h3>
                  <ul className={styles.events}>
                    {day.events.map((event) => (
                      <li key={event.text}>
                        {event.href ? (
                          <a href={event.href} target="_blank" rel="noopener noreferrer">
                            {event.text}
                          </a>
                        ) : (
                          event.text
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
