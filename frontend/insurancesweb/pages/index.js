import Head from 'next/head';
import Card from '../components/Card';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:7071/api/GetAllInsurances');
  const data = await res.json();

  return {
    props: { insurances: data }
  };
};

export default function Home({ insurances }) {
  return (
    <>
      <Head>
        <title>Vörður tryggingar</title>
        <meta name="Vörður tryggingar" content="tryggingar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {insurances.map((insurance) => (
        <Card insurance={insurance}>
          <div key={insurance.type}>
            <h3>{insurance.type}</h3>
          </div>
        </Card>
      ))}
    </>
  );
}
