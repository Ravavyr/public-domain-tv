import React from 'react'
import glass from '../images/tv-parts/glass.png'
import statx from '../images/tv-parts/static.jpg'
import staticaudio from '../images/tv-parts/low-static.mp3'

export default function VideoPlayer(props) {
	//console.log(props);

	//React.useEffect(() => {
		const video = document.querySelector(".cartoon-video");
		const audio = document.querySelector(".static-audio");
		let ambusy=false;
		if(props.state.action==='power'){
			if(props.state.playstate){
				(async function (){
					video.src = await props.state.currentmovie;
					await video.load();
					video.play();
				}());
			}else{
				video.style.backgroundImage=`url(${glass})`;
				(async function (){
					video.src= await '';
					video.pause();
					video.currentTime = 0;
				})();
			}
		}
		if(props.state.action==='pause'){
			if(props.state.playpause){
				video.play();
			}else{
				video.pause();
			}
		}
		if(props.state.action==='movie'){

			if(!ambusy){
				ambusy=true;
				video.style.backgroundImage=`url(${statx})`;
				audio.play();
				setTimeout(function(){audio.pause(); audio.currentTime = 0;},500);
				(async function () {
					if(video.currentTime>0){
						await video.pause();
					}
					video.src = await props.state.currentmovie;
					video.currentTime = await 0;
					video.play();

				}());
				ambusy=false;
			}
		}

		if(props.state.action==='volume'){
			video.volume = props.state.volume;
		}

		if(video){
			video.onended = function() {
				document.querySelector('.right-arr-btn').click();
			};
		}
	//});

	return(
		<div>
			<video className="cartoon-video" autoPlay loop="" muted="">
                <source type="video/mp4" src={props.state.currentmovie} />
            </video>
			<audio className="static-audio">
				<source src={staticaudio} type="audio/mp3" />
			</audio>
		</div>
	);
}