import Head from 'next/head';
import Card from '../components/Card';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  getInsurances,
  removeDuplicateCategories
} from '../services/InsuranceService';

export const getStaticProps = async () => {
  return {
    props: {
      insurances: await getInsurances()
    }
  };
};

export default function Home({ insurances }) {
  const categoryButtons = removeDuplicateCategories(insurances);
  const router = useRouter();

  return (
    <>
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
        {insurances.map((insurance) => (
          <Card key={insurance.type} insurance={insurance}>
            <div>
              <h3>{insurance.type}</h3>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
