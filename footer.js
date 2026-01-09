const footertemplate = document.createElement('template');

    footertemplate.innerHTML= `
      <div class="fotter-columnas">
            <div class="f-una-columna">
                <img src="icons/micra-negativo-20.svg" alt="">
            </div>
            <div class="f-una-columna">
                <a href="index.html#Home">Home</a>
                <a href="index.html#ventajas">Ventajas</a>
                <a href="index.html#Modelos">Modelos</a>
            </div>
            <div class="f-una-columna">
                <a href="index.html#proceso">Proceso</a>
                <a href="page-construction.html">Representantes</a>
                <a href="especificaciones.html">Especificaciones</a>
            </div>
            <div class="f-una-columna">
                <p>3455441225</p>
                <p>contacto@micra.com.ar</p>
                <p>Villaguay, Entre Ríos, Argentina</p>
            </div>

        </div>
  `;


class Footer extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(footertemplate.content.cloneNode(true));

        // Agregar el CSS externo dentro del shadowRoot
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'styles01.css');
        this.shadowRoot.appendChild(style);

      
    }

}

customElements.define('footer-component', Footer);