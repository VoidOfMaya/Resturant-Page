


const element = document.createElement('div');
element.innerHTML = "<h1 style='justify-Self: center; align-self: center; grid-area: title;'> contact info</h1>";
element.classList.add('main-title')

const contactCard =document.createElement('div');
contactCard.style.gridArea = 'contact';
contactCard.style.backgroundColor = 'rgb(94, 102, 95)';
contactCard.style.borderRadius = '20px';
const contacInfo = [ '<li>Phone/Whatsapp: +000-000000000</li>',
                     '<li>Email : elbaladi@elbaladi.com</li>',
]
const contactList = document.createElement('ul');
contactList.innerHTML = contacInfo.join('');
contactList.style.color= 'white';
contactList.style.justifySelf = 'center';
contactList.style.alignSelf = 'center';

contactCard.appendChild(contactList);

element.style.display = 'grid';
element.style.height = '92vh';
element.style.width = '100vw';
element.style.gridTemplateColumns = '1fr 5fr 1fr'; 
element.style.gridTemplateRows = '1fr 3fr 1fr';
element.style.gridTemplateAreas = `
  "empty-one title empty-two"
  "empty-one contact empty-two"
  "empty-one emptyOne empty-two"
`;
element.appendChild(contactCard);


export { element,}