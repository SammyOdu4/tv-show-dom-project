//You can edit ALL of the code here

//1. All episodes must be shown
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  let episodesDiv = document.createElement("div");
  episodesDiv.className = "myGrid";
  rootElem.appendChild(episodesDiv);

  for(let i = 0; i < episodeList.length; i++){
    console.log(episodeList[i].name);

    let cardDiv = document.createElement("div");

    //2. For each episode, AT LEAST following must be displayed:
// i. The episode's name
let title = document.createElement("h1");
title.innerText = episodeList[i].name;
title.className = "myName";
cardDiv.appendChild(title);

//ii. The season number
let numbs = document.createElement("h4");
numbs.innerText = `Season S0${episodeList[i].season}`;
numbs.className = "mySeason";
cardDiv.appendChild(numbs);

//iii. The episode number
let num = document.createElement("h5");
num.innerText = `S0${episodeList[i].season}E0${episodeList[i].number}`;
num.className = "myEpisode";
cardDiv.appendChild(num);

//iv. The episode's medium-sized image
    let img = document.createElement("img");
    img.src = episodeList[i].image.medium;
    cardDiv.appendChild(img);

//v. The episode's summary text
let summary1 = document.createElement("h5");
summary1.innerHTML = episodeList[i].summary;
summary1.className = "mySummary";
cardDiv.appendChild(summary1);

episodesDiv.appendChild(cardDiv);
let tvLink = document.createElement("h5");
tvLink.innerHTML = `The data has (originally) come from 
<a href="https://www.tvmaze.com/">  
  TVMaz </a>
`
tvLink.className = "myTvLink";
cardDiv.appendChild(tvLink);
  }
}
window.onload = setup;

//3. You should combine season number and episode number into an episode code:
//i. Each part should be zero-padded to two digits.
//Answer at Line 31: 
//numbs.innerText = `Season S0${episodeList[i].season}`;


//ii. Example: S02E07 would be the code for the 7th episode of the 2nd season. S2E7 would be incorrect.
//Answer at Line 37: 
//num.innerText = `S0${episodeList[i].season}E0${episodeList[i].number}`;


//4. Your page should state somewhere that the data has (originally) come from TVMaze.com, and link back to that site (or the specific episode on that site). See tvmaze.com/api#licensing.
//Answers at line 53 - 59: 
//let tvLink = document.createElement("h5");
//tvLink.innerHTML = `The data has (originally) come from 
//<a href="https://www.tvmaze.com/">  
    //TVMaz </a>
//tvLink.className = "myTvLink";
//cardDiv.appendChild(tvLink);