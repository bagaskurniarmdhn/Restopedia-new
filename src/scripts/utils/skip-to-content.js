const skipToContent = document.querySelector('.skip-link');

skipToContent.addEventListener('click', (event) => {
  event.preventDefault();
  document
    .getElementById('main-content')
    .scrollIntoView({ behavior: 'smooth' });
  skipToContent.blur();
});
