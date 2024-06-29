import "./style.css";
import { initRouter } from "./router";

const root: Element = document.querySelector<HTMLDivElement>("body")!;

initRouter(root);