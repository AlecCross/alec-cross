import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>Full-Stack JS Developer (Node.js)</div>
        <div className={styles.block}>
          <ul>
            <li>JavaScript/TypeScript</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className={styles.block}>
          <ul>
            <li>Postgres (Vercel Postgres), Prisma</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className={styles.block}>
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>React-Native</li>
          </ul>
        </div>
        <div className={styles.block}>
          <div>APIs</div>
          <ul>
            <li>RestFullApi</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className={styles.block}>
        <div>Hosts</div>
          <ul>
          <li>GitHub Pages Many React.js  projects (Vanilla js)</li>
          <li>Vercel  All next.js projects</li>
          <li>Netlify   Use DNS server names</li>
          <li>Heroku</li>
          <li>Setup Linux Local PC https://github.com/AlecCross/ubuntu-server-setup-guide-for-django-api</li>
          </ul>
        </div>
        <div className={styles.block}>
          <div>Optimisation</div>
          <ul>
          <li>Light House</li>
          <li>Google Search Consule</li>
          <li>Google Analitics</li>
          <li>Bing Webmaster Touls</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
