const myButton = document.getElementById('button');
const stopElement = document.querySelector('#stop');
const walkElement = document.querySelector('#walk');

myButton.addEventListener('click', () => {
    stopElement.src = 'img/stop-off.svg';
    walkElement.src = 'img/walk-on.svg';

    setTimeout(() => {
        stopElement.src = 'img/stop-on.svg';
        walkElement.src = 'img/walk-off.svg';
    }, 2000)

})





