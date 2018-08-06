function Time()
{
var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
if (hour <= 9) hour = "0" + hour;
if (min <= 9) min = "0" + min;
if (sec <= 9) sec = "0" + sec;
var string = hour+":"+min+":"+sec;
document.getElementById('clock').innerHTML = string;
setTimeout('Ido()', 1000); 
}
Time();

