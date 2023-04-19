const contactBtn = document.querySelector('.contactBtn')
const startTime = new Date().getTime();

contactBtn.addEventListener('click',function() {
    alert('coming soon');
});


function showVisitsNumber(){
    
    if (localStorage.getItem('visits_number') == null){
        localStorage.setItem('visits_number', 1);
        localStorage.setItem('total session duration', 0);
        console.log(`This is Your first visit of this web-site`);
        
    }else{
        let visits_number = localStorage.getItem('visits_number');
        visits_number++;
        localStorage.setItem('visits_number', visits_number);
        console.log(`You visited this web-site ${visits_number} time(s)`);
    }

}

function showAvgTimeOnPage(){
    let currentTimeOnPage = +(localStorage.getItem('total session duration'));
    let LastSessionDuration = +(localStorage.getItem('last session duration'));
    let newTimeOnPage = currentTimeOnPage + LastSessionDuration;
    let AvgSession =  newTimeOnPage/+(localStorage.getItem('visits_number'));
    localStorage.setItem('total session duration', newTimeOnPage);
    console.log(`Your Average session length is ${AvgSession.toFixed(2)} seconds`);
}

window.addEventListener('beforeunload',function(){
    let closeTime = new Date().getTime();
    let sessionDuration = (closeTime-startTime)/1000;
    this.localStorage.setItem('last session duration',sessionDuration);
})

showVisitsNumber();
showAvgTimeOnPage();



