class Company extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid main-company p-0" id="company">
      <div class="row row-company m-0">
        <div
          class="col-sm-12 col-md-12 col-lg-6 text-container  p-0"
        >
          <button class="btn-company mb-3">Âncora</button>
          <h2 class="title-h2">
            Aqui na Monkey, denominamos o cliente que é dono de programa como âncora.
          </h2>
          <p class="main-text">
            Aumente seu prazo de pagamento e ajude seus fornecedores a
            terem uma vida financeira mais saúdavel.
          </p>
          <a class="link-style" href="ancora.html">
            Entenda as vantagens de ter um programa.
          </a>
          <div class="row icons-container-left m-0">
            <div class="col text-icons">
              <img src="./images/chart.svg" class="pb-3" alt="chart-icon" />
              <div>
              <h5 class="title-icons">Fluxo de Caixa</h5>
              <p class="supplier-text-icons pr-4">
                Com o nosso sistema, você poderá aumentar seu prazo de
                pagamento.
              </p>
              </div>
            </div>
            <div class="col text-icons">
              <img src="./images/work.svg" class="pb-3" alt="work-icon" />
              <div>
              <h5 class="title-icons">Flexibilidade no Pagamento</h5>
              <p class="supplier-text-icons">
                Com a nossa solução, tenha mais flexibilidade para pagar os seus fornecedores.
              </p>
              </div>
            </div>

          </div>
        </div>
      <div class="col-sm-12 col-md-12 col-lg-6 flex-general p-0">
        <img
          src="./images/company-banner-2.png"
          class="company-banner monkey-banner"
          alt="company-banner"
        />
      </div>
    </div>
    <div class="row m-0">
      <div class="col-lg-2 p-0">
        <div class="row first-block"></div>
        <div class="row second-block"></div>
      </div>
      <div class="col-lg-10 products-container">
        <div class="row pt-5 pb-4 title-product">
          <h4>Algumas das nossas soluções</h4>
        </div>
        <div class="row m-0">
          <div class="col-lg-3 col-md-6 product-card-container pr-0 ">
            <div class=" product-card">
              <div class="product-text">
              <div class="product-card-title">
                <img src='./images/icon-heart.svg' class="pb-3" alt="icon-heart" />
                <h5>Fomento de fornecedores.</h5>
              </div>
                <p class="supplier-text-icons m-0">
                  Impacte positivamente sua cadeia, do menor ao maior fornecedor.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 product-card-container pr-0 ">
            <div class=" product-card">
              <div class="product-text">
              <div class="product-card-title">
                <img src='./images/icon-star.svg' class="pb-3" alt="icon-star" />
                <h5>Prazo de pagamento.</h5>
                </div>
                <p class="supplier-text-icons m-0">
                Melhore seu fluxo de caixa ou ganhe fôlego aumentando seu prazo de pagamento.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 product-card-container pr-0 ">
            <div class=" product-card">
              <div class="product-text">
              <div class="product-card-title">
                <img src='./images/icon-work.svg' class="pb-3" alt="icon-work" />
                <h5>Otimização do Fluxo.</h5>
                </div>
                <p class="supplier-text-icons m-0">
                  Tenha controle total dos seus pagamentos e visibilidade da gestão financeira da sua cadeia.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 product-card-container pr-0 ">
            <div class=" product-card">
              <div class="product-text">
              <div class="product-card-title">
                <img src='./images/icon-graph.svg' class="pb-3" alt="icon-graph" />
                <h5>Acesso a linhas de créditos.</h5>
                </div>
                <p class="supplier-text-icons m-0">
                  Tenha acesso a mais de 25 investidores para as linhas de crédito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
          `;
    }
  }

  window.customElements.define("company-section", Company);
