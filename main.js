 const api={
	key:"5ab9b4ad665e0f541a7fc24a3ebd6c04",
	base:"https://api.openweathermap.org/data/2.5/" 
}
const searchbox=document.querySelector(".search-box");
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt){
if(evt.keyCode==13){
	getResults(searchbox.value);
	}	
}
function getResults(query){
	fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
	.then(weather=>{
		return weather.json();

	}).then(displayResults);
}

function displayResults(weather){
	
	let city=document.querySelector('.location .city');
	city.innerText=`${weather.name}, ${weather.sys.country}`;

	let date=document.querySelector('.location .date');
const options={ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today =new Date();
date.innerHTML=today.toLocaleDateString("en-US",options);

let temp=document.querySelector('.current .temp');
temp.innerHTML=`${Math.round(weather.main.temp)}<span>°C</span> `;

let weather_el=document.querySelector('.current .weather');
weather_el.innerHTML=weather.weather[0].main;

let hilow=document.querySelector('.hi-low');
hilow.innerText=`${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;

}


/*date.innerText=dateBuilder(now);

function dateBuilder(d) {
	let months=["january","february","march","april","may","june", "july", "august", "septeber", "october", "november","december"];
	let days=["sunday","maonday", "teusday", "wedneday", "thursday", "friday", "saturday"];

let day =days[d.getDay()];
let date =d.getDate();
let month=months[d.getMonth()];
let year=d.getFullYear();

return `${day} ${date} ${month} ${year}`;	

}*/

