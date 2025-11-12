(function(){
  let showType = "evening";
  let age = 65;
  let isStudent = false;
  let tickets = 4;

  let pricePerTicket = showType === "morning" ? 120 : 180;
  let basePrice = pricePerTicket * tickets;

  let discount = 0;
  if(isStudent) discount = 10;
  if(age > 60) discount = 20;

  let discountedTotal = basePrice - (basePrice * discount / 100);

  let finalAmount = discountedTotal;
  if(tickets > 3) finalAmount += 50;

  console.log("Base price: ₹" + basePrice);
  console.log("Discounted total: ₹" + discountedTotal);
  console.log("Final amount: ₹" + finalAmount);
})();