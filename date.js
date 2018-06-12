function Today()
{
var today = new Date();
var day = today.getDate();
var dayofweek = today.getDay();
var m = today.getMonth();
var month = new Array();
	month[0] = "Jan.";
	month[1] = "Febr.";
	month[2] = "Márc.";
	month[3] = "Ápr.";
	month[4] = "Máj.";
	month[5] = "Jun.";
	month[6] = "Jul.";
	month[7] = "Aug.";
	month[8] = "Szept.";
	month[9] = "Okt.";
	month[10] = "Nov.";
	month[11] = "Dec.";
var dow = new Array();
	dow[1] = "Hétfő";
	dow[2] = "Kedd";
	dow[3] = "Szerda";
	dow[4] = "Csütörtök";
	dow[5] = "Péntek";
	dow[6] = "Szombat";
	dow[0] = "Vasárnap";
var string = month[m] +"  " +day +". " +dow[dayofweek];
document.getElementById('date').innerHTML = string;
setTimeout('Today()', 1000); 
}
Today();54