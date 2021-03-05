class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <footer class="container-fluid p-0 footer-container">
      <div class="row m-0 row-logo">
        <img src='./images/monkey-logo-footer.svg' class="logo-monkey" alt="logo-monkey" />
      </div>
      <div class="row m-0 container-titles">
        <div class="col-sm-12 col-md-3 col-lg-3 titles-footer">
          <h6>Productos</h6>
          <a class="text-footer" href="ancora-es.html"><p>Empresas</p></a>
          <a class="text-footer" href="fornecedor-es.html"><p>Proveedores</p></a>
          <a class="text-footer" href="investidor-es.html"><p>Inversionista</p></a>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3 titles-footer">
          <h6>Institucional</h6>
          <p>Sobre Nosotros</p>
          <a class="text-footer" target="_blank" href="http://help.monkey.exchange/pt-BR/"><p>Dudas</p></a>
          <a class="text-footer" target="_blank" href="quem-somos-es.html"><p>Quiénes Somos</p></a>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3 titles-footer">
          <h6>Redes Sociales</h6>
          <p>Siguenos en nuestras redes :D</p>
          <div class="row container-icons">
            <div class="col p-0">
            <a class="text-footer" target="_blank" href="https://www.instagram.com/monkey.exchange/">
              <img src='./images/instagram-icon.svg' class="" alt="instagram-icon" />
              </a>
              </div>
            <div class="col p-0">
            <a class="text-footer" target="_blank" href="https://www.facebook.com/monkeyexc">
              <img src='./images/facebook-icon.svg' class="" alt="facebook-icon" />
              </a>
              </div>
            <div class="col p-0">
            <a class="text-footer" target="_blank" href="https://www.linkedin.com/company/monkeyexchange/">
              <img src='./images/linkedin-icon.svg' class="" alt="linkedin-icon" />
              </a>
            </div>
            <div class="col p-0">
            <a class="text-footer" target="_blank" href="https://twitter.com/monkey_exchange">
              <img src='./images/twitter-icon.svg' class="" alt="twitter-icon" />
            </a>
              </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3 titles-footer">
          <h6>Dirección</h6>
          <a class="text-footer" target="_blank" href="https://goo.gl/maps/zv7hHxZef5vSRou36">
          <p>
            Av. Brg. Faria Lima, 1485 - Pinheiros, São Paulo - SP, 01451-001,
            Brasil
          </p>
          </a>
        </div>
      </div>
      <div class="row m-0 row-copyright">
        <p class="copyright-footer">
          © Monkey Exchange 2021. Todos los derechos reservados. Acceda a nuestras
          <a> Políticas de Privacidad.</a>
        </p>
      </div>
      <form onchange="selectLang()">
      <div class="m-0 lenguage-row">
        <div class="radio-input">
          
          <label class="form-check-label" for="portuguesRadio">
          <a href="index.html">
            Portugués |
            </a>
          </label>
        </div>
        <div class="radio-input">
          <label class="form-check-label" for="inglesRadio">
            Inglés |
          </label>
        </div>
        <div class="radio-input">
          <label class="form-check-label" for="espanholRadio">
          <a href="index-es.html">
            Español
          </a>
          </label>
        </div>
      </div>
      </form>
    </footer>
          `;
  }
}

window.customElements.define("footer-section", Footer);
