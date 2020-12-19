function randomColor() {
	let one = Math.round(Math.random() * 255);
	let two = Math.round(Math.random() * 255);
	let the = Math.round(Math.random() * 255);

	document.querySelector('#color-code-name').innerHTML = `rgb(${one}, ${two}, ${the})`;
	document.getElementById("main-block").style.backgroundColor = `rgb(${one}, ${two}, ${the})`;
}

document.getElementById("main-block").addEventListener("click", (e) => randomColor());
window.addEventListener("keydown", (e) => {if (e.keyCode == 32 || e.keyCode == 13) randomColor()});

document.getElementById("copy-color").addEventListener("click", (e) => {
  let text = document.getElementById('color-code-name').innerHTML;
  navigator.clipboard.writeText(text).then(function() {
  	console.log('Async: Copying to clipboard was successful!');
	}, function(err) {
  	console.error('Async: Could not copy text: ', err);
	});
});

