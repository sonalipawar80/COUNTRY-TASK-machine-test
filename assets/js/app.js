let cl = console.log;

// --------------------------declation--------------------------------------------

let cardDoc = document.getElementById('cardDoc');

let NameBtn = document.getElementById('NameBtn')
let NameIcon = document.getElementById('NameIcon')

let capBtn = document.getElementById('capBtn')
let CapIcon = document.getElementById('CapIcon')

let populationgBtn = document.getElementById('populationgBtn')
let PopuIcon = document.getElementById('PopuIcon')


let search = document.getElementById('search')
let countCoutry=document.getElementById('countCoutry')

const renderCountries = (data = countries) => {

    let result = "";
    data.forEach((ele) => {
        result += `<div class="col-lg-2">
                <div class="card countryCard">
                    <img src="${ele.flag}" 
                    class="card-img-top shadow" 
                    alt="flagImg"
                    title="Flag">
                    <div class="card-body">
                      <h5 class="card-title text-center">${ele.name}</h5>
                      <div class="card-text">
                        <p class="mb-0"><span class="font-weight-bold">Capital: </span>${ele.capital}</p>
                        <p class="mb-0"><span class="font-weight-bold">Languages: </span>${ele.languages}</p>
                        <p class="mb-0"><span class="font-weight-bold">Population: </span>${ele.population}</p>
                      </div>
                    </div>
                  </div>
            </div>`
    })

    cardDoc.innerHTML = result;

};
renderCountries();

// -----------------functions----------------

let nameAssending = true;

const NameSortHandler = () => {
    NameIcon.classList.remove('d-none');
    CapIcon.classList.add('d-none');
    PopuIcon.classList.add('d-none');
    if (nameAssending) {
        NameIcon.classList.add('fa-arrow-down')
        NameIcon.classList.remove('fa-arrow-up')
        countries.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
    } else {
        NameIcon.classList.add('fa-arrow-up')
        NameIcon.classList.remove('fa-arrow-down')
        countries.sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0)
    }

    nameAssending = !nameAssending
    renderCountries();
}

// --------------------2nd function------------------

let capAssending = true;

const capSortHandler = () => {

    CapIcon.classList.remove('d-none');
    NameIcon.classList.add('d-none');
    PopuIcon.classList.add('d-none');


    if (capAssending) {
        CapIcon.classList.add('fa-arrow-down')
        CapIcon.classList.remove('fa-arrow-up')
        countries.sort((a, b) => a.capital > b.capital ? 1 : a.capital < b.capital ? -1 : 0)
    } else {
        CapIcon.classList.add('fa-arrow-up')
        CapIcon.classList.remove('fa-arrow-down')
        countries.sort((a, b) => a.capital < b.capital ? 1 : a.capital > b.capital ? -1 : 0)
    }

    capAssending = !capAssending
    renderCountries();
}



let populAssending = true;

const populationSortHandler = () => {

    PopuIcon.classList.remove('d-none');
    CapIcon.classList.add('d-none');
    NameIcon.classList.add('d-none');

    if (populAssending) {
        PopuIcon.classList.add('fa-arrow-down')
        PopuIcon.classList.remove('fa-arrow-up')
        countries.sort((a, b) => a.population > b.population ? 1 : a.population < b.population ? -1 : 0)
    } else {
        PopuIcon.classList.add('fa-arrow-up')
        PopuIcon.classList.remove('fa-arrow-down')
        countries.sort((a, b) => a.population < b.population ? 1 : a.population > b.population ? -1 : 0)
    }

    populAssending = !populAssending
    renderCountries();
}

const onKeyUp = (eve) => {
    let searchWords = eve.target.value.toLowerCase();

    const filteredCountries = countries.filter(country => {
        return country.name.toLowerCase().includes(searchWords) || (country.capital && country.capital.toLowerCase().includes(searchWords)) 
          
    })
    renderCountries(filteredCountries)
    countCoutry.innerHTML = `<em><strong>${filteredCountries.length}</strong> of ${countries.length} countries found</em>`
}
// ----------------------events--------------------------------

