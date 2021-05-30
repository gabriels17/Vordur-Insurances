import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Card from '../components/Card';
import {
  filterInsurances,
  removeDuplicateCategories
} from '../services/InsuranceService';

export const getServerSideProps = async (context) => {
  const filter = context.query.category;
  return {
    props: {
      insurances: await filterInsurances(filter)
    }
  };
};

const Filter = ({ insurances }) => {
  const categoryButtons = removeDuplicateCategories(insurances);
  const router = useRouter();

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
          onClick={() => router.push('/')}
        >
          Allar tegundir
        </button>
        {categoryButtons.map((category) => (
          <Link
            key={category}
            href={'/filter?category=' + category.toLowerCase()}
          >
            <button className="btn categoryBtn">{category}</button>
          </Link>
        ))}
      </div>
      <div>
        {!insurances
          ? 'No insurances match your criteria'
          : insurances.map((insurance) => (
              <Card key={insurance.type} insurance={insurance}>
                <div>
                  <h3>{insurance.type}</h3>
                </div>
              </Card>
            ))}
      </div>
    </>
  );
};

export default Filter;
