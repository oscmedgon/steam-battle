// THIS FUNCTION SHOULD BE CALLED WITH AN ARRAY WITH TWO OR THREE STRINGS INSIDE
function generateGameList(players){
  players.forEach(function(player){
    console.log(player)
    STEAM_SERVICE.searchUserGameList(player)
      console.log(userList)
      })
  }
