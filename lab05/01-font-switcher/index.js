const makeBigger = () => {
   var div_size = parseInt(getComputedStyle(document.querySelector("div.content")).getPropertyValue("font-size"));
   var p_size = parseInt(getComputedStyle(document.querySelector("div.content")).getPropertyValue("font-size"));
   document.querySelector("div.content").style.fontSize = div_size + 5 + "px";
   document.querySelector("p").style.fontSize = p_size + 5 + "px";
};

const makeSmaller = () => {
   var div_size = parseInt(getComputedStyle(document.querySelector("div.content")).getPropertyValue("font-size"));
   var p_size = parseInt(getComputedStyle(document.querySelector("div.content")).getPropertyValue("font-size"));
   document.querySelector("div.content").style.fontSize = div_size - 5 + "px";
   document.querySelector("p").style.fontSize = p_size - 5 + "px";
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

