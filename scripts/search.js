  $('#user-input').on('submit', function(event){
  event.preventDefault()
  var players = [$('#player1').val()]
  if($('#player2').val()){
    players.push($('#player2').val())
  }
  if($('#player3').val()){
    players.push($('#player3').val())
  }

  console.log( `${players} ${players.length}`)
  return players
})
