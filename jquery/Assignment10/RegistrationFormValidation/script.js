const existingEmails = ["test@mail.com", "user@gmail.com"];

$("#registerBtn").click(function () {
  let name = $("#name").val().trim();
  let email = $("#email").val().trim();
  let pass = $("#password").val().trim();
  let valid = true;

  $("#name, #email, #password").css("border", "1px solid #ccc");
  $("#success").text("");

  if (name === "") {
    $("#name").css("border", "2px solid red");
    valid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email) || existingEmails.includes(email)) {
    $("#email").css("border", "2px solid red");
    valid = false;
  }

  if (pass.length < 8) {
    $("#password").css("border", "2px solid red");
    valid = false;
  }

  if (valid) {
    $("#success").text("Registration successful!");
  }
});