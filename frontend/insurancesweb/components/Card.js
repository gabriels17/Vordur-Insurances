import Image from 'next/image';
import styles from '../styles/Card.module.css';

const Card = ({ insurance }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        src={'/' + insurance.image}
        alt={insurance.type}
        width={640}
        height={279}
      ></Image>
      <div className={styles.cardContent}>
        <button className="btn">{insurance.category}</button>
        <h3>{insurance.type}</h3>
        <p className={styles.cardText}>{insurance.description}</p>
      </div>
    </div>
  );
};

export default Card;
