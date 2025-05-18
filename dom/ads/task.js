let rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    let rotatorCase = Array.from(rotator.querySelectorAll('.rotator__case'));

    let switchRotatorCase = () => {
        let activeRotatorCase = rotatorCase.findIndex(c => c.classList.contains('rotator__case_active'));
        rotatorCase[activeRotatorCase].classList.remove('rotator__case_active');

        let nextRotator = (activeRotatorCase + 1) % rotatorCase.length;
        let nextRotatorCase = rotatorCase[nextRotator];

        nextRotatorCase.classList.add('rotator__case_active');

        let color = nextRotatorCase.dataset.color;
        rotator.style.color = color;

        let speed = parseInt(nextRotatorCase.dataset.speed, 10);

        setTimeout(switchRotatorCase, speed);
    };

    if (rotatorCase.length > 0) {
        let firstRotatorCase = rotatorCase[0];
        rotator.style.color = firstRotatorCase.dataset.color;

        setTimeout(switchRotatorCase, firstRotatorCase.dataset.speed);
    }
});