import React from "react";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar";

const Portfolio: React.FC = () => {
  return (
    <main className={styles.main}>
      <NavBar/>
      {/* <div className={styles.container}></div> */}
      <div className={styles.container2}>
        <div className={styles.monitor}>
          <div className={styles.glare}></div>
          <div>
            <h1 className={styles.title}>Welcome to My Resume</h1>
          </div>
          {/* <div className={styles.title}>Full-Stack JS Developer (Node.js)</div> */}
          <div className={styles.block}>
            <ul>
              <li>JavaScript/TypeScript</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className={styles.block}>
            <ul>
              <li>Next.js</li>
              <li>React.js</li>
              <li>React Native</li>
            </ul>
          </div>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Styles</div>
            <ul>
              <li>Figma</li>
              <li>Module CSS</li>
              <li>Materialize</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className={styles.block}>
            <ul>
              <li>Postgres (Vercel Postgres), Prisma</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className={styles.block}>
            <div className={styles.blockTitle}>APIs</div>
            <ul>
              <li>RestFullApi</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div className={styles.block}>
            <ul>
              <li>GitHub</li>
              <li>Trello</li>
            </ul>
          </div>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Hosts</div>
            <ul>
              <li>GitHub Pages Many React.js projects (Vanilla js)</li>
              <li>Vercel All next.js projects</li>
              <li>Netlify Use DNS server names</li>
              <li>Heroku</li>
            </ul>
          </div>
          <div className={styles.block}>
            <div className={styles.blockTitle}>Optimisation</div>
            <ul>
              <li>Light House</li>
              <li>Google Search Console</li>
              <li>Google Analytics</li>
              <li>Bing Webmaster Tools</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
