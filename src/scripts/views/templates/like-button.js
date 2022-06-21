const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o fa-lg" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
    </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
