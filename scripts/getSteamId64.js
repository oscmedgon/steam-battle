function getSteamId(vanitiUrls){
  vanitiUrls.forEach(function(vanitiUrl){
    var testedPlayer = vanitiUrl.player
    STEAM_SERVICE.searchSteamID(vanitiUrl.data)
      .then(function(data){
        console.log(data)
        console.log(testedPlayer)
        if (data.response.success === 1 ){
          console.log('search succesful')
        } else{
          console.log('ther are no result with your search')
        }
      })
  })
}
