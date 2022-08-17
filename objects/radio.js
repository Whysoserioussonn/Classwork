const radio = 
{
    stations:
     [
  
      {
        name: 'KTU',
        songs: [
          {
            title: "As It Was",
            artist: "Harry Styles"
          },
          {
            title: "Heatwaves",
            artist: "Glass Animals"
          },
          {
            title: "Rhythm is a Dancer",
            artist: "Snap!"
          }
        ]
      },
  
      {
        name: 'Z100',
        songs: [
          {
            title: "Stay",
            artist: "Harry Styles"
          },
          {
            title: "Whatever You Like",
            artist: "T.I."
          },
          {
            title: "Ghost",
            artist: "Justin Bieber"
          }
        ]
      }
  
    ],
  
    changeStation()
     {
      currentStation = radio.stations[Math.floor(Math.random() * 2)]
      currentSong = currentStation.songs[Math.floor(Math.random() * 3)]
      return currentStation.name + ': Now Playing: ' + currentSong.title + ' by ' + currentSong.artist
    }
  
  }
  
   
  console.log(radio.changeStation())