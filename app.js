const body = document.querySelector('body'),
hourHand = document.querySelector('.hour'),
minuteHand = document.querySelector('.minute'),
secondHand = document.querySelector('.second'),
modeSwitch = document.querySelector('.mode-switch');

const savedMode = localStorage.getItem('mode');

if (savedMode === 'DarkMode') {
    body.classList.add('dark');
    modeSwitch.textContent = 'Light Mode';
} else {
    body.classList.remove('dark');
    modeSwitch.textContent = 'Dark Mode';
}

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');

    const isDarkMode = body.classList.contains('dark');

    modeSwitch.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('mode', isDarkMode ? 'DarkMode' : 'LightMode');
});

const updateTime = () => {
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;

    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

setInterval(updateTime, 1000);
updateTime();