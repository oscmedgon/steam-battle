function getSteamId(vanitiUrls){
  vanitiUrls.forEach(function(vanitiUrl){
    var testedPlayer = vanitiUrl.player -1;
    STEAM_SERVICE.searchSteamID(vanitiUrl.data)
      .then(function(oData){
        console.log(oData);
        if (oData.response.success === 1 ){
          players[testedPlayer].data = oData.response.steamid;
          players[testedPlayer].dataType = 'steamId';
          players[testedPlayer].error = false;
          console.log(`Player ${testedPlayer+1} updated succesfuly with his steamId`);
        } else{
          players[testedPlayer].error = true;
          console.log(`Unable to find ${players[testedPlayer].data} search of player ${testedPlayer+1} returned an error`);
        }
      });
  });
}
