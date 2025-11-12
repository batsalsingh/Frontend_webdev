(function(){
  let delayedBooks = [4, 7, 12, 3];

  let totalFine = 0;

  for (let days of delayedBooks) {
    if (days >= 1 && days <= 5) {
      totalFine += days * 10;
    } else if (days >= 6 && days <= 10) {
      totalFine += days * 20;
    } else if (days > 10) {
      totalFine += days * 50;
    }
  }

  let extraPenalty = delayedBooks.length > 3 ? 200 : 0;
  totalFine += extraPenalty;

  console.log("Delayed Books Count:", delayedBooks.length);
  console.log("Fine before penalty: ₹" + (totalFine - extraPenalty));
  console.log("Extra penalty: ₹" + extraPenalty);
  console.log("Total fine to pay: ₹" + totalFine);
})();