NameBtn.addEventListener('click', NameSortHandler);
capBtn.addEventListener('click', capSortHandler);
populationgBtn.addEventListener('click', populationSortHandler);
search.addEventListener('keyup', onKeyUp)






// --------------------------top 10 country data ++++  getting -------------------------

let chartBarStatus=document.getElementById('chartBarStatus');
let title=document.getElementById('title');

let populationbtnicon=document.getElementById('populationbtnicon');
let languagebtnicon=document.getElementById('languagebtnicon');



// ------------------------------top 10 country data ++++  event function------------------
const renderPopuGraph = () => {
    const totalPopulation = countries.reduce((sum, country) => sum + country.population, 0);
  let content=''
     content += `
         <div class="graph-row">
        <div class="country-name">World}</div>
        <div class="bar-container">
          <div class="bar" style="width: 100%"></div>
        </div>
        <div class="population-value">${country.population.toLocaleString()}</div>
      </div>
    `;
  
    data.forEach((country) => {
      const percentage = ((country.population / totalPopulation) * 100).toFixed(2);
      content += `
     <div class="graph-row">
        <div class="country-name">${country.name}</div>
        <div class="bar-container">
          <div class="bar" style="width: ${percentage}%"></div>
        </div>
        <div class="population-value">${country.population.toLocaleString()}</div>
      </div>
    `;

      graphWrapper.innerHTML = content;
    });
  
  
  };



const displayGraphPop=()=>{
  const worldPopulation=countries.reduce((a,b)=>a+b.population, 0);
  const topCountryPop=countries.sort((a,b)=>b.population-a.population).slice(0,10);
  

  let result=`
               <div class="row mt-2">
                <div class="col-md-2">
                    <h5>world</h5>
                </div>
                <div class="col-md-8">
                    <div class="bar">
                        <div class="percentage"></div>
                    </div>
                </div>
                <div class="col-md-2">
                    <h5>${worldPopulation}</h5>
                </div>
            </div>
  `;

  topCountryPop.forEach((country)=>{
    result+=`
               <div class="row mt-2">
                <div class="col-md-2">
                    <h5>${country.name}</h5>
                </div>
                <div class="col-md-8">
                    <div class="bar">
                        <div class="percentage" style="width:${(country.population/worldPopulation)*100}%"></div>
                    </div>
                </div>
                <div class="col-md-2">
                    <h5>${worldPopulation}</h5>
                </div>
            </div>
  `;
  });

  chartBarStatus.innerHTML=result;
  title.innerHTML=`10 Most Populated country in World`

};
displayGraphPop();

let onClickGraphPop=()=>{
    displayGraphPop();
}

let onClickGraphlang=()=>{
  const languageCountryArray=[];
  countries.forEach(country=>{
    country.languages.forEach(language=>{

    let existingObj=languageCountryArray.find(obj=>obj.language===language);
    if(existingObj){
      existingObj.count+=1
    }else{
      languageCountryArray.push({language: language, count:1});
    }
    });
  });
  let topSpokanLang=languageCountryArray.sort((a,b)=>b.count-a.count).slice(0,10);

  result=' ';
  topSpokanLang.forEach(obj=>{
    result+=`
              <div class="row mt-2">
                <div class="col-md-2">
                    <h5>${obj.language}</h5>
                </div>
                <div class="col-md-8">
                    <div class="bar">
                        <div class="percentage" style="width:${(obj.count/100)*100}%"></div>
                    </div>
                </div>
                <div class="col-md-2">
                    <h5>${obj.count}</h5>
                </div>
            </div>
    `
  })
  chartBarStatus.innerHTML=result;
  title.innerHTML=`10 Most spoken Languages in World`

};






  populationbtnicon.addEventListener("click",onClickGraphPop)
  languagebtnicon.addEventListener("click",onClickGraphlang)















