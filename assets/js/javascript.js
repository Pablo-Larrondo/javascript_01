const cantidad = document.querySelector("#cantidad");
const valorBase = document.querySelector("#valorBase");
const total = document.querySelector("#total");
const menos = document.querySelector("#menos");
const mas = document.querySelector("#mas");

menos.addEventListener("click", function () {
  if (cantidad.innerHTML > 0) {
    cantidad.innerHTML--;
    total.innerHTML = (cantidad.innerHTML * valorBase.innerHTML).toLocaleString(
      "es-CL"
    );
  }
});

mas.addEventListener("click", function () {
  cantidad.innerHTML++;
  total.innerHTML = (cantidad.innerHTML * valorBase.innerHTML).toLocaleString(
    "es-CL"
  );
});
