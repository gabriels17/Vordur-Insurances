import Head from 'next/head';
import Card from '../components/Card';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:7071/api/GetAllInsurances');
  const data = await res.json();

  return {
    props: { insurances: data }
  };
};

const removeDuplicateCategories = (insurances) => {
  let insuranceCategories = insurances.map((insurance) => {
    return insurance.category;
  });

  insuranceCategories = insuranceCategories.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  return insuranceCategories;
};

export default function Home({ insurances }) {
  const categoryButtons = removeDuplicateCategories(insurances);
  return (
    <>
      <Head>
        <title>Vörður tryggingar</title>
        <meta name="Vörður tryggingar" content="tryggingar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="buttonContainer">
        {categoryButtons.map((category) => (
          <button key={category} className="btn categoryBtn">
            {category}
          </button>
        ))}
      </div>
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
