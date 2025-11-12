(function(){
  let marks = [92, 81, 67, 58, 35];

  let total = 0;
  let failCount = 0;

  for (let m of marks) {
    total += m;
    if (m < 40) failCount++;
  }

  let average = total / marks.length;
  let percentage = average;

  let grade = "";
  if (average >= 90) grade = "A+";
  else if (average >= 75) grade = "A";
  else if (average >= 60) grade = "B";
  else if (average >= 40) grade = "C";
  else grade = "Fail";

  console.log("Average:", average);
  console.log("Percentage:", percentage + "%");

  if (failCount >= 2) {
    console.log("Repeat Year");
  } else {
    console.log("Grade:", grade);
  }
})();