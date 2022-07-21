let [milliseconds, second, minute] = [0, 0, 0];
let timerRef = document.querySelector('.mainTime');
let int = null;

document.getElementById('start').addEventListener('click', () => {
    if (int != null) {
        clearInterval(int);

    }
    int = setInterval(mainTime, 10);
});

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(int);
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(int);
    [milliseconds, second, minute, hours] = [0, 0, 0];
    timerRef.innerHTML = "00 : 00 : 00";
});

function mainTime() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        second += 1;
        if (second == 60) {
            second = 0;
            minute++;
            if (minute == 60) {
                minute = 0;
            }
        }
    }

    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = milliseconds < 100 ? "00" + milliseconds : milliseconds;

    timerRef.innerHTML = `${m} : ${s} : ${ms}`;
}

