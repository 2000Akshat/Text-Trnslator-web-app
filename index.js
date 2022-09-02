const selectTag = document.querySelectorAll("select");
const fromtext = document.querySelector(".from-text");
const totext = document.querySelector(".to-text");
const exchange = document.querySelector(".exchange");
translatebtn = document.querySelector("button");

selectTag.forEach((tag, id)  => {

    for (const country_code in countries) {
        // console.log(countries[country_code]);
        //selecting english by default as From language and hindi as TO language 
        let selected;
        
        if(id == 0 && country_code == "en-GB"){
            selected = "selected";
        } else if(id == 1 && country_code == "hi-IN"){
            selected = "selected";
        }
        
        let option = `<option  value="${country_code}" ${selected}>${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);

    }
});
exchange.addEventListener("click", () => {
    let tempText = fromtext.value;

    fromtext.value = totext.value;
    
    totext.value = tempText;
    
    
});

translatebtn.addEventListener("click", () =>{
   let text = fromtext.value;
   translatefrom = selectTag[0].value, //getting from select
   translateto = selectTag[1].value;   // getting to select
   console.log(text, translatefrom, translateto);
   let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translatefrom}|${translateto}`;
   //fetching api responses and returning it with parsing
   fetch(apiUrl).then(res => res.json()).then(data =>{
     console.log(data);
     totext.value = data.responseData.translatedText;

   } )
});