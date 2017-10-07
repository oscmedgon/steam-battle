(function() {

  const token = 'A503C16ED9072A5F9C8F45C8E4E023F9'

  const urlVanityNameSearch = 'http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/'
  const urlSearchUserGameList = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/'
  const urlGameAchivements = 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/'
  const urlUserInfo = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/'
  // API NUMBER 1 (IMPORTANT INFO THIS FUNCTION SOLD BE CALLED WITTH A STRING)
  //EJECUTE THIS COMMAND IN CONSOLE TO GET A PREVIEW OF THE SERVER RESPONSE
  // STEAM_SERVICE.searchSteamID('undertakertfk').then(function(data){console.log(data)})
  function searchSteamID(vanityName) {
    return ($.ajax({
      url: urlVanityNameSearch,
      data: {
        vanityurl : vanityName,
        key : token
      }
    })
  )}
  // API NUMBER 2 (IMPORTANT INFO THIS FUNCTION SOLD BE CALLED WITTH A STRING)
  //EJECUTE THIS COMMAND IN CONSOLE TO GET A PREVIEW OF THE SERVER RESPONSE
  // STEAM_SERVICE.searchGameAchivements('218620').then(function(data){console.log(data)})
  // STEAM GAMES WITH ANY ACHIVEMENTS RETURN A EMPTY OBJECT
  function searchUserGameList(userId) {
    return ($.ajax({
      url: urlSearchUserGameList,
      data: {
        steamid : userId,
        key : token
      }
    })
    .then(function(oData){
      const gameListCount = oData.response.game_count
      const gameList = oData.response.games
      userList = []
      gameList.forEach(function(list){userList.push(list.appid)})
    })
  )}
  // API NUMBER 3 (IMPORTANT INFO THIS FUNCTION SOLD BE CALLED WITTH A STRING)
  //EJECUTE THIS COMMAND IN CONSOLE TO GET A PREVIEW OF THE SERVER RESPONSE
  // STEAM_SERVICE.searchGameAchivements('2100').then(function(data){console.log(data)})
  function searchGameAchivements(appId) {
    return ($.ajax({
      url: urlGameAchivements,
      data: {
        appid : appId,
        key : token
      }
    })
  )}
  // API 4 (IMPORTANT INFO THIS FUNCTION SOLD BE CALLED WITTH AN ARRAY)
  //EJECUTE THIS COMMAND IN CONSOLE TO GET A PREVIEW OF THE SERVER RESPONSE
  // STEAM_SERVICE.searchUserInfo(['76561198000981199','76561198119125285']).then(function(data){console.log(data)})
  function searchUserInfo(userIds) {
    var allUsersIds = userIds.join(',')
    return ($.ajax({
      url: urlUserInfo,
      data: {
        steamids : allUsersIds,
        key : token
      }
    })
  )}

  window.STEAM_SERVICE = {searchSteamID , searchUserGameList , searchGameAchivements , searchUserInfo}

})()
