const getRandomHexaColor = () => {
    const hexa = '0123456789abcdef';
    let color = '#';
    for(let i=0; i < 3; i++) {
        color += hexa[Math.floor(Math.random() * 19)]
    };
    return color;
};

setInterval(() => {
    document.querySelector('body').style.backgroundColor = getRandomHexaColor();
    
}, 100);


const timeclock = () => {
    const now = new Date();
    
    let day = now.getDay();
    let month = now.getMonth(); 
    let date = now.getDate();
    let year = now.getFullYear();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();
    let ampm = "오전";

    if(hour ==  0){
        hour = 12;
    }
    if(hour > 12) {
        hour = hour - 12;
        ampm ="오후";
    }

    hour = (hour<10) ? "0" + hour : hour;
    minutes = (minutes<10) ? "0" + minutes : minutes;
    second = (second<10) ? "0" + second : second;
    month = (month <10) ? "0" + month : month;
    date = (date <10) ? "0" + date : date;


    let dia = year + "년 " + month + "월 " + date + "일 " + ampm +" " +  hour + "시 " + minutes + "분 " + second + "초";
    
    
    document.querySelector('.box').innerText = dia;
    

};
const initClock = () => {
    timeclock();
    setInterval(timeclock, 1000)
}

initClock();