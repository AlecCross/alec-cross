import React from "react";
import styles from "./page.module.css";
import Example from "../../components/Example";
import NavBar from "@/components/NavBar";

const Portfolio: React.FC = () => {
  return (
    <div className={styles.main}>
      Portfolio
      <div>
        <NavBar />
        <div>Next.js</div>
        <ul>
          <li>
            <Example example="https://github.com/AlecCross/next-js-feya-new" />
          </li>
          <li>https://github.com/AlecCross/locksmith</li>
          <li>https://github.com/AlecCross/next-ffmpeg</li>
          <li>https://github.com/AlecCross/next-unity</li>
        </ul>
        <div>React:</div>
        <ul>
          <li> https://github.com/feya-bilyzna/feya-bilyzna.github.io</li>
          <li> https://github.com/AlecCross/gumi-sounds-red-bird</li>
          <li> https://github.com/AlecCross/convert-images-to-webp-react</li>
          <li> https://github.com/AlecCross/the-social-network-react</li>
        </ul>
        <div>Node.js:</div>
        <ul>
          <li> https://github.com/AlecCross/node.js-jimp-watermark</li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
