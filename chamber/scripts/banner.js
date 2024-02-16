const closeBtn = document.getElementById("close");
const displayBanner = document.querySelector(".banner");

closeBtn.addEventListener("click", hideBanner)

function hideBanner(){
    displayBanner.style.display = "none";
}



const currenDate = new Date();

const dayOfWeek = currenDate.getDay();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const currentDayOfWeek = daysOfWeek[dayOfWeek];

if(currentDayOfWeek === 'Monday'){

    displayBanner.style.display = "block";
}
else if(currentDayOfWeek === 'Tuesday'){

    displayBanner.style.display = "block";
}
else if(currentDayOfWeek === 'Wednesday'){
    
    displayBanner.style.display = "block";
}
else{
    displayBanner.style.display = "none";

}