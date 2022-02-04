# Public Domain Television for Twitch

This application plays movies from [Public Domain Movies](https://publicdomainmovie.net/)
The current version is only used to play Cartoons, but can easily be modified to play any category or list of mp4s.

It integrates with [TwitchTV](https://twitch.tv) using the [TMI JS library](https://tmijs.com/).

Built live on [Ravavyr's channel](https://twitch.tv/ravavyr)

Built with [React](https://github.com/facebook/create-react-app)
Font for the channel is [Atomic Age](https://www.1001fonts.com/atomic-age-font.html)
Static sound used is from [FreeSound](https://freesound.org/people/crcavol/sounds/154674/)

Images used were grabbed from the internet or created by Sky. If you want to claim ownership of one or dispute it, reach out to Ravavyr.



## Setup
Start by running the following:
### `npm install`
### `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.

## TV Controls
In the browser users can control the TV by:
- clicking the top dial turns it on and off
- clicking the second dial increases the channel, but only if the top dial is in the "on" state.
- No additional controls are visible for the browser. (They are in the code and can be uncommented to make them visible if you want to use it in the browser only)

## Twitch Chat Commands
Users can control the TV with the following commands:
- !tv on (turns it on to the current channel or 0 if just starting)
- !tv off (turns it off but remembers current channel)
- !tv +  (goes up one channel)
- !tv - (goes down one channel)
- !tv VOL#.# (sets volume to #.# a value between 0.0 and 1.0)
- !tv CH## (sets channel to ## a value between 0 and the max channel, based on the data loaded into it. The initial example has 10 movies, so 10 channels)
- !tv pause (paused current movie)
- !tv play (continues playing current movie)


## Special Thanks
The community on [Twitch](https://twitch.tv/ravavyr) and [our discord](https://discord.gg/T2jdu6sxua)

