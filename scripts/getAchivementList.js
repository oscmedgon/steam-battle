// THIS CUNCTION SHOULD BE CALLED WITH TWO ARGUMENTS , FIRST A STRING WITH GAMEID AND SECOND AN ARRAY WITH ALL USERSID
// CALL EXAMPLE getAchivements('274190' , ['76561198000981199'])
// IT'S IMPORTANT TO CALL THE ID LIST IN THE CORRECT ORDER , BECAUSE THISH FUNCTION MODIFY GLOBAL PLAYERS WITH THE ACHIVEMENT INFO
function getAchivements(appid , usersIds){
  usersIds.forEach(function(player , i){
    players[i].achivements = 0;
    STEAM_SERVICE.searchGameAchivements(appid , player)
    .then(function(data){
      var route = data.playerstats.achievements;
      var counter = 0;
      route.forEach(function(achivement){
        console.log(achivement);
        if (achivement.achieved) {
          counter++;
        }
      });
      players[i].achivements = counter;
    });
  });
}
