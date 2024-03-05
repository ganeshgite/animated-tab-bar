const tab = document.querySelector(".tab");
const options = document.querySelector(".options ");
const options2 = document.querySelector(".options2 ");
const options3 = document.querySelector(".options3 ");
tab.addEventListener("click",()=>{
    tab.classList.toggle("active");
    options.classList.toggle("active-options")
    options2.classList.toggle("active-options")
    options3.classList.toggle("active-options")
});