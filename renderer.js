var err = 0;
var run = 1;
var offsetX = 0;
var offsetY = 0;
var db = [];
document.getElementById("pan").style.setProperty("background", "var(--header-hover-back-color)", "important");
function chk() {
  if (run == 2) {
    document.getElementById("pen").style.setProperty("background", "var(--header-hover-back-color)", "important");
	document.getElementById("pan").style.setProperty("background", "var(--back-color)", "important");
  } else {
    document.getElementById("pan").style.setProperty("background", "var(--header-hover-back-color)", "important");
	document.getElementById("pen").style.setProperty("background", "var(--back-color)", "important");
  }
}
function pan() {
  run = 1;
  chk();
}
function pen() {
  run = 2;
  chk();
}
function adj() {
  err = 1;
  document.getElementById("bg").style.display = "block";
}
function x() {
  err = 0;
  document.getElementById("bg").style.display = "none";
}
function mouseDragged() {
  if (run == 1 && err == 0) {
    offsetX += mouseX - pmouseX;
	offsetY += mouseY - pmouseY;
	redraw();
  } else if (run == 2 && err == 0) {
	db.push(document.getElementById("c").value, document.getElementById("s").value, pmouseX-offsetX, pmouseY-offsetY, mouseX-offsetX, mouseY-offsetY);
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  clear();
  for (i=0; i<db.length; i=i+6) {
    stroke(db[i]);
	strokeWeight(db[i+1]);
	line(db[i+2]+offsetX, db[i+3]+offsetY, db[i+4]+offsetX, db[i+5]+offsetY);
  }
}