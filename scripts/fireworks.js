document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("fireworks-container");

  const fireworks = document.createElement("div");
  fireworks.classList.add("pyro");

  const before = document.createElement("div");
  before.classList.add("before");

  const after = document.createElement("div");
  after.classList.add("after");

  fireworks.appendChild(before);
  fireworks.appendChild(after);

  container.appendChild(fireworks);
});
