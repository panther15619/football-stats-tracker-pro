const players = [
{
name:"Erling Haaland",
goals:31,
assists:8,
appearances:35
},
{
name:"Bukayo Saka",
goals:18,
assists:13,
appearances:38
},
{
name:"Mohamed Salah",
goals:27,
assists:15,
appearances:36
},
{
name:"Cole Palmer",
goals:22,
assists:11,
appearances:34
},
{
name:"Jude Bellingham",
goals:19,
assists:10,
appearances:33
}
];

const cards = document.getElementById("cards");
const searchInput = document.getElementById("searchInput");

function displayPlayers(data){
cards.innerHTML="";

data.forEach(player=>{
cards.innerHTML += `
<div class="card">
<h2 class="player-name">${player.name}</h2>

<p class="stat">⚽ Goals: ${player.goals}</p>
<p class="stat">🎯 Assists: ${player.assists}</p>
<p class="stat">🏃 Appearances: ${player.appearances}</p>
</div>
`;
});
}

displayPlayers(players);

searchInput.addEventListener("keyup", () => {

const searchValue = searchInput.value.toLowerCase();

const filteredPlayers = players.filter(player =>
player.name.toLowerCase().includes(searchValue)
);

displayPlayers(filteredPlayers);

});
