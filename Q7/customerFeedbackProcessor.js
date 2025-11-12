// customer feedback message
let feedback = "Great product! Fast delivery and amazing sound quality!";

// count total words
let wordCount = feedback.split(" ").length;

// check for negative words
let hasNegative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

// analyze feedback
if (!hasNegative) {
  console.log("Feedback Summary: Positive Feedback ✅");
} else {
  console.log("Feedback Summary: Needs Improvement ⚠️");
}

// display additional details
console.log("Total Words in Feedback:", wordCount);
