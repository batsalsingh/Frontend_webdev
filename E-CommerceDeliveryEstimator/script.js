(function(){
  let orderAmount = 450;
  let isPremium = false;
  let isRemote = true;

  let deliveryFee = 0;
  if(orderAmount < 500 && !isPremium){
    deliveryFee = 50;
  }

  let totalCost = orderAmount + deliveryFee;
  let deliveryDays = 3;
  if(isRemote){
    deliveryDays += 2;
  }

  console.log("Total Cost: ₹" + totalCost);
  console.log("Estimated Delivery Time: " + deliveryDays + " days");
})();