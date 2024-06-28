import { FRUITS } from "./data.mjs";

export const getSuggestions =  (query) =>{
   const result = FRUITS.filter(item => {
    return  (item.substring(0, query.length).toLocaleLowerCase() === query.toLocaleLowerCase())
   }) 
   
   return new Promise((res)=>{
       setTimeout(()=>{
           res(result)
       },500)
   })
}

export function debounce(fn, delay = 500){
    let id;
    return function(){
        let self = this, args = arguments;
        clearTimeout(id);
        id = setTimeout(()=>{
           fn.apply(self, args)
        },delay)
    }
}

