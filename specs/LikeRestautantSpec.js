/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
import FavoriteRestoIdb from "../src/scripts/data/restopedia-idb";
import * as TestFactories from "./helper/test-factories";

describe("Liking a restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show the like button when the restaurant has not been liked before", async () => {
    await TestFactories.createLikeBottonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it("Should not show the unlike button when the restaurant has not been liked before", async () => {
    await TestFactories.createLikeBottonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it("Should be able to like the restaurant", async () => {
    await TestFactories.createLikeBottonPresenterWithRestaurant({ id: 1 });

    document.getElementById("likeButton").dispatchEvent(new Event("click"));
    const restaurant = await FavoriteRestoIdb.getResto(1);
    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestoIdb.deleteResto(1);
  });

  it("Should not add a restaurant again when its already liked", async () => {
    await TestFactories.createLikeBottonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestoIdb.putResto({ id: 1 });
    document.getElementById("likeButton").dispatchEvent(new Event("click"));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }]);
    FavoriteRestoIdb.deleteResto(1);
  });

  it("Should not add a restaurant when it has no id", async () => {
    await TestFactories.createLikeBottonPresenterWithRestaurant({});

    document.getElementById("likeButton").dispatchEvent(new Event("click"));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
