import { state } from "../state";

export function instructionsView(params: { goTo: Function }): HTMLDivElement {
state.resetState();
const div: HTMLDivElement = document.createElement("div");
div.classList.add("instructions", "background");
div.innerHTML = `
    <div class="content">
        <h3 class="instrucciones">Presiona jugar y elige: piedra, papel o tijera antes de que pasen los 3 segundos.</h3>
        <button>jugar 😁</button>
    </div>
    <div class="images">

        <img src="public/img/tijera.svg" alt="tijera" class="image scissors">
        <img src="public/img/piedra.svg" alt="piedra" class="image rock">
        <img src="public/img/papel.svg" alt="papel" class="image paper">
    </div>
    `;

const buttonStart = div.querySelector("button")!;
buttonStart.onclick = () => {
    params.goTo("/play");
};
return div;
}