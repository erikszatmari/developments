function Today()
{
var today = new Date();
var day = today.getDate();
var dayofweek = today.getDay();
var m = today.getMonth();
var month = new Array();
	month[0] = "Jan.";
	month[1] = "Feb.";
	month[2] = "Mar.";
	month[3] = "Apr.";
	month[4] = "Maj.";
	month[5] = "Jun.";
	month[6] = "Jul.";
	month[7] = "Aug.";
	month[8] = "Sep.";
	month[9] = "Oct.";
	month[10] = "Nov.";
	month[11] = "Dec.";
var dow = new Array();
	dow[1] = "Monday";
	dow[2] = "Tuesday";
	dow[3] = "Wednesday";
	dow[4] = "Thursday";
	dow[5] = "Friday";
	dow[6] = "Saturday";
	dow[0] = "Sunday";
var string = month[m] +"  " +day +". " +dow[dayofweek];
document.getElementById('date').innerHTML = string;
setTimeout('Today()', 1000); 
}
Today();
