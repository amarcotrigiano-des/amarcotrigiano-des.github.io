var today = new Date();
var dateShown = today;
var initialDay = new Date("2018-12-17");
var finalDay = new Date("2019-03-28");
var lButton = document.getElementById("lButton");
var rButton = document.getElementById("rButton");

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

function removeAllChilds()
{
	var myNode = document.getElementById("next_dates");
	while (myNode.firstChild)
	{
    	myNode.removeChild(myNode.firstChild);
	}
}

function appendDate(date)
{
	var node = document.createElement("LI");
	var textnode = document.createTextNode(date);
	node.appendChild(textnode);
	document.getElementById("next_dates").appendChild(node);
}

function nextDates(arrayPosition)
{
	var currentUser = data[arrayPosition].User;
	var i;
	var noDates = true;
	removeAllChilds();
	for (i = arrayPosition+1; i<100; i++)
	{
		if(data[i].User === currentUser)
		{
			appendDate(formatDate(new Date(data[i].Date)));
			noDates = false;
		}
	}
	if(noDates)
		appendDate("NO MORE DATES");
}

function refreshData()
{
	var remain=daysRemaining(dateShown);
	//document.getElementById("cell_date").innerText=formatDate(dateShown);
	document.getElementById("cell_days").innerText=remain;
	document.getElementById("dateButton").innerText=formatDate(dateShown);
	document.getElementById("cell_name").innerText=users[data[100-remain].User];
	nextDates(100-remain);
	console.log("remain: " + remain + ", turn: " + data[100-remain].User + ", Name: " + users[data[100-remain].User])
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

