console.log("holiiiiii")
class BarraSuperior extends HTMLElement{
    constructor(){
        let estilos=`<style>
        .logo{
            position: absolute;
            width: 10vw;
            top: 1vw;
            left: 3vw;
        }
        </style>`;
      super();
      this.attachShadow({mode:'open'});


        this.shadowRoot.innerHTML =`
        ${estilos}
       <img class="logo" src="../img/gorroCocina.png">`;  
    }
}
customElements.define('user-card',BarraSuperior);