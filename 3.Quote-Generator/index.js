const quoteContainer = document.querySelector("#quote-container") 
const quoteText = document.querySelector("#quote") 
const authorText = document.querySelector("#author") 
const twitterBtn = document.querySelector("#twitter") 
const newQuoteBtn = document.querySelector("#new-quote") 
const loader = document.querySelector("#loader")

function showLoaderSpin(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function hideLoaderSpin(){
    if(!loader.hidden){
        loader.hidden = true;
        quoteContainer.hidden = false;}
}
async function getQuote (){
    showLoaderSpin()
    const proxy = 'https://jacinto-cors-proxy.herokuapp.com/'
    const apiUrl= 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const res = await fetch(proxy + apiUrl); 
        const data = await res.json();
        if (data.quoteAuthor === ''){
            authorText.textContent = 'Unkown'
        }else{
           authorText.textContent = data.quoteAuthor; 
        }
        if(data.quoteText.length > 120){
            quoteText.classList.add("long-quote");
        }else{
            quoteText.classList.remove("long-quote");
        }
        quoteText.textContent = data.quoteText;
        hideLoaderSpin()
    } catch (error) {
        getQuote ()
        
    }
}    
function tweetQuote (){
    const quote = quoteText.textContent;
    const author = authorText.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank')
}
twitterBtn.addEventListener('click', tweetQuote )
newQuoteBtn.addEventListener('click', getQuote)
getQuote ()