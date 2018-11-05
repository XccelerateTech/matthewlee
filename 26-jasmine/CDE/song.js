function Song(name, author, album) {
    this.name = name;
    this.author = author;
    this.album = album;
}

Song.prototype.persistFavoriteStatus = function(value) {
  // something complicated
  throw new Error("not yet implemented");
};

Song.prototype.getDescription = function(){
    return `The name of this song is ${this.name} and it is from the album ${this.album}. It is written by ${this.author}`
}

Song.prototype.isInSameAlbum = function(otherSong){
    if (this.album == otherSong.album){
        return true
    } else {
        return false
    }
}

module.exports = Song;

