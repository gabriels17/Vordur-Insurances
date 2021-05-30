import Card from '../components/Card';

export const getServerSideProps = async (context) => {
  const filter = context.query.category;
  const res = await fetch(
    'https://vordurinsurances.azurewebsites.net/api/filterinsurances?category=' +
      encodeURI(filter)
  );
  const data = await res.json();

  return {
    props: { insurances: data }
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
