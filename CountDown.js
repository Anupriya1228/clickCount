// Need to learn how external JS apply for this


var box = document.getElementById('counter');
var clickBox = document.getElementById('box-Count');
var count = 0;
box.addEventListener('click' , function(){
	count++;
	clickBox.innerHTML = count +" ";
});
