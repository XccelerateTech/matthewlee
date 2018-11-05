let helper = beforeEach(function () {
    jasmine.addMatchers({
      toBeInTheSameAlbumAs: function () {
        return {
          compare: function (present, other) {
            var song = present;
            var otherSong = other;
            return {
              pass: song.album === otherSong.album
            }
          }
        };
      }
    });
  });


module.exports = helper;