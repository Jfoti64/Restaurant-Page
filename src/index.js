import "./style.css";
import { populateHomeTab } from "./homeTab";
import { populateMenuTab } from "./menuTab";
import { populateAboutTab } from "./aboutTab";

const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');


populateHomeTab();

home.addEventListener('click', () => {
    clearDom();
    populateHomeTab();
});

about.addEventListener('click', () => {
    clearDom();
    populateAboutTab();
});

menu.addEventListener('click', () => {
    clearDom();
    populateMenuTab();
});

function clearDom() {
    document.getElementById('content').remove();
}

