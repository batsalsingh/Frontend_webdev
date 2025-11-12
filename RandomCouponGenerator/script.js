(function(){
  let num = Math.floor(Math.random() * 100) + 1;
  let message = "";

  if (num <= 30) message = "You won a 10% discount";
  else if (num <= 60) message = "You won a 20% discount";
  else if (num <= 90) message = "You won a 30% discount";
  else message = "You won a 50% Mega Offer!";

  let isPrime = true;
  if (num < 2) isPrime = false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  console.log("Coupon Number:", num);
  console.log(message);
  if (isPrime) console.log("Prime number bonus applied");
})();