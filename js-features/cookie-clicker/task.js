let cookie = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');

let speedCookie = document.createElement('div');
speedCookie.textContent = 'Скорость клика: 0';
cookie.parentNode.appendChild(speedCookie);

let parent = cookie.parentNode;
parent.insertBefore(speedCookie, cookie);

let clicksCount = 0;
let isBig = false; 
let lastClickTime = null;

cookie.onclick = function() {
    clicksCount++;
    counter.textContent = clicksCount;
 
    if (!isBig) {
        cookie.width = 200; 
        cookie.height = 128;
        isBig = true;
    } else {
        cookie.width = 250; 
        cookie.height = 150;
        isBig = false;
    }

    let now = new Date();
    if (lastClickTime !== null) {
        const diffSeconds = (now - lastClickTime) / 1000; 
        const speed = (1 / diffSeconds).toFixed(2);
        speedCookie.textContent = `Скорость клика: ${speed}`;
    }
    lastClickTime = now;
};