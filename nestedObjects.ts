type Song = {
    title:string;
    artist: string;
    numStreams: number; 
     credits: {producer:string, writer: string}
    };


function calcPayout (song: Song ): number{
  return song.numStreams * 0.0033
}

function printSong(song: Song): void{
   console.log(`${song.title} - ${song.artist}`)
}


const mySong: Song = {
    title: "unchained Melody",
    artist: "rightous brothers",
    numStreams: 51984651,
    credits: {
        producer: "phil spector",
        writer: "alex north"
    }
}
const earnings = calcPayout(mySong);
console.log(earnings);
printSong(mySong);