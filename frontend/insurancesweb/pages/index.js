import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vörður tryggingar</title>
        <meta name="Vörður tryggingar" content="tryggingar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        minima quos, exercitationem maiores similique deserunt id ullam. Harum,
        natus explicabo eius totam perferendis excepturi autem, iure deleniti
        aliquid corporis quae.
      </p>
      <p className={styles.text}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam voluptas
        velit hic reprehenderit dolorum ipsam molestias tempora minima
        distinctio ad porro quas nisi, non quod voluptatem, tenetur soluta eaque
        beatae.
      </p>
      <a className={styles.btn}>Press me!</a>
    </>
  );
}
