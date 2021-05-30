import Head from 'next/head';
import Card from '../components/Card';
import Link from 'next/link';
import Router from 'next/router';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:7071/api/GetAllInsurances');
  const data = await res.json();

  return {
    props: {
      insurances: data
    }
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
      <h3 className="heading">Sía eftir flokkum</h3>
      <div className="buttonContainer">
        <button
          key="all-categories"
          className="btn categoryBtn"
          onClick={() => Router.reload()}
        >
          Allar tegundir
        </button>
        {categoryButtons.map((category) => (
          <Link
            key={category}
            href={'/filter?category=' + category.toLowerCase()}
          >
            <button className="btn categoryBtn" /*onClick={handleClick}*/>
              {category}
            </button>
          </Link>
        ))}
      </div>
      {insurances.map((insurance) => (
        <Card key={insurance.type} insurance={insurance}>
          <div>
            <h3>{insurance.type}</h3>
          </div>
        </Card>
      ))}
    </>
  );
}
