class NavBar extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar main-nav navbar-expand-xl navbar-light">
      <div class="container-fluid container-nav px-0 pt-4">
        <a class="navbar-brand" href="index-es.html">
          <img src="images/monkey-logo.svg" class="monkey-logo" alt="monkey-logo" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 container-nav m-0">
          <li class="">
          <a class="nav-link" href="index.html">Inicio</a>
        </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Soluciones
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                <a class="dropdown-item nav-link" href="fornecedor-es.html">Proveedores</a>
                <a class="dropdown-item nav-link" href="investidor-es.html">Inversionistas</a>
                <a class="dropdown-item nav-link" href="ancora-es.html">Empresas</a>
              </div>
            </li>
            <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Productos
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item nav-link" href="#">Cadena de Suministro</a>
              <a class="dropdown-item nav-link" href="#">Spike</a>
            </div>
          </li> -->
          <li class="">
              <a class="nav-link" href="quem-somos-es.html">Quiénes Somos</a>
            </li>
            <li class="">
              <a class="nav-link" target="_blank" href="http://help.monkey.exchange/pt-BR/">Dudas</a>
            </li>
            <li class="nav-item dropdown mb-2 mr-2">
            <a type="button" class="btn btn-primary dropdown-toggle" href="#" id="navbarLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Idioma
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarLink2">
              <a class="dropdown-item" href="index.html">PT</a>
              <a class="dropdown-item" href="index-es.html">ES</a>
              <a class="dropdown-item" href="index.html">EN</a>
              </div>
          </li>
          <button class="btn-border-nav">
          <a href="#contact-es">
          ¿ Quieres conversar?
          </a>
          </button>
          </ul>
        </div>
      </div>
  </nav>
          `;
    }
  }
  
  window.customElements.define("navbar-section", NavBar);
  