class herobar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
    <div class="hero_inner">
      <h1 class="hero__title">
          Bingung Mau Makan Dimana?
      </h1>
      <p class="hero__tagline">
        Cari Di Restopedia
      </p>
    </div>
  </div>`;
  }
}

customElements.define("hero-bar", herobar);
