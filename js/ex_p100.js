var d = document;

//난수를 이용하여 가위바위보
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
  d.getElementById("book7").innerHTML = "이걸지네 ㅋㅋ";
} else if (gameNum == 1 && com == 3) {
  d.getElementById("book7").innerHTML = "봐줬다 ㅋㅋ";
} else if (gameNum == 2 && com == 1) {
  d.getElementById("book7").innerHTML = "봐줬다 ㅋㅋ";
} else if (gameNum == 2 && com == 3) {
  d.getElementById("book7").innerHTML = "이걸지네 ㅋㅋ";
} else if (gameNum == 3 && com == 1) {
  d.getElementById("book7").innerHTML = "이걸지네 ㅋㅋ";
} else {
  d.getElementById("book7").innerHTML = "봐줬다 ㅋㅋ";
}

var user = gameNum;
switch (user) {
  case 1:
    z1 = "가위<br><img src='./images/scissors.png'>";
    break;
  case 2:
    z1 = "바위<br><img src='./images/rock.png'>";
    break;
  case 3:
    z1 = "보<br><img src='./images/paper.png'>";
    break;
  default:
}

d.getElementById("user").innerHTML += `&nbsp;사용자 : ${z1}`;

switch (com) {
  case 1:
    z2 = "가위<br><img src='./images/scissors.png'>";
    break;
  case 2:
    z2 = "바위<br><img src='./images/rock.png'>";
    break;
  case 3:
    z2 = "보<br><img src='./images/paper.png'>";
    break;
  default:
}

d.getElementById("com").innerHTML += `&nbsp;컴퓨터 : ${z2}`;
