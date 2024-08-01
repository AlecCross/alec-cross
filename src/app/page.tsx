import styles from "./page.module.css";
import Header from "../components/Header";
import NavBar from "@/components/NavBar";
import Summary from "@/components/Summary";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import Toolkits from "@/components/Toolkits";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <NavBar />
      <Summary />
      <Certificates />
      <Skills />
      <Toolkits />
      <Languages />
      <Education/>
    </main>
  );
}
