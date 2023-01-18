//tulisan jagoan desain
const txtElement = ['Jagoan Desain'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

    if (count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }
    setTimeout(ngetik, 500);
})();



// smothSCroll
var posY = 0;
var jarak = 20;

function smoothScroll(id){

    var target = document.getElementById(id).offsetTop -50;

    var scrollAnimate = setTimeout(function(){
        smoothScroll(id);
    }, 5); // fungsi, waktu

    posY = posY + jarak;

    // berhenti pada bagian tertentu 
    if (posY >= target) {
        clearTimeout(scrollAnimate);
        posY = 0;
    }
    else {
        window.scroll(0, posY);
    }

    return false;
};