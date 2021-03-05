class Midia extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid container-midia" id="nossa-equipe">
      <div class="row">
        <h1 class="big-header" id="monkey-head">MONKEY</h1>
         <button class="btn-midia">NOTICIAS</button>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-5 container-col">
          <img src="images/estadao.svg" class="estadao" alt="estadao" />
        </div>
        <div class="col-sm-12 col-md-12 col-lg-7 container-info-midia">
          <h1 class="header-midia mb-4">Fintech Monkey Exchange invertirá hasta R$ 7 millones para llegar a Chile</h1>
          <p class="text-midia">
            Monkey Exchange, marketplace que conecta empresas a instituciones financieras para adelantar
            facturas, se prepara para poner los pies fuera de Brasil.
          </p>
          <a class="link-style" href="">
            Lea Más
          </a>
        </div>
      </div>
      <div class="row row-images">
        <img src="images/segs.png" class="brand-size-midia" alt="segs" />
        <img src="images/ipnews.png" class="brand-size-midia" alt="ipnews" />
        <img src="images/exame.png" class="brand-size-midia" id="exame" alt="exame" />
        <img src="images/aws.png" class="brand-size-midia" alt="aws" />
      </div>
    </div>
          `;
    }
  }
  
  window.customElements.define("midia-section", Midia);