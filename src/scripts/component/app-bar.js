class AppBar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
    <a href="#mainContent" class="skip-link">Menuju ke menu</a>
    <div class="app-bar__menu">
      <button id="hamburgerButton" aria-label="hamburger-button">&#9776;</button>
    </div>
    <div class="app-bar__brand">
      <a href="/"><img class="logo" src="./images/logo/restopedia.png" alt="Restopedia Logo" ></a>
    </div>

    <nav id="drawer" class="nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#/favorite">Favorite</a></li>
        <li><a href="https://instagram.com/bagaskurniarmdhn">About</a></li>
      </ul>
    </nav>
  </header>`;
  }
}

customElements.define('app-bar', AppBar);
