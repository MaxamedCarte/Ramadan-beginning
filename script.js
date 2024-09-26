
const day = document.getElementById('day')
const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

const Ramadan = '1 mar 2025'

const countDown = ()=>{
  const RamadanDate = new Date(Ramadan)
  const currentDate = new Date();

  const totalSeconds  =   (RamadanDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24) 

  const hours = Math.floor(totalSeconds / 3600) % 24
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60;


  day.innerHTML = days;
  hour.innerHTML = formatTime(hours);
  minute.innerHTML = formatTime( minutes);
  second.innerHTML = formatTime(seconds);

  // console.log(days, hours, minutes, seconds)

 
}


const formatTime = (time)=>{
  return time < 10 ? `0${time}` : time;
}
// initia;
countDown()
setInterval(countDown, 1000)

