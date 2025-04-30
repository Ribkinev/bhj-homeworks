(() => {
    const deadElem = document.getElementById('dead');
    const lostElem = document.getElementById('lost');
  
    let dead = 0;
    let lost = 0;
  
    const getHole = index => document.getElementById(`hole${index}`);
  
    for (let i = 1; i <= 9; i++) {
        getHole(i).onclick = function () {
            if (this.classList.contains('hole_has-mole')) {
                dead++;
                deadElem.textContent = dead;
                if (dead === 10) {
                    alert('Победа!');
                    dead = 0;
                    lost = 0;
                    deadElem.textContent = dead;
                    lostElem.textContent = lost;
                }
            } else {
                lost++;
                lostElem.textContent = lost;
                if (lost === 5) {
                    alert('Вы проиграли, попробуй еще раз');
                    dead = 0;
                    lost = 0;
                    deadElem.textContent = dead;
                    lostElem.textContent = lost;
                }
            }
        };
    }
})();