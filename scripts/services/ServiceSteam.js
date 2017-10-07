(function() {

  const token = 'A463AB6CD2DB0B7A0CB98FD7270A3D43'

  const vanityNameSearch = 'http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/'
  const urlGetAlbums = 'https://api.spotify.com/v1/artists/<%ID_ARTIST%>/albums'
  const urlGetTracks = 'https://api.spotify.com/v1/albums/<%ID_ALBUM%>/tracks'
  function searchSteamID(vanityName) {
    var urlVanity = urlGetAlbums.replace('<%VANITI_NAME%>', vanityName).replace('<%TOKEN%>' , token)

    return ($.ajax({
      url: vanityNameSearch,
      data: {
        vanityurl : vanityName,
        key : token
      }
    })
  )}
  window.STEAM_SERVICE = {searchSteamID}

})()
