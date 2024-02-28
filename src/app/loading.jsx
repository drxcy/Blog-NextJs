import Image from 'next/image'; 
import styles from './Loading.module.css'; 

const Loading = ({ width = 24, height = 24 }) => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}>
        <Image src="/loading-spinner.svg" alt="Loading..." width={width} height={height} />
      </div>
      <span>Loading...</span>
    </div>
  );
}

export default Loading;
