import Image from "next/image";
import styles from "./about.module.css";
export const metadata = {
  title: "About Content",
  description: "About information",
};
const Aboutpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>About Me</h2>
        <h1 className={styles.subtitle}>Ideas that are bigger,bolder,braver and better</h1>
        <p className={styles.text}>
          I am a full stack web developer with a passion for creating and
          developing applications that are both responsive and functional. I
          have a background computer programming. I am a graduate of the SGRR
          University of Technology where I did my Mca Graduation and I have
          always been intersted in technology and developing programming. I have
          a passion for learning and am always looking for new challenges.I am
          currently looking for a Some Intern Jobs as a fresher Student.
        </p>
      </div>
      <div className={styles.boxes}>
        <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
        </div>
        <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
        </div>
        <div className={styles.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png"
        alt="Pictures of the Author" 
        fill className={styles.img}/>
      </div>
    </div>
  );
};
export default Aboutpage;
