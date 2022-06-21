/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import FavoriteRestoIdb from "../src/scripts/data/restopedia-idb";
import * as TestFactories from "./helper/test-factories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Unliking a restaurant", () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it("Should display unlike widget when the restaurant has been liked", async () => {
    await TestFactories.createLikeBottonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'));
  });

  it("Should not display like widget when the restaurant has been liked", async () => {
    await TestFactories.createLikeBottonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it("should be able to remove liked movie from the list", async () => {
    await TestFactories.createLikeBottonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event("click"));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it("Should not throw error if the unliked restaurant is not in the list", async () => {
    await TestFactories.createLikeBottonPresenterWithRestaurant({ id: 1 });
    await FavoriteRestoIdb.deleteResto(1);

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event("click"));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
