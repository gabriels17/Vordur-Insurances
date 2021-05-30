const getInsurances = async () => {
  const res = await fetch(
    'https://vordurinsurances.azurewebsites.net/api/getallinsurances'
  );
  const data = await res.json();
  return data;
};

const filterInsurances = async (filter) => {
  const res = await fetch(
    'https://vordurinsurances.azurewebsites.net/api/filterinsurances?category=' +
      encodeURI(filter)
  );
  const data = await res.json();
  return data;
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

export { getInsurances, filterInsurances, removeDuplicateCategories };
