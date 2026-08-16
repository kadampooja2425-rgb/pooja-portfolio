const words = [

    "Web Developer",

    "Frontend Developer",

    "UI Designer",

    "IoT Enthusiast",

    "Engineering Student"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(type,1200);

            return;

        }

    }

    else{

        typing.textContent = currentWord.substring(0,charIndex--);

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex === words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(type,deleting?60:100);

}

type();