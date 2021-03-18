let count = 0;

document.getElementById("new-message").addEventListener("click", () => {
  navigator.setAppBadge(++count);
});

document.getElementById("clear-messages").addEventListener("click", () => {
    count = 0;
    navigator.clearAppBadge();
});
