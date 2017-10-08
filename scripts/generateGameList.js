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
          console.log('He iterado una vez!!')
          const gameListCount = oData.response.game_count // eslint-disable-line 
          gameList.push(oData.response.games)
          console.log(gameList[index])
          console.log(index)
          console.log(players.length + ' ' + gameList.length)
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
    var filteredGameList = idSorted[0].filter(function (idEle) {
      let newId = idEle
      if (idSorted.length === 2) {
        if (idSorted[1].find(function (id) { return id = newId }) === true) {
          return 
        }
      }
    })
    console.log(`This is the gameList : ${filteredGameList}`)
    console.log(idSorted[0])
  })
}

generateGameList(testArray)
