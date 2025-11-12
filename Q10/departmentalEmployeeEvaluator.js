const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

console.log("Departmental Employee Evaluation:");

for (let i = 0; i < departments.length; i++) {
  let [dept, score] = departments[i];
  let remark = "";

  if (score >= 90) {
    remark = "Excellent";
  } else if (score >= 75 && score <= 89) {
    remark = "Good";
  } else if (score >= 60 && score <= 74) {
    remark = "Average";
  } else {
    remark = "Needs Improvement";
  }

  console.log(`${dept} Department → ${remark} (${score} points)`);
}
