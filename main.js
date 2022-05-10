let target = document.querySelector("#dynamic");

function randomString() {
	let stringArr= ["이태권입니다.", "반갑습니다!", "저는 위코드 34기입니다.", "저는 국사학을 전공했어요!", "저는 여행을 좋아해요.", "저는 녹차를 좋아해요.", "저는 영화를 좋아해요."];
	let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
	let selectStringArr = selectString.split("");

	return selectStringArr;
}

// typing reset
function resetTyping() {
	target.textContent = "";
	dynamic(randomString());
}

// printing out each text
function dynamic(randomArr) {
	if (randomArr.length > 0) {
		target.textContent += randomArr.shift();
		setTimeout(function() {
			dynamic(randomArr);
		}, 70);
	} else {
		setTimeout(resetTyping, 5000);
	}
}

dynamic(randomString());

// blinking cursor effect
function blink() {
	target.classList.toggle("active");
}
setInterval(blink, 600);
