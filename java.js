var API = "https://restcountries.com/v3.1/all";


var fet = fetch(API)
  .then((response) => response.json())
  .then((data) => {
    
    data.map((value) => {
      var spreadOperator = {
        ...value,
        name: value.name.common,
        flag: value.flags.png,
        code: value.cioc,
        capital: value.capital,
        region: value.region,
        population: value.population,
        latitude: value.latlng[0],
        longitude: value.latlng[1]

      };
      createcountry(spreadOperator);
      
      
     
        // console.log(value)
    })
  })
  
  
   
function createcountry({ name, flag, code, capital, region, population,latitude,longitude }) {
   
  document.body.innerHTML += 
  ` <div class="container">
    <div class="card"  >
    <h1 id="title" class="text-center">${name}</h1>
    <img src="${flag}" class="flag" alt="${name}'Flag image">
 
  <div class="card-body car" >
  <p><span>Population :</span>${population}</p>
  <p><span>Captial :</span> ${capital}</p>
  <p><span>Region :</span> ${region}</p>
  <p><span>Country Code :</span>${code}</p>
  <a href="#" class="btn btn-primary" onclick=(block(${latitude},${longitude},${name})) >Click for Weather</a>
 <div id=${name}>   </div>
  
 
  </div>
</div>
</div>
`
}



function block(lat,lng,name){

  var WAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=06e423ec0af839c485470951f60c3f6b`
   
  console.log(name)
 fetch(WAPI)
 .then((response) => response.json())
 .then((data)=> {

     alert(`
               For ${name.id}  
     Current Humidity is ${data.main.humidity}
     Current Pressure is ${data.main.pressure}
     Current Temperature is ${data.main.temp}`)
    })
}
  
document.addEventListener("click",(event) => event.preventDefault())




// const mainurl ="https://openweathermap.org/"


// const maindiv = document.createElement("div");
// maindiv.setAttribute("id", "div1");
// document.body.appendChild(maindiv);
// maindiv.setAttribute("class","container");

// //---------------Card1------------------//

// const card = document.createElement("div");
// card.setAttribute("class","card");
// card.className="row col-lg-4 col-sm-12"
// card.style.backgroundColor="lightgray"
// // card.style.width= "200px";
// // card.style.height= "250px";
// maindiv.appendChild(card);

// const heading = document.createElement("div")
// heading.setAttribute("class","card-header")
// heading.innerText= "Heading";
// card.appendChild(heading);
// const img=document.createElement("img");
// img.setAttribute("class","card-img-top")
// img.src ="https://wallpapers.com/images/featured/6tlr4cfeg3q0al8n.jpg";
// card.appendChild(img);

// const cardbody = document.createElement("div");
// cardbody.setAttribute("class","card-body")
// const cardtext = document.createElement("h5");
// cardtext.setAttribute("class","card-title")
// cardbody.appendChild(cardtext);

// const cardbodytext = document.createElement("h5");
// cardbodytext.innerText="Ability:New";
// card.appendChild(cardbodytext);

// const cardbodytext1 = document.createElement("h5");
// cardbodytext1.innerText="Ability";
// card.appendChild(cardbodytext1);

// const button = document.createElement("BUTTON");
// button.setAttribute("class","btn btn-primary");
// button.innerText="Click for weather";
// card.appendChild(button);


// //---------------Card2--------------------//

// const card2 = document.createElement("div");
// card2.setAttribute("class","card");
// card2.className="row col-lg-4 col-sm-12"
// card2.style.backgroundColor="lightgray"
// maindiv.appendChild(card2);

// const heading2 = document.createElement("div")
// heading2.setAttribute("class","card-header")
// heading2.innerText= "Heading";
// card2.appendChild(heading2);

// const img2=document.createElement("img");
// img2.setAttribute("class","card-img-top")
// img2.src ="https://wallpapers.com/images/featured/6tlr4cfeg3q0al8n.jpg";
// card2.appendChild(img2);

// const card2body = document.createElement("div");
// card2body.setAttribute("class","card-body")
// const card2text = document.createElement("h5");
// card2text.setAttribute("class","card-title")
// card2body.appendChild(card2text);

// const card2bodytext = document.createElement("h5");
// card2bodytext.innerText="Ability:New";
// card2.appendChild(card2bodytext);

// const card2bodytext1 = document.createElement("h5");
// card2bodytext1.innerText="Ability";
// card2.appendChild(card2bodytext1);

// const button2 = document.createElement("BUTTON");
// button2.setAttribute("class","btn btn-primary");
// button2.innerText="Click for weather";
// card2.appendChild(button2);

// //---------------Card3--------------------//

// const card3 = document.createElement("div");
// card3.setAttribute("class","card");
// card3.className="row col-lg-4 col-sm-12"
// card3.style.backgroundColor="lightgray"
// maindiv.appendChild(card3);

// const heading3 = document.createElement("div")
// heading3.setAttribute("class","card-header")
// heading3.innerText= "Heading";
// card3.appendChild(heading3);

// const img3=document.createElement("img");
// img3.setAttribute("class","card-img-top")
// img3.src ="https://wallpapers.com/images/featured/6tlr4cfeg3q0al8n.jpg";
// card3.appendChild(img3);

// const card3body = document.createElement("div");
// card3body.setAttribute("class","card-body")
// const card3text = document.createElement("h5");
// card3text.setAttribute("class","card-title")
// card3body.appendChild(card3text);

// const card3bodytext = document.createElement("h5");
// card3bodytext.innerText="Ability:New";
// card3.appendChild(card3bodytext);

// const card3bodytext1 = document.createElement("h5");
// card3bodytext1.innerText="Ability";
// card3.appendChild(card3bodytext1);

// const button3 = document.createElement("BUTTON");
// button3.setAttribute("class","btn btn-primary");
// button3.innerText="Click for weather";
// card3.appendChild(button3);