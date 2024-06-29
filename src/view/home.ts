import { state } from "../state";

export function homeView(params: { goTo: Function }): HTMLDivElement {
state.resetState();
const div: HTMLDivElement = document.createElement("div");
div.classList.add("home", "background");
div.innerHTML = `
        <div class="content">
            <h2 class="titulo">Piedra<br>Pagel <span>ó</span><br>Tijera</h2>
            <button>Empezar</button>
        </div>
        <div class="imagenes">
            <img src="public/img/tijera.svg" alt="tijera" class="image scissors">
            <img src="public/img/piedra.svg" alt="piedra" class="image rock">
            <img src="public/img/papel.svg" alt="papel" class="image paper">
        </div>
    `;

const buttonStart = div.querySelector("button")!;
buttonStart.onclick = () => {
    params.goTo("/instructions");
};

return div;
}