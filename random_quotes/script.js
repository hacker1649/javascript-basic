let quoteText = document.getElementById('random-quotes')
let authorName = document.getElementById('author')
let randomBtn = document.getElementById('random-btn')

randomBtn.addEventListener('click', ()=>{
  getQuote();  
});

function getQuote(){
  fetch("https://www.quotable.io/random")
    .then(response => response.json())
    .then(data => {
        quoteText.textContent = data.content;
        authorName.textContent = data.author;
    });
}
