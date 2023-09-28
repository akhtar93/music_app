var tracks = [
  "https://res.cloudinary.com/cbanlawi/video/upload/v1614140796/HarryStyles-WatermelonSugar_f5471p.mp3",
  "https://res.cloudinary.com/cbanlawi/video/upload/v1614144520/Justin_Bieber-Yummy_vercib.mp3",

  "https://res.cloudinary.com/cbanlawi/video/upload/v1614186705/Loud_Luxury_ft._Brando_-_Body_fm7cdr.mp3"
];
var thumbnails = [
  "https://i.ibb.co/7RhfRBZ/Fine-Line-Harry-Styles.jpg",
  "https://i.ibb.co/dkDC9CP/Justin-Bieber-Song-Cover-Art.jpg",
  "https://i.ibb.co/371t9Md/Loud-Luxury-Song-Cover-Art.jpg"
];
var trackArtists = ["Harry Styles", "Justin Bieber", "Loud Luxury ft. Brando"];
var trackTitles = ["Watermelon Sugar", "Yummy", "Body"];

/* 

var obj = {
  1: {
    track: "https://res.cloudinary.com/cbanlawi/video/upload/v1614140796/HarryStyles-WatermelonSugar_f5471p.mp3",
    thumbnails: "https://i.ibb.co/7RhfRBZ/Fine-Line-Harry-Styles.jpg",
    trackArtist: "Harry Styles",
    trackTitle: "Watermelon Sugar"
  },
  2: {...}
  3: {...}
}

*/

function formatData() {
  const result = {};
  tracks.forEach((track, index) => {
    if (!result[index]) {
      result[index] = {};
    }
    result[index] = {
      track: track,
      thumbnail: thumbnails[index],
      trackArtist: trackArtists[index],
      trackTitle: trackTitles[index]
    };
  });
  return result;
}
var formattedData = formatData();

function getDatabyId(id) {
  return formattedData[id];
}