
import hummus from '../foods/hummus-dish.jpg';
import zatarPita from '../foods/zatar-pita.jpg';
import falafelPita from '../foods/falafel-Pita.jpg';
import dawali from '../foods/dawali.jpg';

const element = document.createElement('div');

element.innerHTML = "<h1 style='justify-Self: center; align-self: center; grid-area: title;'> Menu Page </h1>";
element.classList.add('main-title');

class food{
    constructor(name, price, info,photo){
        this.name = name;
        this.price = price;
        this.info = info;
        this.photo = photo;

    }
}
const menuItems = [new food('hummus', 10, 'traditional freshly made hummus in a plate with sides', hummus ),
                   new food('zatar pita', 5, 'authentic arabic food from the middle east wild sage with sessemi seeds and backed on bread',zatarPita),
                   new food('falafel', 8, 'the best falael there is to taste, served in a pita with tahini toping', falafelPita),
                   new food('dawali', 8, 'tasty grape leaves ferminted and wrapped around a small serving of rice and meat ', dawali),
]
const emptyOne = document.createElement('div');
emptyOne.style.gridArea = 'emptyOne';

const emptyTwo = document.createElement('div');
emptyTwo.style.gridArea = 'emptyTwo';

for(let i = 0; i< menuItems.length; i++){
    const card =document.createElement('div');
    card.style.gridArea = `card${i}`

    const cardPhoto =document.createElement('img');
    cardPhoto.style.gridArea = 'photo';
    cardPhoto.style.borderTopLeftRadius = '20px';
    cardPhoto.style.borderBottomLeftRadius = '20px';
    cardPhoto.style.height = '200px';
    cardPhoto.style.width = '200px';
    cardPhoto.style.opacity = '0.7';
    
    cardPhoto.src = menuItems[i].photo;


    const cardInfo =document.createElement('p');
    cardInfo.style.gridArea = 'info';
    cardInfo.style.minWidth = '590px'
    cardInfo.style.borderRadius = '20px';
    cardInfo.style.alignSelf = 'center';
    cardInfo.style.backgroundColor ='rgb(94, 102, 95)';
    cardInfo.style.color = 'white';
    cardInfo.textContent = `${menuItems[i].info}`;
    
    card.style.borderRadius = '20px';
    card.style.backgroundColor = 'rgb(94, 102, 95)';
    card.style.width = '800px';
    card.style.height = '200px';
    card.style.display = 'grid';
    card.style.gridTemplateColumns = '2fr ';
    card.style.gridTemplateAreas = `'photo info'`;
    card.style.gap = '10px';

    card.appendChild(cardPhoto);
    card.appendChild(cardInfo);
    //card interactivity
    card.addEventListener(`mouseover`, ()=>{
        card.style.borderRadius = '20px';
        card.style.backgroundColor = 'rgb(69, 75, 70)';
        card.style.width = '810px';
        card.style.height = '210px';
        cardInfo.style.backgroundColor ='rgb(69, 75, 70)';
        cardPhoto.style.height = '210px';
        cardPhoto.style.width = '200px';
        cardPhoto.style.opacity = '1';
    })
    card.addEventListener(`mouseout`, ()=>{
        card.style.borderRadius = '20px';
        card.style.backgroundColor = 'rgb(94, 102, 95)';
        card.style.width = '800px';
        card.style.height = '200px';
        card.style.display = 'grid';
        cardInfo.style.backgroundColor ='rgb(94, 102, 95)';
        cardPhoto.style.height = '200px';
        cardPhoto.style.width = '200px';
        cardPhoto.style.opacity = '0.7';
    })

    element.appendChild(card);
    
}



element.style.display = 'grid';
element.style.height = '92vh';
element.style.width = '100vw';
element.style.gridTemplateRows = '1fr 2fr'
element.style.gridAutoColumns = '1fr 5fr 1fr'; 
element.style.gridAutoRows = '2fr';
element.style.gridTemplateAreas = `
"emptyOne title emptyTwo"
"emptyOne card0 emptyTwo"
"emptyOne card1 emptyTwo"
"emptyOne card2 emptyTwo"
"emptyOne card3 emptyTwo"
`

export { element,}