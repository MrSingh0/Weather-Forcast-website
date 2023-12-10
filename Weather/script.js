let btn = document.querySelector(".btn");
let loc = document.querySelector(".loc");
let inp = document.querySelector("input");
let temp = document.querySelector(".t");
let speed = document.querySelector(".s");
let degree = document.querySelector(".d");
let img = document.querySelector(".image");

let key = "&appid=a28a24054f662ef99e8052e61e8eb048&units=metric";
let url = "https://api.openweathermap.org/data/2.5/weather?q=";

btn.addEventListener("click", async () => {
  let ci = inp.value; 
  let h = await getweather(key,ci);
  loc.innerText = h.name;
  temp.innerText = h.main.temp+"°C";
  speed.innerText = h.wind.speed+" m/s";
  degree.innerText = h.wind.deg+ "°";
  inp.value="";
});



async function getweather(key,ci) {
    try {
        const response = await axios.get(url+ci+key);
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log("Error fetching weather data:", error);
        loc.innerText="Wrong City";
        temp.innerText = "Please";
        speed.innerText = "Re-Check";
        degree.innerText = "City Name";
    }
}


//gsap code
var tl = gsap.timeline();

tl.from(".header",{
  y:-100,
  duration:1,
  opacity:0,
},"same")


tl.to(".scroll",{
  y:30,
  repeat:-1,
  stagger:1,
  yoyo:1,
},"same")

tl.from(".wel h1",{
  x:+100,
  duration:0.5,
  opacity:0,
})

tl.from(".wel input",{
  x:-100,
  duration:0.5,
  opacity:0,
})

tl.from(".wel .btn",{
  y:+100,
  duration:0.5,
  opacity:0,
})

gsap.to(".about",{
  fontSize: "4rem",
  delay:0.5,
  duration: 4,
  color: "rgb(0, 216, 245)",
  scrollTrigger: {
    trigger:".about ",
    scroller: "body",
    start: "top 40%",
    end: "top 20%",
    scrub: 2,
  }
})
