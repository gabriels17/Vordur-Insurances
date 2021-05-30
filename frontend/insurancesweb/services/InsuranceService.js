export const getInsurances = async () => {
  const res = await fetch(
    'https://vordurinsurances.azurewebsites.net/api/getallinsurances'
  );
  const data = await res.json();
  return data;
};

export const filterInsurances = async (filter) => {
  const res = await fetch(
    'https://vordurinsurances.azurewebsites.net/api/filterinsurances?category=' +
      encodeURI(filter)
  );
  const data = await res.json();
  return data;
};
