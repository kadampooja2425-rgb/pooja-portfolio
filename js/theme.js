const themeBtn = document.querySelector(".fa-moon");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        themeBtn.classList.remove("fa-moon");

        themeBtn.classList.add("fa-sun");

    }

    else{

        themeBtn.classList.remove("fa-sun");

        themeBtn.classList.add("fa-moon");

    }

});