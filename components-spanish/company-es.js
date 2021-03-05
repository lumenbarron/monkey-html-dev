class Company extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid main-company p-0" id="company-es">
      <div class="row row-company m-0">
        <div
          class="col-sm-12 col-md-12 col-lg-6 text-container p-0"
        >
          <button class="btn-company mb-3">Patrocinador</button>
          <h2 class="title-h2">
            En Monkey, llamamos a los clientes que son dueños de
            programas como patrocinador.
          </h2>
          <p class="main-text">
            Aumente su plazo de pago y ayude a sus proveedores a
            tener una vida financiera más saludable.
          </p>
          <a class="link-style" href="ancora-es.html">
            Entienda las ventajas de tener un programa.
          </a>
          <div class="row icons-container-left m-0">
            <div class="col text-icons">
              <img src="./images/chart.svg" class="pb-3" alt="chart-icon" />
              <div>
              <h5 class="title-icons">Flujo de Caja</h5>
              <p class="supplier-text-icons pr-4">
                Con nuestro sistema, usted podrá aumentar su plazo de
                pago.
              </p>
              </div>
            </div>
            <div class="col text-icons">
              <img src="./images/work.svg" class="pb-3" alt="work-icon" />
              <div>
              <h5 class="title-icons">Flexibilidad de Pago</h5>
              <p class="supplier-text-icons">
                Con nuestra solución tenga más flexibilidad para pagar a sus proveedores.
              </p>
              </div>
            </div>
            
          </div>
        </div>
      <div class="col-sm-12 col-md-12 col-lg-6 p-0">
        <img
          src="./images/company-banner-es.png"
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
          <h4>Algunas de nuestras soluciones</h4>
        </div>
        <div class="row m-0">
          <div class="col-lg-3 col-md-6 product-card-container pr-0">
            <div class= "product-card">
              <div class="product-text">
              <div class="product-card-title">
                <img src='./images/icon-heart.svg' class="pb-3" alt="icon-heart" />
                <h5>Promueva a sus proveedores.</h5>
              </div>
                <p class="supplier-text-icons m-0">
                  Impacte positivamente su cadena, del menor al mayor proveedor.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 product-card-container pr-0">
            <div class= "product-card">
              <div class="product-text">
              <div class="product-card-title">
                <img src='./images/icon-star.svg' class="pb-3" alt="icon-star" />
                <h5>Plazo de pago.</h5>
                </div>
                <p class="supplier-text-icons m-0">
                Mejore su flujo de caja y gane líquides aumentando su
                plazo de pago.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 product-card-container pr-0">
            <div class= "product-card">
              <div class="product-text">
              <div class="product-card-title">
                <img src='./images/icon-work.svg' class="pb-3" alt="icon-work" />
                <h5>Optimización del Flujo.</h5>
                </div>
                <p class="supplier-text-icons m-0">
                  Controle su pago, con visibilidad total a la gestión financiera de su cadena.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 product-card-container pr-0">
            <div class= "product-card">
              <div class="product-text">
              <div class="product-card-title">
                <img src='./images/icon-graph.svg' class="pb-3" alt="icon-graph" />
                <h5>Acceso a lineas de créditos.</h5>
                </div>
                <p class="supplier-text-icons m-0">
                  Su empresa tendrá acceso a más de 25 inversionistas para las lineas de créditos.
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