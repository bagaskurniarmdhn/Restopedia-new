import "regenerator-runtime";
import "../styles/main.css";
import "../styles/detail.css";
import "../styles/responsive.css";
import "./component/app-bar";
import "./component/footer-bar";
import "./component/hero-bar";
import "./utils/skip-to-content";
import App from "./views/app";
import swRegister from "./utils/sw-register";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#drawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
