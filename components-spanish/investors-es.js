class Investor extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid investor-company p-0" id="investidor">
      <div class="row row-company m-0">
        <div class="col-sm-12 col-md-12 col-lg-6 text-container p-0">
          <button class="btn-investor mb-3">Inversionista</button>
          <h2 class="title-h2">
          Con Monkey usted tiene acceso a un grande número de empresas, dividiendo el riesgo con otros inversionistas.
          </h2>
          <p class="main-text">
          Opere con grandes empresas, en una plataforma 
          ágil, fácil y eficaz. Con inducción totalmente digital, en un ambiente con
          total control e transparencia.
          </p>
          <a class="link-style" href="#contact">
            Entienda las ventajas de tener un programa.
        </a>
        <div class="row icons-container-left m-0">
        <div class="col text-icons">
        <img src="./images/chart.svg" class="pb-3" alt="chart-icon" />
        <div>
        <h5 class="title-icons">Onboarding Online</h5>
        <p class="supplier-text-icons pr-4">
        Todos las inscripciones de Inversionista e Âncoras, son hechas totalmente online. 
        </p>
        </div>
      </div>    
        <div class="col text-icons">
          <img src='./images/calendar.svg' class="pb-3" alt="calendar-icon" />
          <div>
          <h5 class="title-icons">Processo Ágil e Fácil</h5>
          <p class="supplier-text-icons">
          Una Plataforma intuitiva, y todos los procesos digitales y online.
          </p>
          </div>
        </div>
        </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 p-0">
          <img
          src='./images/investor-banner-es.png'
          class="investor-banner"
          alt="investor-banner"
        />
        </div>
      </div>
    </div>
          `;
    }
  }
  
  window.customElements.define("investor-section", Investor);
  