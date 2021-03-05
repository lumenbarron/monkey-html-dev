class Contact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('contact');
    this.innerHTML = `
    <div class="container-fluid" id="contact-es">
    <div class="row contact-container">
      <div class="col-sm-12 col-md-6 col-lg-6 contact-text-container">
        <h1 class="contact-header">
          ¿ Se intereso y quiere conversar con nosotros?
          </h1>
          <p class="contact-text">
          Deje su información al lado, que nuestro equipo de consultores, entrará  en contacto con usted para que tenga la mejor solución posible.
          </p>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 contact-form-container">
        <form id="contact-form">
            <div class="label-text label-name">
              <div style="width: 50%">
              <label for="nome" class="form-label" >Nombre</label>
              <input type="nome" class="form-control" id="nome" required />
              <p id="errorName"></p>
            </div>
            <div style="width: 50%">
              <label for="telefone" class="form-label pl-2" >Teléfono</label>
              <input type="telefone" class="form-control ml-2" id="telefone" required />
              <p id="errorTelefone"></p>
            </div>
            </div>
          <div class="label-text">
            <label for="email" class="form-label" >E-mail</label>
            <input type="email" class="form-control" id="email" required />
            <p id="errorEmail"></p>
          </div>
          <div class="label-text">
            <label for="message" class="form-label" >Deje un mensaje</label>
            <textarea class="form-control" id="message" rows="3" required></textarea>
            <p id="errorMessage"></p>
          </div>
        <p class="pt-4 contact-text">Cuéntenos como encaja en nuestro negócio. Usted es:</p>
          <div>
            <div class="form-check mb-3">
              <input class="form-check-input radio-text" type="radio" name="choice" value="fornecedor" id="fornecedorRadio" checked>
              <label class="form-check-label" for="fornecedorRadio">
                Proveedor para una Empresa
              </label>
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input radio-text" type="radio" name="choice" value="empresa" id="empresaRadio">
              <label class="form-check-label" for="empresaRadio">
                Tiene varios proveedores
              </label>
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input radio-text" type="radio" name="choice" value="investidor" id="investidorRadio">
              <label class="form-check-label" for="investidorRadio">
                Es un Inversionista
              </label>
            </div>
          </div>
          <button class="submit-button" onclick="sendContact(event)">Enviar</button>
        </form>
      </div>
    </div>
    <div class="row contact-background"></div>
  </div>
          `;
  }
}

window.customElements.define("contact-section", Contact);
