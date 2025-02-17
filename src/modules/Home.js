

//const homePage = document.getElementById('content');

//element creation
const element = document.createElement('div');
const title =document.createElement('h1');
const logo = document.createElement('img');
const about =document.createElement('div');
const  info =document.createElement('div');
const emptyOne =document.createElement('div');
const emptyTwo =document.createElement('div');

//class attirbut
element.classList.add('main-title');

//id attirbute


//element content
title.textContent = "El'Baladi Resturant";
logo.src = 'Resturant-Page/src/icons/wIbQXc01.svg';
logo.alt = "El'baladi resturant logo ";

//style
element.style.display = 'grid';
element.style.height = '92vh';
element.style.width = '100vw';
element.style.gridTemplateColumns = '1fr 5fr 1fr'; 
element.style.gridTemplateRows = '1fr 1fr 3fr 3fr';
element.style.gridTemplateAreas = `
  "empty-one title empty-two"
  "empty-one logo empty-two"
  "empty-one about empty-two"
  "empty-one info empty-two"
  
`;

title.style.justifySelf = 'center';
logo.style.justifySelf = 'center';

                                
title.style.gridArea = 'title';
logo.style.gridArea = 'logo';
about.style.gridArea = 'about';
info.style.gridArea = 'info';
emptyOne.gridArea ='empty-one';
emptyTwo.gridArea = 'empty-two';


//link elements
element.appendChild(title);
element.appendChild(logo);


export { element,}