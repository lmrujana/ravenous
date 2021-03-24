const apiKey =
  "dTBMXcoAdCdoUqU2wNkqUn7cdVp_AvPP-vq3HgwSqAZ84TFM-wudGuYEAs4hZkydxa1dzXhO9obHbxyS6gSfgkxcRZx7Et_0apPEoq9vy10yux9onaPj_sMT3bZbYHYx";

const Yelp = {
  search: function (term, location, sortBy) {
    console.log(sortBy);
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

export default Yelp;
