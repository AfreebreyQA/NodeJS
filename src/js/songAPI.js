const url = "https://api.lyrics.ovh/v1";


async function getRawLyrics(artist, song) {
    const responce = await fetch(`${url}/${artist}/${song}`)
    const data = await responce.json();
    return data;
}



export function getLyrics(artist, song) {
    let lyricsPromise = Promise.resolve(getRawLyrics(artist, song));
    let lyricsString;
    lyricsPromise.then((jsonObject) => {
        lyricsString = jsonObject.lyrics;
        lyricsString = lyricsString.replace(/\n/g,"<br>");
        document.getElementById("outputDiv").innerHTML = lyricsString;
    })
}