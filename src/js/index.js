"use strict";

import { getLyrics } from "./songAPI.js";


function searchForSong() {
    let artist;
    let song;

    let outputDiv = document.getElementById("outputDiv");

    if (artist = document.getElementById("searchInputArtist").value) {
        if (song = document.getElementById("searchInputSong").value) {
            getLyrics(artist, song);
        }
        else{
            outputDiv.innerHTML="Please enter a song";
        }
    }
    else if(song = document.getElementById("searchInputSong").value){
        getLyrics("a", song);
    }
    
}

window.searchForSong = searchForSong;