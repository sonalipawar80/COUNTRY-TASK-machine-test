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


// -----------------------secondtaskPractice---------------------
// capSortHandler();

// let capAssending=true;
// const capSortHandler=()=>{

//     CapIcon.classList.remove('d-none');
//     NameIcon.classList.add('d-none');
//     PopuIcon.classList.add('d-none');

// CapIcon.classList.add('fa-arrow-down',capAssending)
// CapIcon.classList.toggle('fa-arrow-down',!capAssending)
// CapIcon.classList.remove('fa-arrow-down')
// CapIcon.classList.add('fa-arrow-up')
//         countries.sort((a,b)=>{
//             const capitalA=a.capital.toLowerCase();
//             const capitalB=b.capital.toLowerCase();
//             if(capAssending){
//                 return capitalA>capitalB?1:capitalA>capitalB?-1:0
//             }else{
//                 return capitalA < capitalB?1:capitalA < capitalB?-1:0
//             }
//         });

//         if(capAssending){
//             CapIcon.classList.remove('fa-arrow-down');
//             CapIcon.classList.add('fa-arrow-up');
//         }else{
//             CapIcon.classList.remove('fa-arrow-up');
//             CapIcon.classList.add('fa-arrow-down');

//         }


//     capAssending=!capAssending
//     renderCountries();
// }

// ---------------------------3rd funt------------------------


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
// ---------------------------------------------------------------------------------------------------------------------------------
// const handleInput=(event)=>{
//     const query =event.target.value.toLowerCase();
//     const filteredCountries = countries.filter(country=> country.name.toLowerCase().includes(query));
//     renderCountries(filteredCountries);
// }

// function renderCountries(filteredCountries){
//     const resultDiv=document.getElementById("result");
//     if(filteredCountries.length ===0){
//         resultDiv.textContent="no coutry is found.";
//         return;
//     }

//     resultDiv.innerHTML=filteredCountries.map(country=>`<p>${country.name} (${country.capital}) (${country.languages}) </p>`).join("");
// }
// -----------------------------------------------------------------------------------------------------------------------------------------
// const keySearch = (eve) => {
//     let searchalpha = eve.target.value.toLowerCase();

//     // const countiesfind = countries.filter(country => {
//     //     return country.name.toLowerCase().includes(searchAphabet) || (country.capital && country.capital.toLowerCase().includes(searchAphabet)) || country.languages.some(lang => lang.toLowerCase().includes(searchAphabet))
//     // });
//     const countryFinder =countries.filter(country=>{
//         return (country.name.toLowerCase().includes(searchalpha)||(country.capital.toLowerCase().includes(searchalpha))|| ((country.languages).some(lang=>lang.toLowerCase().includes(searchalpha))));
//     })
//     renderCountries(countryFinder);
// };

// || country.languages.some(lang => lang.toLowerCase().includes(searchWords))

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

let graphContainer=document.getElementById('graphContainer');
let populationbtnicon=document.getElementById('populationbtnicon');
let languagebtn=document.getElementById('languagebtn');
let graphWrapper=document.getElementById('graph-container')


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


//   --------------------------top 10 country data ++++  populationevent----------------------
  
  populationbtnicon.addEventListener("click", () => {
    renderPopuGraph(countries);
  });
  





// const renderPopulationGraph = (data=countries) => {

//     const totalPopulation = data.reduce((sum, country) => sum + country.population, 0);
//     let content = "";
//     content += `
//       <div class="bars">

//             <table>
//                     <tr>
//                         <td>wold</td>
//                         <td class="bar" style="width:100%; height: 35px; background-color: orange;"></td>
//                         <td>${totalPopulation.toLocaleString()}</td>
//                     </tr>
//              </table>
//         </div>
//     `;

//     data.forEach((country) => {
//       const percentage = ((country.population / totalPopulation) * 100).toFixed(2);
//       content += `
//         <div class="bars">
//             <table>
//                     <tr>
//                         <td>${country.name}</td>
//                         <td class="bar" style="width:${percentage}%; height: 35px; background-color: orange;"></td>
//                         <td>${country.population.toLocaleString()}</td>
//                     </tr>
//              </table>
//         </div>
//       `;
//     });
  
//     graphWrapper.innerHTML = content;
//   };



//   <ul>
//   <div>${country.name}</div>
//   <div class="bar" style="width:${percentage}%; height: 35px; background-color: orange;"></div>
//   <div>${country.population.toLocaleString()}</div>
//   </ul>

// { <div class="bars">
// <div>World</div>
// <div class="bar" style="width:100%; height: 35px; background-color: orange;"></div>
// <div>${totalPopulation.toLocaleString()}</div>
// </div> }




// populationbtn.addEventListener("click", () => {
//         renderPopulationGraph(countries);})
























// // Array containing country data
// const countries = [
//     // Add the data here from the provided array
//     { name: "China", population: 1402112000 },
//     { name: "India", population: 1380004385 },
//     { name: "USA", population: 329484123 },
//     { name: "Indonesia", population: 273523621 },
//     { name: "Pakistan", population: 220892331 },
//     { name: "Brazil", population: 212559409 },
//     { name: "Nigeria", population: 206139587 },
//     { name: "Bangladesh", population: 164689383 },
//     { name: "Russia", population: 144104080 },
//     { name: "Mexico", population: 128932753 }
//   ];
  
//   // Function to generate the population graph
//   const renderPopulationGraph = (data) => {
//     // Get the wrapper element where the graph will be displayed
//     const graphWrapper = document.getElementById("graphWrapper");
  
//     // Calculate the total world population
//     const totalPopulation = data.reduce((sum, country) => sum + country.population, 0);
  
//     // Create HTML content for the graph
//     let content = "";
    
//     // Add the world population to the graph
//     content += `
//       <div class="bars">
//         <div>World</div>
//         <div class="bar" style="width:100%; height: 35px; background-color: orange;"></div>
//         <div>${totalPopulation.toLocaleString()}</div>
//       </div>
//     `;
  
//     // Add each country's population to the graph
//     data.forEach((country) => {
//       const percentage = ((country.population / totalPopulation) * 100).toFixed(2);
//       content += `
//         <div class="bars">
//           <div>${country.name}</div>
//           <div class="bar" style="width:${percentage}%; height: 35px; background-color: orange;"></div>
//           <div>${country.population.toLocaleString()}</div>
//         </div>
//       `;
//     });
  
//     // Set the generated HTML into the wrapper
//     graphWrapper.innerHTML = content;
//   };
  
//   // Call the function with the top 10 most populated countries
//   document.addEventListener("DOMContentLoaded", () => {
//     renderPopulationGraph(countries);
//   });
  

