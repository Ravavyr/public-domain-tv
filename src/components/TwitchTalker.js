import React from "react"

export default function TwitchTalker() {

	React.useEffect(() => {
		const tmi = require("tmi.js");
		const client = new tmi.Client({
			channels: [ 'ravavyr' ]
		});

		client.connect();

		client.on('message', (channel, tags, message, self) => {
			if(message==='!tv on'){
				if(document.querySelector('.on-off-btn:not(.on)')){
					document.querySelector('.on-off-btn:not(.on)').click();
				}
			}
			if(message==='!tv off'){
				if(document.querySelector('.on-off-btn.on')){
					document.querySelector('.on-off-btn.on').click();
				}
			}
			if(message==='!tv +'){
				if(document.querySelector('.right-arr-btn')){
					document.querySelector('.right-arr-btn').click();
				}
			}
			if(message==='!tv -'){
				if(document.querySelector('.left-arr-btn')){
					document.querySelector('.left-arr-btn').click();
				}
			}
			if(message==='!tv pause' || message==='!tv play'){
				if(document.querySelector('.play-pause-btn')){
					document.querySelector('.play-pause-btn').click();
				}
			}

			if(message.indexOf("CH")>-1){
				let d = message.split(" ");
				if(parseInt(d[1].replace("CH",""))>0){
					if(document.querySelector('.channel-btn')){
						document.querySelector('.channel-btn').setAttribute("data-channel",parseInt(d[1].replace("CH","")));
						document.querySelector('.channel-btn').click();
					}
				}
			}
			if(message.indexOf("VOL")>-1){
				let d = message.split(" ");
				if(parseFloat(d[1].replace("VOL",""))>0.0 && parseFloat(d[1].replace("VOL",""))<1.0){
					if(document.querySelector('.volume-btn')){
						document.querySelector('.volume-btn').setAttribute("data-volume",parseFloat(d[1].replace("VOL","")));
						document.querySelector('.volume-btn').click();
					}
				}
			}
			//document.querySelector(".twitchy").innerTEXT=message;

		});
	},[]);

	return(
		<div className="twitchy"></div>
	)
}