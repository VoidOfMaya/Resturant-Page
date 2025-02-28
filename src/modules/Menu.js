
import hummus from '../foods/hummus-dish.jpg';
import zatarPita from '../foods/zatar-pita.jpg';
import falafelPita from '../foods/falafel-Pita.jpg';

const element = document.createElement('div');

element.innerHTML = "<h1 style='justify-Self: center;'> Menu Page </h1>";
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
                   new food('falafel', 8, 'the best falael there is to taste, served in a pita with tahini toping', falafelPita)
]

for(let i = 0; i< menuItems.length; i++){
    const card =document.createElement('div');
    const cardPhoto =document.createElement('img');
    cardPhoto.style.gridArea = 'photo';
    cardPhoto.style.backgroundColort = 'red';
    cardPhoto.src = menuItems[i].photo;


    const cardInfo =document.createElement('p');
    cardInfo.style.gridArea = 'info';
    cardInfo.style.maxWidth = '500px'
    cardInfo.textContent = `${menuItems[i].info}`;
    
    card.style.borderRadius = '20px';
    card.style.border= '2px solid black';
    card.style.width = '800px';
    card.style.height = '200px';
    card.style.marginTop = '20px';
    card.style.display = 'grid';
    //card.style.gridTemplateColumns = '1fr 2fr';

    card.appendChild(cardPhoto);
    card.appendChild(cardInfo);

    //card.style.gridTemplateAreas = " photo info"




    element.appendChild(card);
}

export { element,}