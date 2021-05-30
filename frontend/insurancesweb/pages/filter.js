import Card from '../components/Card';
import { filterInsurances } from '../services/InsuranceService';

export const getServerSideProps = async (context) => {
  const filter = context.query.category;

  return {
    props: {
      insurances: await filterInsurances(filter)
    }
  };
};

const Filter = ({ insurances }) => {
  return (
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
  );
};

export default Filter;
