var today = new Date();
var dateShown = today;
var initialDay = new Date("2018-12-17");
var finalDay = new Date("2019-03-28");
var lButton = document.getElementById("lButton");
var rButton = document.getElementById("rButton");

var users = ["Alvaro M", "Alvaro W", "Eliana", "Andrés", "Lenin", "Jin", "Vecino de Jin"];
var turns = [0,5,6,2,1,3,0,
			 4,5,6,2,1,3,0,
			 4,5,6,3,2,1,0,
			 4,5,6,4,2,1,0,
			 4,5,6,2,1,3,0,
			 4,5,6,2,1,3,0,
			 4,5,6,2,1,3,0,
			 4,5,6,2,1,3,0,
			 4,5,6,2,1,3,0,
			 4,5,6,2,1,3,0,
			 4,5,6,2,1,3,0,
			 4,5,6,2,1,3,0,
			 4,5,6,2,1,3,0,
			 4,5,6,2,1,3,0,
			 4,5,6];

function daysRemaining(myDate) {
	var t = Date.parse(finalDay) - Date.parse(myDate);
	var days = 0;
	if(t>0)
		days = Math.floor( t/(1000*60*60*24) );
	console.log("Final date:" + formatDate(finalDay));
	console.log("Date:" + formatDate(myDate));
	console.log("Days: "+ days);
	return days;
}

function formatDate(date) {
    var strMonth=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var strDay=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var wd = strDay[date.getDay()];
    var d = date.getDate();
    var m = strMonth[date.getMonth()];
    var y = date.getFullYear();
    return wd + ' '+ (d <= 9 ? '0' + d : d) + ' ' + m + ' ' + y;
}

function refreshData()
{
	var remain=daysRemaining(dateShown);
	//document.getElementById("cell_date").innerText=formatDate(dateShown);
	document.getElementById("cell_days").innerText=remain;
	document.getElementById("dateButton").innerText=formatDate(dateShown);
	document.getElementById("cell_name").innerText=users[turns[100-remain]];
	console.log("remain: " + remain + ", turn: " + turns[100-remain] + ", Name: " + users[turns[100-remain]])
	checkDate(dateShown);
}

function incrementDate()
{
	dateShown.setDate(dateShown.getDate() + 1);
	refreshData();
	//console.log(formatDate(dateShown));
}

function decrementDate()
{
	dateShown.setDate(dateShown.getDate() - 1);
	refreshData();
	//console.log(formatDate(dateShown));
}

function checkDate(date)
{
	var remain=daysRemaining(dateShown);
	if(remain>0)
		rButton.disabled = false;
	else
		rButton.disabled = true;
	if(remain<100)
		lButton.disabled = false;
	else
		lButton.disabled = true;
}
//console.log(formatDate(today));
//console.log(daysRemaining(today));

refreshData();

lButton.addEventListener("click", decrementDate);
rButton.addEventListener("click", incrementDate);

$("body").css("font-size",Math.max($(window).width()/50,8)+"px")

