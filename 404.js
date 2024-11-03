

var NotF = document.getElementById("NF");
var r = location.href.split('/')[3]

NotF.textContent = 'not found "' + r + '"'

if (r == "")
{
  Home()
}

function Home(){
  location.href = 'https://' + location.href.split('/')[2]
}
