import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = response.json();
    if (responseJson.pending === true) {
      console.log('Hello');
    }
    return responseJson;
  }

  static async addReview(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
