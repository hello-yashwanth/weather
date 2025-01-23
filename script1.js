

let locat = document.getElementById('location')
let btn = document.getElementById('btn')
let icon = document.getElementById('icon')
let temp = document.getElementById('temp-value') 
let  wheather = document.getElementById('wheather')
let loctt = document.getElementById('location1')
let unit = document.getElementById('unit')
const apikey = 'e9f8407719ca1dbb761bcf4353f35328'
btn.onclick = function(){
    if(locat.value == ""){
        alert("Please enter valid location")
    }

    else{
        loc = locat.value;
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;
        
    fetch(url).then(res=>res.json())
    .then(data=>{
        console.log(data)
        const{name} = data
        const{feels_like} = data.main
        const{temp_min} = data.main
        const{description , icon: weatherIcon} = data.weather[0]
        temp.innerHTML = Math.floor(feels_like-273);
        loctt.innerText =` ${name}`
        unit.innerHTML = `${temp_min}`
        wheather.innerHTML = description
        icon.src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
    })
    // .catch(() =>{
    //     alert("enter valid location")
    // });
    locat.value = "";
}
};