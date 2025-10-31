let Quotes = [
  '"Stay hungry, stay foolish."',
  '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
  '"It always seems impossible until it’s done."',
  '"Don’t watch the clock; do what it does. Keep going."',
  '"Your time is limited, so don’t waste it living someone else’s life."',
  '""Do not be embarrassed by your failures, learn from them and start again."',
  '"If you can’t fly, then run. If you can’t run, then walk. If you can’t walk, then crawl. But by all means, keep moving."',
  '"Code is like humor. When you have to explain it, it’s bad."',
  '"The best way to get started is to quit talking and begin doing."',
  '"Whether you think you can or you think you can’t, you’re right."',
];
let Authors = [
  "— Steve Jobs",
  "— Winston Churchill",
  "— Nelson Mandela",
  "— Sam Levenson",
  "— Richard Branson",
  "— Steve Jobs",
  "— Martin Luther King Jr.",
  "— Cory House",
  "— Walt Disney",
  "— Henry Ford",
];

let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let body = document.querySelector("body");
let btn = document.querySelector(".mode");
let para = document.querySelector("p");
let heading = document.querySelector("h1");
let changeQuote = document.querySelector(".btn")

let mode = "Light";

btn.addEventListener("click", () => {
  if (mode === "Light") {
    body.style.backgroundColor = "black";
    para.style.color = "white";
    heading.style.color = "white";
    author.style.color="white"
    mode = "Dark";
  } else {
    body.style.backgroundColor = "white";
    para.style.color = "black";
    heading.style.color = "black";
    author.style.color="black"
    mode = "Light";
  }
});

let idx=0
changeQuote.addEventListener("click",()=>{
        quote.innerText=Quotes[idx]
        author.innerText=Authors[idx]
    idx++;

    if(idx==n-1){
      alert("No more Quotes")
    }
})