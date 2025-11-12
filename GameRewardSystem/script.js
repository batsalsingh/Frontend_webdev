(function(){
  let level = 12;
  let performanceScore = 30;
  let missionsCompleted = true;

  let coins = (level * 50) + (performanceScore * 10);

  if(missionsCompleted){
    coins *= 2;
  }

  let rank = coins > 1000 ? "Elite" : "Regular";

  console.log("Level:", level);
  console.log("Performance Score:", performanceScore);
  console.log("Missions Completed:", missionsCompleted);
  console.log("Total Coins Earned:", coins);
  console.log("Player Rank:", rank);
})();