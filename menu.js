const template = document.createElement('template');

  template.innerHTML= `
    <div class="menus">
    <a href="#" class="nav-logo">
                <img src="micra-logo.png" class="imagen-logo">
            </a>
            
        <nav class="navbar">

                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="index.html#Home" class="nav-link">Home
                            <img src="icons/Vector.svg">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#ventajas" class="nav-link">Ventajas
                        <img src="icons/Vector.svg"></a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#Modelos" class="nav-link">Modelos
                        <img src="icons/Vector.svg" class="nav-icon-abajo"></a>
                    </li>
                    <li class="nav-item">
                        <a href="index.html#proceso" class="nav-link">Proceso
                        <img src="icons/Vector.svg"></a>
                    </li>

                    <li class="nav-item">
                        <a href="page-construction.html" class="nav-link">Representantes
                        <img src="icons/Vector.svg"></a>
                    </li>
                </ul>
        </nav>
                <!-- Botón hamburguesa -->
                <div class="menu-toggle" id="menu-toggle">☰</div>

        <div class="navbar-02">
                <ul class="nav-menu-02">
                    <li class="nav-boton">
                        <a href="https://wa.me/3455441225" class="nav-boton-link">Consultar ahora</a>
                    </li>
                </ul>
            </div>
        </div> `    
        
        ;
  
  



class Menu extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Agregar el CSS externo dentro del shadowRoot
        const style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'styles01.css');
        this.shadowRoot.appendChild(style);
       
           // JS hamburguesa
      const menuToggle = this.shadowRoot.getElementById('menu-toggle');
      const navMenu = this.shadowRoot.querySelector('.nav-menu');
      if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
          navMenu.classList.toggle('active');
      });
    }
  }
}

customElements.define('menu-component', Menu);