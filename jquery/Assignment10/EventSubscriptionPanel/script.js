function showMsg(text) {
  $("#message").text(text);
}

$("#subscribeBtn").click(() => {
  showMsg("Notifications enabled");
});

$("#unsubscribeBtn").click(() => {
  showMsg("Notifications disabled");
});

$("#topics").on("click", ".topic", function () {
  showMsg("Subscribed to " + $(this).text());
});

$("#addTopicBtn").click(() => {
  const name = $("#newTopic").val().trim();
  if (name !== "") {
    $("#topics").append(`<div class="topic">${name}</div>`);
    showMsg(name + " added");
  }
});

$("#removeTopicBtn").click(() => {
  const name = $("#removeTopic").val().trim();
  const topic = $("#topics .topic").filter((i, t) => $(t).text() === name);
  if (topic.length) {
    topic.off("click");
    topic.remove();
    showMsg(name + " removed");
  }
});