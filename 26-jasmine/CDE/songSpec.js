var Player = require('./player.js');
var Song = require('./song.js');
var helper = require("./helpers/SpecHelper.js")
var player;
var song;

beforeEach(function () {
    player = new Player();
    song = new Song("a", "b", "c");
    otherSong = new Song ("a", "b", "c")
});

afterEach(function(){
    song = new Song("", "", "");
    otherSong = new Song ("", "", "")
})

describe("songConstructor", () => {
    it("song name", () => {
        expect(song.name).toEqual("a");
    });
    it("song author", () => {
        expect(song.author).toEqual("b");
    });
    it("song album", () => {
        expect(song.album).toEqual("c");
    });
    it("the long sentence", ()=>{
        expect(song.getDescription()).toEqual("The name of this song is a and it is from the album c. It is written by b")
    })
    it("otherSongAlbum", ()=>{
        expect(song.isInSameAlbum(otherSong)).toBeTruthy();
    })
    it("tryUseHelper", ()=>{
        expect(otherSong.album).toBeInTheSameAlbumAs(song.album);
    })
    it("H", ()=>{
        //toBe is === strict comparison
        expect(otherSong).not.toBe(song);
        //toEqual, compare values
        expect(otherSong).toEqual(song);
    })
});