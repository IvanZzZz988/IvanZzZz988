function traffic_light() {

var colors = document.getElementsByClassName('colors');
var colors1 = document.getElementsByClassName('colors1');
    colors[0].style.background = 'red';
    colors[1].style.background = 'gray';
    colors[2].style.background = 'gray';
    colors1[0].style.background = 'red';
    colors1[1].style.background = 'gray';
    colors1[2].style.background = 'gray';
    
function changeToYellow() {
    colors[1].style.background ='yellow';
    
}
function changeToGreen() {
    colors[0].style.background = 'gray';
    colors[1].style.background = 'gray';
    colors[2].style.background = 'green';
    colors1[0].style.background = 'red';
    colors1[1].style.background = 'gray';
    colors1[2].style.background = 'gray';
    
}
function backToRed() {
    colors[0].style.background = 'red';
    colors[1].style.background = 'gray';
    colors[2].style.background = 'gray';

}
function changeToYellowSecond() {
    colors1[1].style.background ='yellow';

}
function changeToGreenSecond() {
	colors[0].style.background = 'red';
	colors[1].style.background = 'grey';
	colors[2].style.background = 'grey';
	colors1[0].style.background = 'grey';
	colors1[1].style.background = 'grey';
	colors1[2].style.background = 'green';

}
    
    var cty = setTimeout(changeToYellow,2000);
    var ctg = setTimeout(changeToGreen,4000);
    var btr = setTimeout(backToRed,6000);
    var ctys = setTimeout(changeToYellowSecond,8000);
    var ctgs = setTimeout(changeToGreenSecond,10000);
    var z = setInterval(traffic_light,12000);

}
traffic_light();

function makeText(){
    var text = 'Traffic Light';
    var text1 = 'Go on green!';
    var text2 = 'Stop on red!';
    
    var stext = text.split('');
    var stext1 = text1.split('');
    var stext2 = text2.split('');
    var nasArray = [stext,stext1,stext2];
    return nasArray;
}

var ar = makeText();
var scroll = document.getElementById('scroll');
var loop;

var i = 0;

function start () {
    if(ar[i].length > 0){
        scroll.innerHTML += ar[i].shift();
        loop = setTimeout(start,400)
    }else{
        i++;
        if(i > 2){
            i = 0;
            ar = makeText(); ///reset
        }
        scroll.innerHTML = "";
        start();
    }
}
start();
