class BrandingInvestors extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
        <div class="row container-logo-one">
          <img src='./images/bib.png' class="brand-size" alt="bib-company" />
          <img src='./images/bnp.svg' id="bnp" class="brand-size" alt="bnp-company" />
          <img src='./images/bbm.svg' class="brand-size" alt="bbm-company" />
          <img src='./images/bradesco.svg' class="brand-size" alt="bradesco-company" />
        </div>
        <div class="row container-logo-three">
          <img src='./images/daycoval.svg' class="brand-size" alt="daycoval-company" />
          <img src='./images/btg.svg' class="brand-size" alt="btg-svmpany" />
          <img src='./images/itau.svg' id='itau' class="brand-size" alt="itau-company" />
          <img src='./images/safra.svg' id='safra' class="brand-size" alt="safra-company" />
        </div>
              `;
    }
  }
  
  window.customElements.define("branding-investors", BrandingInvestors);
  