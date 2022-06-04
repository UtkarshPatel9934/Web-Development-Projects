const newYearsDate = "1 Jan 2023";


const grabElement_days = document.getElementById('days');
const grabElement_hours = document.getElementById('hours');
const grabElement_mins = document.getElementById('mins');
const grabElement_seconds = document.getElementById('seconds');

function countdownFunction() { 
	
	const newYear = new Date(newYearsDate);
	// will provide the current date
	const currentDate = new Date();



	// total seconds difference...
	const totalSeconds = (newYear - currentDate) / 1000;
	
	
	// const getRemDays = Math.ceil(totalSeconds * 1.1574074 *  Math.pow(10, -5));
	// will get the total Days remaining!
	const getRemDays = Math.floor(totalSeconds / 3600 / 24);
	
	// will get the total Hours remaining!
	const getRemHours = (Math.floor(totalSeconds / 3600) % 24);
	
	// will get the total Mins remaining!
	const getRemMins = Math.floor(totalSeconds / 60) % 60;
	
	// will get the total seconds remaining!
	const getRemSeconds = Math.floor(totalSeconds % 60);
	
	grabElement_days.innerHTML = getRemDays;
	grabElement_hours.innerHTML = getRemHours;
	grabElement_mins.innerHTML = getRemMins;
	grabElement_seconds.innerHTML = addZeroCondtfor_SEC(getRemSeconds);

	// console.log(getRemDays, getRemHours, getRemMins, getRemSeconds);
	
}

function addZeroCondtfor_SEC(getSec)
{
	return (getSec <= 9) ? `0${getSec}` : getSec;
}
 // this will call the countdownFunction every second
 setInterval(countdownFunction, 1000);