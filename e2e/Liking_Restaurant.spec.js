/* eslint-disable no-undef */
Feature("Liking Restaurant");

Scenario("liking one restaurant and unlike", ({ I }) => {
  I.amOnPage("#/");

  I.executeScript("window-scrollTo(0, 1000);");
  I.wait(3);
  I.seeElement(".card_item_title a");
  I.click(locate(".card_item_title a").first());
  I.wait(3);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.wait(5);
  I.seeElement(".card");
  I.click(locate(".card_item_title a").first());
  I.click("#likeButton");

  I.amOnPage("/#/like");
  I.dontSeeElement(".card_item_title a");
});
