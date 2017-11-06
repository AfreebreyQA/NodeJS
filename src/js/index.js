"use strict";

import {getLyrics} from "./songAPI.js";


function searchForSong()
{
    const artist = document.getElementById("searchInputArtist").value;
    const song = document.getElementById("searchInputSong").value;

    let ouputDiv = document.getElementById("searchOuputDiv");


    getLyrics(artist,song);
}

window.searchForSong = searchForSong;