import "./styles.css";
import { element as home}  from "./modules/Home";
import { element  as menu} from "./modules/Menu";
import { element as contact} from "./modules/Contact";


console.log(`this resturant page is unbder cosntruction!`)

const main = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

const nav = document.querySelector('.nav-bar');
nav.style.position = 'fixed';
nav.style.width = "100vw";



//default page:
main.appendChild(home);
homeBtn.addEventListener('click', ()=>{
    main.innerHTML='';
    main.appendChild(home);
})
menuBtn.addEventListener('click', ()=>{
    main.innerHTML='';
    main.appendChild(menu);
})
contactBtn.addEventListener('click', ()=>{
    main.innerHTML= '';
    main.appendChild(contact);
})
