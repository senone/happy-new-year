/*
* @Author: senon
* @Date:   2017-01-09 19:07:02
* @Last Modified by:   senon
* @Last Modified time: 2017-01-15 23:53:27
*/

'use strict';

;( function(w,d){
	var audio = document.getElementsByTagName('audio')[0];
	var music = document.getElementById("music");
	var musicImg = music.children[0];
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");
	var lanten = document.getElementsByClassName("lanten")[0];
	console.log(page2.offsetTop);
	music.addEventListener('touchend', function(){
		if(audio.paused){
			audio.play();
			musicImg.style.animationPlayState="running";
		}
		else{
			audio.pause();
			musicImg.style.animationPlayState="paused";
		}
	},false);

	lanten.addEventListener('touchstart', function(){
		page1.style.display='none';
		page2.style.display='block';
		page3.style.display='block';
		
		setTimeout( function(){
			page3.style.position='static';
			page2.setAttribute('class', 'page show');
			page3.setAttribute('class', 'page show');

		}, 5000);
	}, false);
})(window,document)