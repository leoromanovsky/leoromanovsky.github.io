(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;
  function current() {
    if (root.dataset.theme) return root.dataset.theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
