// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock();
function displayClock() {
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var d = new Date();
	var mm = monthNames[d.getMonth()];
	var dd = d.getDate();
	var min = (mins = ('0' + d.getMinutes()).slice(-2));
	var hh = d.getHours();
	var ampm = '';
	var sep = " : ";

	if (CONFIG.twelveHourFormat) {
		ampm = hh >= 12 ? ' p.m.' : ' a.m.';
		hh = hh % 12;
		hh = hh ? hh : 12;
		sep = d.getSeconds() % 2 === 0 ? ":" : "&#32;";
	}

	document.getElementById('hour').innerText = hh;
	document.getElementById('separator').innerHTML = sep;
	document.getElementById('minutes').innerText = min + ampm;

	document.getElementById('month').innerText = mm;
	document.getElementById('day').innerText = dd;

	setTimeout(displayClock, 1000);
}
