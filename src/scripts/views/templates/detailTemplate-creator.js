import CONFIG from '../../globals/config';

const createDetailTemplate = (restaurant) => `

  <div class="container detail-restaurant">
      <div class="column-container">
        <div class="restaurant__image">
          <img src="${CONFIG.BASE_IMAGE_URL}large/${
  restaurant.pictureId
}" alt="${restaurant.name}" />        
        </div>
      </div>
      <div class="column-container">
        <h1 class="restaurant__name">${restaurant.name}</h1>
        <div class="restaurant__info">
          <div class="restaurant__rating">
          <i class="fa fa-star fa-md"> </i><span class="icon" aria-label="rating"> ${
  restaurant.rating
} </span></p>
          </div>
          <div class="restaurant__address">
            <p class="restaurant__address-text">
            <i class="fa fa-map-marker fa-md" aria-hidden="true"></i><span class="icon" aria-label="address at ${
  restaurant.address
}, ${restaurant.city}">${restaurant.address}${restaurant.city}
            </p>
          </div>
          <div class="restaurant__description">
            <p class="restaurant__description-text">
              <b>About</b> : <br> ${restaurant.description}
            </p>
          </div>
          <div class="restaurant__listMenu">
              <ul>    
              <p class="restaurant__listMenu-text"><b>Makanan :</b></p>          
              ${restaurant.menus.foods
    .map(
      (food) => `
                <li class="restaurant__listMenu-item">
                  ${food.name}
                </li>
              `,
    )
    .join('')}
              </ul>
              <ul>
              <p class="restaurant__listMenu-text"><b>Minuman :</b></p>          
              ${restaurant.menus.drinks
    .map(
      (drink) => `
                <li class="restaurant__listMenu-item">
                  ${drink.name}
                </li>
              `,
    )
    .join('')}
              </ul>
          </div>
        </div>
      </div>
      <div class="restaurant__review">
        <h2 class="restaurant__review-title">Reviews</h2>
        <div class="restaurant__review-list">
          ${restaurant.customerReviews
    .map(
      (review) => `
          <div class="restaurant__review-item">
            <p class="restaurant__review-item-user">${review.name}</p>
            <p class="restaurant__review-item-text">${review.review.substring(
    0,
    20,
  )}</p>
            <p class="restaurant__review-item-date">${review.date}</p>
          </div>`,
    )
    .join('')}
        </div>
      </div>
`;
const loader = () => `
    <div class="loader"></div>
`;

export { createDetailTemplate, loader };
