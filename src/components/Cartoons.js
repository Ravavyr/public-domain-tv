import React from 'react'

import blueTV from '../images/tv-parts/blue-retro-tv.png'
import knob from '../images/tv-parts/knob.png'
//import leftbtn from '../images/tv-parts/left_blue_arrow.png'
//import rightbtn from '../images/tv-parts/right_blue_arrow.png'
//import pausebtn from '../images/tv-parts/pause_button.png'
//import playbtn from '../images/tv-parts/play_button.png'

import cartoonsData from '../cartoon_data.js'
import VideoPlayer from './VideoPlayer'

export default function Cartoons() {

    const data = cartoonsData.data.cartoons;


    /*To shuffle movies*/
    // function shuffleArray(array) {
    //     for (var i = array.length - 1; i > 0; i--) {
    //         var j = Math.floor(Math.random() * (i + 1));
    //         var temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    // }

    // React.useEffect(() => {
    //     shuffleArray(data);
    // },[]);

    /*Set First Movie*/
    const [currentmovie, setMovie] = React.useState({
        'channel':0,
        'url':data[0].url,
        'rotate':'rotate(0deg)'
    })

    /*Pass initial movie state to player*/
    const [videostate,setAll] = React.useState({
        'action':'',
        'playstate':true,
        'playpause':false,
        'currentmovie':currentmovie.url,
        'volume':0.5
    });

    //let isPaused=false;

    /*Set initial pause button render*/
    //let [playpausebtn,setPlayPauseBtn] = React.useState(pausebtn);

    //console.log(currentmovie);

    /*go to previous movie*/
    function decreaseChannel() {
        if(videostate.playstate){
            let newchannel = (currentmovie.channel-1>0?currentmovie.channel-1:0);
            setMovie({'channel':newchannel,'url':data[newchannel].url,'rotate':'rotate('+(newchannel*18)+'deg)'});
            setAll({...videostate,'action':'movie','currentmovie':data[newchannel].url});
        }
    }

    /*go to next movie*/
    function increaseChannel(){
        if(videostate.playstate){
            let newchannel = (currentmovie.channel+1===data.length?0:currentmovie.channel+1);
            setMovie({'channel':newchannel,'url':data[newchannel].url,'rotate':'rotate('+(newchannel*18)+'deg)'});
            setAll({...videostate,'action':'movie','currentmovie':data[newchannel].url});
        }
    }

    /*go to specific channel*/
    function setChannel(){
        let newchannel = document.querySelector(".channel-btn").getAttribute("data-channel");
        setMovie({'channel':newchannel,'url':data[newchannel].url,'rotate':'rotate('+(newchannel*18)+'deg)'});
        setAll({...videostate,'action':'movie','currentmovie':data[newchannel].url});
    }

    /*set specific volume*/
    function setVolume(){
        let newvolume = document.querySelector(".volume-btn").getAttribute("data-volume");
        setAll({...videostate,'action':'volume','volume':newvolume});
    }

    /*Turn tv on/off*/
    function setPower(playstate){
        setAll({...videostate,'action':'power','playstate':!playstate});
    }

    /*Play/Pause button*/
    function setPlayPause(playpause){
        setAll({...videostate,'action':'pause','playpause':!playpause});
        //setPlayPauseBtn(!playpause?pausebtn:playbtn);
        //isPaused=!playpause?false:true;
    }

    return(
        <div className="tv-box">
            <VideoPlayer state={videostate} />

            <img src={blueTV} className="cartoon-tv" alt="blue cartoon tv"/>

            <button className={`on-off-btn ${(videostate.playstate?'on':'')}`} onClick={() => setPower(videostate.playstate)}>
                <img src={knob} className={`on-off-knob`} alt="blue knob"/>
            </button>
            <button className="channel-knob-btn" style={{transform : currentmovie.rotate }} onClick={increaseChannel}>
                <img src={knob} className="channel-knob" alt="blue knob"/>
            </button>

            <div className="channel">
                Ch:{currentmovie.channel}
            </div>
            {/*
            <div className={`controls ${(videostate.playstate?'':'off')}`}>
                <button className="left-arr-btn" onClick={decreaseChannel}>
                    <img src={leftbtn} className="left-arr-knob" alt="left arrow knob"/>
                </button>
                <button className={`play-pause-btn ${isPaused}`} onClick={() => setPlayPause(videostate.playpause)}>
                    <img src={playpausebtn} className="play-pause-knob" alt="play pause knob"/>
                </button>
                <button className="right-arr-btn" onClick={increaseChannel}>
                    <img src={rightbtn} className="right-arr-knob" alt="right arrow knob"/>
                </button>
            </div>
             */}
            <div className="controls hidden">
                <button className="left-arr-btn" onClick={decreaseChannel}></button>
                <button className="play-pause-btn" onClick={() => setPlayPause(videostate.playpause)}></button>
                <button className="right-arr-btn" onClick={increaseChannel}></button>
                <button className="channel-btn" data-channel={currentmovie.channel} onClick={setChannel}></button>
                <button className="volume-btn" data-volume={currentmovie.volume} onClick={setVolume}></button>
            </div>
        </div>
    )
}

