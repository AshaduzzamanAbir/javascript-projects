(function () {
  const message = document.querySelector(".message_form");

  message.addEventListener("submit", function (e) {
    e.preventDefault();
    const showMessage = document.querySelector("#msgBox");
    const feedbackMessage = document.querySelector(".feedback");
    const messageContent = document.querySelector(".message_content");
    if (showMessage.value === "") {
      feedbackMessage.classList.add("show");
      setTimeout(function () {
        feedbackMessage.classList.remove("show");
      }, 3000);
    } else {
      messageContent.textContent = showMessage.value;
      showMessage.value = "";
    }
  });
})();
