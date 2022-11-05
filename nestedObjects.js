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
var myPoint = { x: 1, y: 3, z: 9 };
var user = {
    id: 1255,
    username: "catgirl"
};
console.log(user.id);
//user.id = 65165         read only throw error
