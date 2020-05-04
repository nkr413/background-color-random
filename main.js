let copy_btn = document.getElementById("copy-btn");

let start = (min_o = 0, max_o = 255, min_t = 0, max_t = 255, min_h = 0, max_h = 255) => {
  mi_o  = Math.ceil(min_o);
  ma_o  = Math.floor(max_o);
  one   = Math.floor(Math.random() * (ma_o - mi_o + 1)) + mi_o;
  mi_t  = Math.ceil(min_t);
  ma_t  = Math.floor(max_t);
  two   = Math.floor(Math.random() * (ma_t - mi_t + 1)) + mi_t;
  mi_h  = Math.ceil(min_h);
  ma_h  = Math.floor(max_h);
  the   = Math.floor(Math.random() * (ma_h - mi_h + 1)) + mi_h;

  document.body.style.background = `rgb(${one}, ${two}, ${the})`;

  setTimeout(() => {
    document.getElementById('color-name').innerHTML = `rgb(${one}, ${two}, ${the})`;
  }, 200);
}

copy_btn.addEventListener('click', (event) => {
  document.getElementById("copy").setAttribute("value", document.getElementById('color-name').innerHTML);
  let copyText = document.getElementById("copy");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
});

window.addEventListener("click", (e) => {start()});
window.addEventListener("keydown", (e) => {if (e.keyCode == 13 || e.keyCode == 32) start()});

