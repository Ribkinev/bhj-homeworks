let timerElement = document.getElementById("timer");
let totalSeconds = parseInt(timerElement.textContent, 10);

function formatTime(seconds) {
    let hour = Math.floor(seconds / 3600);
    let minute = Math.floor((seconds % 3600) / 60);
    let second = (seconds % 60);
    return [hour, minute, second].map(unit => unit.toString().padStart(2, '0')).join(':');
}

let intervalID = setInterval(() => {
    totalSeconds--;
    if (totalSeconds < 0) {
        clearInterval(intervalID);
        alert("Вы победили в конкурсе!");

        let link = document.createElement("a");
        link.href = "https://tenor.com/ru/view/win-victory-hurrah-happiness-happy-gif-11007354";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        return;
    }
    timerElement.textContent = formatTime(totalSeconds);
}, 1000);