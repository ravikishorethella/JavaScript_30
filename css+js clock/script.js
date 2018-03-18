const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');

// time should change for every second
setInterval(setDate, 1000);

// creating a setDate() function
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();

    // each second should be changed to a degree to make the clock move
    const secDegree = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDegree}deg)`;

    // similarly for min and haour hand
    const mins = now.getMinutes();
    const minDegree = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hours = now.getHours();
    const hourDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;


}