class News extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="row m-0 carousel-container">
    <button aria-label="before" class="carousel-prev button-icons px-0">
    <img src='./images/icon-prev.svg' class="" alt="icon-graph" />
    </button>
   <div class="carousel-list px-0">
    <div class=" news-container1">
      <p class="data-text">Novembro/2020</p>
      <a class="title-new-a" href="https://valor.globo.com/empresas/noticia/2020/11/25/petrobras-preve-adesao-macica-a-linha-de-capital.ghtml" target="_blank">
        <h6 class="title-new">
        Petrobras (PETR4) fecha parceria com Monkey Exchange por solução financeira.
        </h6>
      </a>
    </div>
    <div class=" news-container2">
      <p class="data-text">Janeiro/2021</p>
      <a class="title-new-a" href="https://diariodocomercio.com.br/negocios/fintechs-aperam-e-monkey-criam-hub-financeiro/" target="_blank">
        <h6 class="title-new">
          Fintechs Aperam e Monkey criam hub financeiro
        </h6>
      </a>
    </div>
    <div class=" news-container3">
      <p class="data-text">Fevereiro/2021</p>
      <a class="title-new-a" href="https://techcrunch.com/2021/02/04/brazils-monkey-nabs-6m-series-a-for-financial-marketplace/" target="_blank">
        <h6 class="title-new">
          Brazil’s Monkey nabs $6M Series A for financial marketplace
        </h6>
      </a>
    </div>
    <div class=" news-container4">
      <p class="data-text">Janeiro/2021</p>
      <a class="title-new-a" href="https://blog.codacy.com/monkey-exchange-use-case/" target="_blank">
        <h6 class="title-new">
          Interview with Felipe Adorno, CTO at Monkey Exchange
        </h6>
      </a>
    </div>
    <div class=" news-container5">
      <p class="data-text">Dezembro/2020</p>
      <a class="title-new-a" href="https://www.istoedinheiro.com.br/ha-muito-espaco-para-a-expansao-das-fintechs-na-america-latina/" target="_blank">
        <h6 class="title-new">
          Nosso CEO Gustavo Muller em entrevista para Istoé Dinheiro.
        </h6>
      </a>
    </div>
    <div class=" news-container6">
      <p class="data-text">Fevereiro/2021</p>
      <a class="title-new-a" href="https://fintechsbrasil.com.br/2021/02/12/spike-da-monkey-espera-antecipar-r-8-bilhoes-de-recebiveis-de-cartoes-em-2021/?amp=1" target="_blank">
        <h6 class="title-new">
          Spike, da Monkey, espera antecipar R$ 8 bilhões de recebíveis de cartões em 2021
        </h6>
      </a>
    </div>
    <div class=" news-container1">
      <p class="data-text">Novembro/2020</p>
      <a class="title-new-a" href="https://valor.globo.com/empresas/noticia/2020/11/25/petrobras-preve-adesao-macica-a-linha-de-capital.ghtml" target="_blank">
        <h6 class="title-new">
        Petrobras (PETR4) fecha parceria com Monkey Exchange por solução financeira.
        </h6>
      </a>
    </div>
    <div class=" news-container2">
      <p class="data-text">Janeiro/2021</p>
      <a class="title-new-a" href="https://diariodocomercio.com.br/negocios/fintechs-aperam-e-monkey-criam-hub-financeiro/" target="_blank">
        <h6 class="title-new">
          Fintechs Aperam e Monkey criam hub financeiro
        </h6>
      </a>
    </div>
  </div>
    <button aria-label="after" class="carousel-next button-icons px-0">
      <img src='./images/icon-next.svg' class="" alt="icon-graph" />
      </button>
  </div>
          `;
  }
}

window.customElements.define("news-section", News);
