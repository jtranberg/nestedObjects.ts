function calcPayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "unchained Melody",
    artist: "rightous brothers",
    numStreams: 51984651,
    credits: {
        producer: "phil spector",
        writer: "alex north"
    }
};
var earnings = calcPayout(mySong);
console.log(earnings);
printSong(mySong);
