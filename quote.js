let button = document.getElementById('button');
let output = document.getElementById('output');
let quotes = [
    '"Love for All,Hatred for None."- Khalifatul Masih III',
    '"Change the world by being yourself." - Amy Poeheler',
    '"Every moment is a fresh beginning." - T.S Eliot',
    '"Never regret anything that made you smile." - Mark Twain',
    '"Die with memories, not dreams." - Unknown',
    '"Everything you can imagine is real." - Pablo picasso',
    '"Simplicity is the ultimate sophistication." - Leonardo Da Vinci',
    '"Whatever you do, do it well." - Walt Disney',
    '"What we think, we become." - Buddha',
    '"All limitations are self-imposed." - Oliver Holmes',
    '"Tough times never last but tough people do." - Robert Schiuller',
    '"Problems are not stop signs, they are guidlines." - Robert Schiuller'
];
button.addEventListener('click',function(){
     setInterval (function(){
      var xyz = quotes[Math.floor(Math.random() * quotes.length)];
      output.innerHTML = xyz
  },2000) 
})