

box1 = document.getElementById('box1');
pos = document.getElementById('pos');

box1.style.position = "absolute";
bposx = 100;
bposy = 100;

var data = prompt('введите', "dQw4w9WgXcQ");

box1.src="http://www.youtube.com/embed/" + data + "?autoplay=1&mute=1"
setInterval(Update,4);



function Update() {
  bposx += (getRandomInt(11)-5);
  bposy += (getRandomInt(11)-5);
  box1.style.top = bposy+"px";
  if (bposy<0){
    bposy = 0
  }
  box1.style.left = bposx+"px";
  pos.textContent = "x:" + bposx + " y:" + bposy

}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
