(function() {

  const token = 'A503C16ED9072A5F9C8F45C8E4E023F9'
  userList = []
  const urlVanityNameSearch = 'https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/'
  const urlSearchUserGameList = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/'
  const urlGameAchivements = 'https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/'
  const urlUserInfo = 'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/'
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
  // API NUMBER 2 (IMPORTANT INFO THIS FUNCTION SHOULD BE CALLED WITTH A STRING)
  // EXECUTE THIS COMMAND IN CONSOLE TO GET A PREVIEW OF THE SERVER RESPONSE
  // STEAM_SERVICE.searchUserGameList('76561198000981199')
  // console.log(userList)
  // STEAM GAMES WITH ANY ACHIVEMENTS RETURN A EMPTY OBJECT
  function searchUserGameList(userId) {
    return ($.ajax({
      url: urlSearchUserGameList,
      data: {
        steamid : userId,
        key : token
      }
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
