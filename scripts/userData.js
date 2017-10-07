  $('#user-input').on('submit', function(event){
  window.players = []
  var counter = 0
  event.preventDefault()
  checkUserData($('#player1').val())
  if($('#player2').val()){
    checkUserData($('#player2').val())
  }
  if($('#player3').val()){
    checkUserData($('#player3').val())
  }
  function checkUserData(userInput){
    if (userInput.match(/(\b\d{17}\b)/)) {
      counter++
      players.push({player : counter , dataType : 'steamId' , data : userInput})
    } else{
      counter++
      players.push({player : counter , dataType : 'vanityUrl' , data : userInput})
    }
  }
  var needId = players.filter(function(player){
    return player.dataType === 'vanityUrl'
  })
  getSteamId(needId)
})
