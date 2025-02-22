import logoImg from '../icons/wIbQXc01.svg';
//const homePage = document.getElementById('content');

//element creation
const element = document.createElement('div');
const title =document.createElement('h1');
const logo = document.createElement('img');
const about =document.createElement('div');
const aboutMap = document.createElement('div');
const aboutHours = document.createElement('div');
const  info =document.createElement('div');
const emptyOne =document.createElement('div');
const emptyTwo =document.createElement('div');

//class attirbut
element.classList.add('main-title');
about.classList.add('about-us');

//id attirbute


//element content
title.textContent = "El'Baladi Resturant";
logo.src = logoImg ;
logo.alt = "El'baladi resturant logo ";
aboutHours.innerHTML ='<h5>work hours</h5><ul><li>sunday:</li><li>monday:</li><li>Tuesday:</li><li>Wednesday:</li><li>Thursday:</li><li>Friday:</li><li>Saturday:</li></ul>';
aboutMap.textContent = 'our location:';
info.innerHTML ='<h3> About us: </h3><p>At El Baladi, we bring the rich flavors and traditions of Palestinian and Middle Eastern cuisine to your table. Rooted in a deep love for authentic recipes passed down through generations, our menu offers a vibrant array of dishes made from fresh, locally sourced ingredients. From our savory hummus and tender shawarma to our aromatic falafel, every bite tells a story of the warm, welcoming spirit of the region. Whether youre here for a casual meal or a special celebration, El Baladi invites you to experience the heart and soul of Middle Eastern dining.</p>';
emptyTwo.style.backgroundColor = "black";

// element style
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
element.style.rowGap = '20px';

//logo style
logo.style.width = '300px';
logo.style.height = '300px';
//abouthours

// about style
about.style.minWidth = ' 800px';
about.style.minHeight = '400px';
about.style.backgroundColor = 'rgb(94, 102, 95)';
about.style.backgroundSize = '100% 100%';
about.style.borderRadius = " 20px";
about.style.border = " 10px solid rgb(94, 102, 95)"
about.style.margin = "15px";
about.style.display='grid';
about.style.gridTemplateColumns = '1fr 1fr';
about.style.gridTemplateRows ='1fr';
about.style.color = 'white';
about.style.justifySelf = 'center';
about.appendChild(aboutMap);
about.appendChild(aboutHours);
// info style
info.style.justifySelf = 'center';
info.style.padding = "20px";
info.style.borderRadius = '20px';
info.style.borderLeft = '5px solid #2c312d';
info.style.borderRight = '5px solid #2c312d';
info.style.minWidth = '500px';
info.style.maxWidth =' 800px';
info.style.fontSize = "18px"

//elements style
title.style.justifySelf = 'center';
logo.style.justifySelf = 'center';
emptyOne.style.justifySelf = 'end';
emptyOne.style.alignSelf='center';
emptyTwo.style.alignSelf='center';

                                
title.style.gridArea = 'title';
logo.style.gridArea = 'logo';
about.style.gridArea = 'about';
info.style.gridArea = 'info';
emptyOne.gridArea ='empty-one';
emptyTwo.gridArea = 'empty-two';


//link elements
element.appendChild(title);
element.appendChild(logo);
element.appendChild(about);
element.appendChild(info);
element.appendChild(emptyOne);
element.appendChild(emptyTwo);



export { element,}