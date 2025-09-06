const whatsapptemplate = document.createElement('template');

  whatsapptemplate.innerHTML= `

  <!-- Botón flotante de WhatsApp -->
        
            <a href="https://wa.me/3455441225" class="whatsapp-float" target="_blank" title="Escríbenos por WhatsApp">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
        </a>`;


  class WhatsappFlotante extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(whatsapptemplate.content.cloneNode(true));

        // Agregar el CSS externo dentro del shadowRoot
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'styles01.css');
        this.shadowRoot.appendChild(style);
       
          
  }
}

customElements.define('whatsapp-component', WhatsappFlotante);