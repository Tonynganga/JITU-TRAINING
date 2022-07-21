let [milliseconds, second, minute] = [0, 0, 0];
let timerRef = document.querySelector('.mainTime');
let newtime = null;

document.getElementById('start').addEventListener('click', () =>{
    if(newtime != null){
        clearInterval(newtime);
    }
    newtime = setInterval(createTimer, 10);
});

document.getElementById('stop').addEventListener('click', () =>{
    clearInterval(newtime);
});

document.getElementById('reset').addEventListener('click', () =>{
    clearInterval(newtime);
    [milliseconds, second, minute, hours] = [0, 0, 0];
    timerRef.innerHTML = '00 : 00 :00';
});

function createTimer(){
    milliseconds += 10;
    if(milliseconds === 1000){
        milliseconds = 0;
        second += 1;

        if(second == 60){
            second = 0;
            minute ++;

            if(minute == 60){
                minute = 0;
            }

        }
    }

    let m, s, ms;
    if (minute < 10){
         m = "0" + minute;
    }else{
        m = minute;
    }
    if(second < 10){
        s = "0" + second;
    }
    else{
        s = second;
    }
    if(milliseconds < 100){
        ms = "00" + milliseconds;
    }
    else{
        ms = milliseconds;
    }


    timerRef.innerHTML = `${m} ${s} ${ms}`;
}