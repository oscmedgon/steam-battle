/* global STEAM_SERVICE   */
// THIS FUNCTION SHOULD BE CALLED WITH AN ARRAY WITH ONE OR THREE STRINGS INSIDE
var testArray = [ '76561198000981199', '76561198017534701', '76561198000981199' ]
function generateGameList (players) {
  var iWillGetMyArray = new Promise(
    function (resolve, reject) {
      var gameList = []
      players.forEach(function (player, index) {
        STEAM_SERVICE.searchUserGameList(player)
        .then(function (oData) {
          const gameListCount = oData.response.game_count // eslint-disable-line
          gameList.push(oData.response.games)
          if (players.length === gameList.length) {
            resolve(gameList)
          }
        })
      })
    }
  )
  iWillGetMyArray.then(function (resolve) {
    var idSorted = resolve.sort(function (a, b) {
      return a.length - b.length
    })
    var filteredGameList = idSorted[0].filter(function (idEle){
      var result = idSorted[1].find(function(element){
        return element.appid === idEle.appid
      })
      return !!result
    })
    console.log(filteredGameList)
  })
}

generateGameList(testArray)
