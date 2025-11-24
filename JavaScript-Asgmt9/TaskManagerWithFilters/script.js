$(document).ready(function () {
  const API_URL = "http://localhost:3000/tasks";

  function fetchTasks(filters = {}) {
    $.ajax({
      url: API_URL,
      method: "GET",
      data: filters,
      success: function (tasks) {
        renderList(tasks);
      },
      error: function () {
        alert("Error loading tasks");
      },
    });
  }

  function renderList(tasks) {
    const $list = $("#task-list");
    $list.empty();

    if (tasks.length === 0) {
      $list.append('<li style="justify-content:center;">No tasks found</li>');
      return;
    }

    tasks.forEach((task) => {
      const isChecked = task.completed ? "checked" : "";
      const textClass = task.completed ? "completed-text" : "";

      const html = `
                <li>
                    <div class="task-info">
                        <input type="checkbox" class="toggle-task" data-id="${task.id}" ${isChecked}>
                        <span class="${textClass}">${task.title}</span>
                    </div>
                    <span class="badge ${task.priority}">${task.priority}</span>
                </li>
            `;
      $list.append(html);
    });
  }

  $("#filter-dropdown").on("change", function () {
    const value = $(this).val();
    let params = {};

    if (value === "completed") {
      params.completed = true;
    } else if (value !== "") {
      params.priority = value;
    }

    fetchTasks(params);
  });

  $(document).on("change", ".toggle-task", function () {
    const id = $(this).data("id");
    const isCompleted = $(this).is(":checked");
    const $textSpan = $(this).next("span");

    if (isCompleted) {
      $textSpan.addClass("completed-text");
    } else {
      $textSpan.removeClass("completed-text");
    }

    $.ajax({
      url: `${API_URL}/${id}`,
      method: "PATCH",
      data: { completed: isCompleted },
      error: function () {
        alert("Failed to update task");
        $(this).prop("checked", !isCompleted);
      },
    });
  });

  fetchTasks();
});
