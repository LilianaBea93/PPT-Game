import { homeView } from "./view/home";
import { instructionsView } from "./view/instructions";
import { playView } from "./view/play";
import { resultView } from "./view/result";

type Route = {
path: RegExp;
component: Function;
};

// Filtros y vistas especificas del proyecto
const routes: Route[] = [
{
    path: /\/home/,
    component: homeView,
},
{
    path: /\/instructions/,
    component: instructionsView,
},
{
    path: /\/play/,
    component: playView,
},
{
    path: /\/result/,
    component: resultView,
},
];

//Inicia el router desde main.js con el elemento principal.
export function initRouter(rootEl: Element): void {
function router(route: string): void {
    // Redirecciona al home cuando no se provee ningun url
    if (route === "/" || route === "") {
    route = "/home";
    history.pushState({}, "", route);
    }

    // Recorre la lista de rutas
    routes.forEach((r: Route) => {
      // Si la ruta es invocada reescribe el elemento Raíz con la vista seleccionada.
    if (r.path.test(route)) {
        const viewEl = r.component({ goTo: goTo });
        rootEl.innerHTML = "";
        rootEl.appendChild(viewEl);
    }
    });
}
  // Función utilitaria que pasa a la vista seleccionada para poder navegar a otras rutas.
function goTo(uri: string): void {
    if (location.pathname !== uri) {
    history.pushState({}, "", uri);
    router(uri);
    }
}

  // Ejecuta el router con la ruta tomada de la url
router(location.pathname);

  //Escucha el evento popstate para actualizar la vista cuando se navega hacia atrás o adelante.
window.addEventListener("popstate", () => {
    router(location.pathname);
});
}