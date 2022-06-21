import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";

const createLikeBottonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.getElementById("likeButtonContainer"),
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeBottonPresenterWithRestaurant };
