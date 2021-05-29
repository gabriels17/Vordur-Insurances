import Image from 'next/image';
import styles from '../styles/Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        src="/barnatrygging.jpg"
        width={640}
        height={279}
      ></Image>
      <div className={styles.cardContent}>
        <h5>Heiti tryggingar</h5>
        <p>Lýsing á tryggingu</p>
      </div>
    </div>
  );
};

export default Card;
