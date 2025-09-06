const bannertemplate = document.createElement('template');

  bannertemplate.innerHTML= `
      <div class="contenedor-redes">
      
        <ul class="cont-texto">
            <li>
                <p>Bienvenidos a Micra</p>
            </li>
        </ul>

        <ul class="cont-datos">
            <li>
                <img src="icons/tel.svg">
                +54-3455441225
            </li>
            <li>
                <img src="icons/map.svg">
                Villaguay, Entre Ríos, Argentina
            </li>
            <li>
                <img src="icons/mail.svg">
                contacto@micra.com.ar                
            </li>
        </ul>

        <ul class="cont-redes">
            <li class="redes-item">
                <a href="https://www.instagram.com/sistemamicra?utm_source=ig_web_button_share_sheet&igsh=MWU1cnZ2Z3Fxd3cxeQ==" class="redes-link">
                <img src="icons/instagram.svg">
                </a>
            </li>
    <!--        <li class="redes-item">
                <a href="#" class="redes-link">
                <img src="icons/facebook.svg">
                </a>
            </li>-->
        </ul>
    </div>
  `;


class Banner extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(bannertemplate.content.cloneNode(true));

        // Agregar el CSS externo dentro del shadowRoot
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'styles01.css');
        this.shadowRoot.appendChild(style);

      
    }

}

customElements.define('banner-component', Banner);