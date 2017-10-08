// THIS FUNCTION SHOULD BE CALLED WITH AN ARRAY WITH TWO OR THREE STRINGS INSIDE
function generateGameList(players){
  players.forEach(function(player){
    console.log(player)
    STEAM_SERVICE.searchUserGameList(player)
    .then(function(oData){
    const gameListCount = oData.response.game_count
    const gameList = oData.response.games
    gameList.forEach(function(list){userList.push(list.appid)})
    })
    console.log(userList)
    })
  }
