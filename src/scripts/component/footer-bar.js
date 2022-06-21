class Footbar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer class="footer">
          <p class="copyright">
          Copyright &#169; 2022 - Restopedia
          </p>
    </footer>`;
  }
}

customElements.define('footer-bar', Footbar);
