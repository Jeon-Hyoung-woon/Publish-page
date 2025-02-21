var game = prompt("가위, 바위, 보 중 선택하여 입력", "ex)가위");
var gameNum;
switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 입력하였습니다.");
    location.reload();
}

var com = Math.ceil(Math.random() * 3);

if (gameNum == com) {
  d.getElementById("book7").innerHTML = "비겼습니다.";
} else if (gameNum == 1 && com == 2) {
  d.getElementById("book7").innerHTML = "졌습니다.";
} else if (gameNum == 1 && com == 3) {
  d.getElementById("book7").innerHTML = "이겼습니다.";
} else if (gameNum == 2 && com == 1) {
  d.getElementById("book7").innerHTML = "이겼습니다.";
} else if (gameNum == 2 && com == 3) {
  d.getElementById("book7").innerHTML = "졌습니다.";
} else if (gameNum == 3 && com == 1) {
  d.getElementById("book7").innerHTML = "졌습니다.";
} else {
  d.getElementById("book7").innerHTML = "이겼습니다.";
}

switch (com) {
  case 1:
    z = "<img src='./images/scissors.png'><br>가위";
    break;
  case 2:
    z = "<img src='./images/rock.png'><br>바위";
    break;
  case 3:
    z = "<img src='./images/paper.png'><br>보";
    break;
  default:
}

d.getElementById("book7").innerHTML += `<br><br>컴퓨터 : <br>${z}`;
