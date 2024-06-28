import {getSuggestions, debounce} from "./utils.mjs";

const inputBox = document.querySelector('#search-input');
const suggestionsContainer = document.querySelector('#suggestions-wrapper');

function resetState(){
    suggestionsContainer.classList.remove('suggestions-visible')
    suggestionsContainer.innerHTML = ''
}

const addSuggestions = (list = []) =>{
    const fragment = document.createDocumentFragment()
    list.forEach((item)=>{
       const div = document.createElement('div');
       div.innerHTML = item;
       div.classList.add('list-item');
       fragment.appendChild(div) 
    })
    suggestionsContainer.innerHTML = '' 
    suggestionsContainer.appendChild(fragment)
}

const handleSearch = async (query) =>{
  const suggestions =  await getSuggestions(query);
  console.log(`for query ${query}`, suggestions)
  if(suggestions.length){
    suggestionsContainer.classList.add('suggestions-visible')
    addSuggestions(suggestions);
  }
  
}

const handleInputChange = (e) =>{
 const {value} = e.target;
 if(value){
    handleSearch(value);
 }else{
    resetState()
  }
}


(()=>{
    inputBox.addEventListener('input',debounce(handleInputChange, 1500));
 }
)();
