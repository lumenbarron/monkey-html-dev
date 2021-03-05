class Numeros extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid header-numeros" id="numeros">
      <div class="row p-0">
        <h2 class="big-header" id="num-head">
          NÚMEROS
        </h2>
        <button class="btn-num">De 2020</button>
      </div>
      <div class="row p-0 mt-5 mb-4">
        <p class="main-text text-num">
          Finalizamos el año del 2020 con grandes conquistas. Alcanzamos grandes marcas:
        </p>
      </div>
      <div class="row container-logo-three ">
        <div class="col-sm-3 col-md-3 col-lg-3 container-col">
          <img src='./images/3-users.svg' class="pb-3" alt="3-users-icon" />
          <h2 class="title-col center-text">
            + 1000
          </h2>
          <p class="contact-text center-text">
            Usuários
          </p>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3 container-col">
          <img src='./images/3-users.svg' class="pb-3" alt="3-users-icon" />
          <h2 class="title-col center-text">
            R$ 9 Billones
          </h2>
          <p class="contact-text">
            Movimentados
          </p>
        </div>
        <div class="col-sm-3 col-md-3 col-lg-3 container-col">
          <img src='./images/3-users.svg' class="pb-3" alt="3-users-icon" />
          <h2 class="title-col center-text">
            + 25
          </h2>
          <p class="contact-text center-text">
            Instituciones Financieras
          </p>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 container-col">
          <img src='./images/3-users.svg' class="pb-3" alt="3-users-icon" />
          <h2 class="title-col center-text">
            40
          </h2>
          <p class="contact-text center-text">
            Clientes
          </p>
        </div>
      </div>
    </div>
          `;
    }
  }
  
  window.customElements.define("numeros-section", Numeros);