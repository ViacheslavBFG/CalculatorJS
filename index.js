const inputA = document.querySelector(".input-js-a");
const inputB = document.querySelector(".input-js-b");
const selectOption = document.querySelector(".select-option-js");
const btnResult = document.querySelector(".btn-result-js");
const outputShow = document.querySelector(".output-js");

btnResult.addEventListener("click", function () {
  const a = Number(inputA.value);
  const b = Number(inputB.value);
  const operation = selectOption.value;
  const result = calculate({ a, b, operation });
  outputShow.innerHTML = result;
});
