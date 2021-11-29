function semafor() {

var boje = document.getElementsByClassName('boje');
var boje1 = document.getElementsByClassName('boje1');
    boje[0].style.background = 'red';
    boje[1].style.background = 'gray';
    boje[2].style.background = 'gray';
    boje1[0].style.background = 'red';
    boje1[1].style.background = 'gray';
    boje1[2].style.background = 'gray';
    
function changeToYellow() {
    boje[1].style.background ='yellow';
    
}
function changeToGreen() {
    boje[0].style.background = 'gray';
    boje[1].style.background = 'gray';
    boje[2].style.background = 'green';
    boje1[0].style.background = 'red';
    boje1[1].style.background = 'gray';
    boje1[2].style.background = 'gray';
    
}
function backToRed() {
    boje[0].style.background = 'red';
    boje[1].style.background = 'gray';
    boje[2].style.background = 'gray';

}
function changeToYellowSecond() {
    boje1[1].style.background ='yellow';

}
function changeToGreenSecond() {
	boje[0].style.background = 'red';
	boje[1].style.background = 'grey';
	boje[2].style.background = 'grey';
	boje1[0].style.background = 'grey';
	boje1[1].style.background = 'grey';
	boje1[2].style.background = 'green';

}
    
    var cty = setTimeout(changeToYellow,2000);
    var ctg = setTimeout(changeToGreen,4000);
    var btr = setTimeout(backToRed,6000);
    var ctys = setTimeout(changeToYellowSecond,8000);
    var ctgs = setTimeout(changeToGreenSecond,10000);
    var z = setInterval(semafor,12000);

}
semafor();
