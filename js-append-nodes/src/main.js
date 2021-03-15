const app = document.querySelector("#app");
const button = document.createElement("button");
button.textContent = "运行";
button.addEventListener("click", run);
app.appendChild(button);
const output = document.createElement("div");
app.appendChild(output);
const test = document.createElement("div");
app.appendChild(test);

let total = 0
const n = 1000

function run() {
  const t1 = performance.now();
  const divs = []
  for (let i = 0; i < n; i++) {
    const div = document.createTextNode("div");
    div.textContent = total + i;
    divs.push(div)
  }
  total += n
  test.append.apply(test, divs);
  const t2 = performance.now();
  output.textContent = 'JS用时：' + (t2 - t1) + "ms";
  setTimeout(() => {
    const t3 = performance.now();
    output.textContent += ' 浏览器用时：' + (t3 - t1) + "ms";
  });
}