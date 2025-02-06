function enter() {
  let input = document.getElementById("numberInput").value;
  let square = input * input;
  document.getElementById("output").textContent = `Your input is ${square}`;
}
