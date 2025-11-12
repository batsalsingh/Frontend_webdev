(function(){
  let baseCost = 2500;
  let diningIn = true;

  let gst = baseCost * 0.05;
  let serviceTax = diningIn ? baseCost * 0.10 : 0;

  let subTotal = baseCost + gst + serviceTax;
  let tip = subTotal > 2000 ? subTotal * 0.08 : 0;

  let finalTotal = subTotal + tip;

  console.log("Base Amount: ₹" + baseCost);
  console.log("GST (5%): ₹" + gst.toFixed(2));
  console.log("Service Tax: ₹" + serviceTax.toFixed(2));
  console.log("Tip: ₹" + tip.toFixed(2));
  console.log("Final Total: ₹" + finalTotal.toFixed(2));
})();