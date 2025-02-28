
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
//log
logo.src = logoImg ;
logo.alt = "El'baladi resturant logo ";
//about hours
aboutHours.addEventListener('mouseover', ()=>{
  aboutHours.style.backgroundColor = 'rgb(69, 75, 70)';
  workHoursList.style.backgroundColor = 'rgb(69, 75, 70)';
  aboutHours.style.padding = ' 0px 5px'
  aboutHours.style.borderRadius = '15px'
});
aboutHours.addEventListener('mouseout', ()=>{
  aboutHours.style.backgroundColor = 'rgb(94, 102, 95)';
  workHoursList.style.backgroundColor = 'rgb(94, 102, 95)';
  aboutHours.style.paddingLeft = '0px'
});

const workHoursTitle=document.createElement('h3');
workHoursTitle.textContent = 'work hours:'
workHoursTitle.style.justifySelf = 'center';

const workHoursList = document.createElement('ul');
workHoursList.style.justifySelf = 'center';

const days = ["<li>Sunday    : 10:00 - 22:00</li>",
              "<li>Monday    : 10:00 - 22:00</li>",
              "<li>Tuesday   : 10:00 - 22:00</li>", 
              "<li>Wednesday : 10:00 - 22:00</li>", 
              "<li>Thursday  : 10:00 - 22:00</li>",
              "<li>Friday    : 10:00 - 16:00</li>",
              "<li>Saturday  : off</li>"]
workHoursList.innerHTML = days.join('');

aboutHours.appendChild(workHoursTitle);
aboutHours.appendChild(workHoursList);

//about map
aboutMap.addEventListener('mouseover', ()=>{
  aboutMap.style.backgroundColor = 'rgb(69, 75, 70)';
  mapLocation.style.backgroundColor = 'rgb(69, 75, 70)';
  aboutMap.style.padding = ' 0px 6px'
  aboutMap.style.borderRadius = '15px'
});
aboutMap.addEventListener('mouseout', ()=>{
  aboutMap.style.backgroundColor = 'rgb(94, 102, 95)';
  mapLocation.style.backgroundColor = 'rgb(94, 102, 95)';
  aboutMap.style.paddingLeft = '5px'
});
const mapTitle = document.createElement('h3');
const mapLocation = document.createElement('p');
const mapPhoto = document.createElement('div');

mapTitle.textContent = 'location:';
mapTitle.style.justifySelf = 'center';
mapLocation.innerHTML ='<b>you can find us at:</b> USA,CA,San Fransisco,Tank Hill';
mapLocation.style.backgroundColor = 'rgb(94, 102, 95';
mapLocation.style.justifySelf = 'center';

mapPhoto.innerHTML = ' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50475.334378357365!2d-122.39536020041916!3d37.749984715251465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7dfe17c93019%3A0xc2fd87b9738fb652!2sTank%20Hill%20Park!5e0!3m2!1siw!2sil!4v1740250644230!5m2!1siw!2sil" width="400" height="300" style="border-radius:20px; border: 0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> ';
mapPhoto.style.padding ='5px';
mapPhoto.style.borderRadius = '10px'
mapPhoto.style.justifySelf = "center";

aboutMap.appendChild(mapTitle);
aboutMap.appendChild(mapLocation);
aboutMap.appendChild(mapPhoto);

//info 
const infoTitle = document.createElement('h3');
infoTitle.textContent = 'About Us:';
infoTitle.style.justifySelf = 'center';

const infoParagraph = document.createElement('p');
infoParagraph.textContent='At El Baladi, we bring the rich flavors and traditions of Palestinian and Middle Eastern cuisine to your table. Rooted in a deep love for authentic recipes passed down through generations, our menu offers a vibrant array of dishes made from fresh, locally sourced ingredients. From our savory hummus and tender shawarma to our aromatic falafel, every bite tells a story of the warm, welcoming spirit of the region. Whether youre here for a casual meal or a special celebration El Baladi invites you to experience the heart and soul of Middle Eastern dining.';
infoParagraph.style.justifySelf = 'center';

info.appendChild(infoTitle);
info.appendChild(infoParagraph);
info.addEventListener(`mouseover`,()=>{ 
  info.style.backgroundColor = 'rgb(69, 75, 70)';
  infoParagraph.style.backgroundColor = 'rgb(69, 75, 70';
  info.style.color = 'white';
});
info.addEventListener(`mouseout`,()=>{ 
  info.style.backgroundColor = 'rgb(217, 226, 219)';
  infoParagraph.style.backgroundColor = 'rgb(217, 226, 219)';
  info.style.color = '#576359';
});

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