let hr=doucument.getElementById('hour');
let minute=doucument.getElementById('min');
let second=doucument.getElementById('sec');
function displayTime()
{
  let date=new Date();
  let hh=date.getHours();
  let mm=date.getMinutes();
  let ss=date.getSeconds();

  let hRotation=30*hh+mm/2;
  let mRotation=6*mm;
  let sRotation=6*ss;
  
  hr.style.transform=`rotate(${hRotation}deg)`;
  minute.style.transform=`ratate(${mRotation}deg)`;
  second.style.transform=`ratate(${sRotation}deg)`;
}
setInterval(displayTime,1000);