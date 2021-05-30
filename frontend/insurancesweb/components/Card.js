import Image from 'next/image';
import styles from '../styles/Card.module.css';

const Card = ({ insurance }) => {
  return (
    <div className={styles.card}>
      <div style={{ position: 'relative' }}>
        <Image
          className={styles.img}
          src={'/' + insurance.image}
          alt={insurance.type}
          layout="responsive"
          width={800}
          height={500}
        ></Image>
      </div>
      <div className={styles.cardContent}>
        <button className="btn">{insurance.category}</button>
        <h3>{insurance.type}</h3>
        <p className={styles.cardText}>{insurance.description}</p>
      </div>
    </div>
  );
};

export default Card;
