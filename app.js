const startBtn = document.querySelector(".start-screen");
const question = document.querySelector(".question");
const type = document.querySelector("#type");
const typeBtnA = document.querySelector("#A");
const typeBtnB = document.querySelector("#B");
const questionTitle = document.querySelector("#question-title");
const progressBar = document.querySelector(".progress-bar");
const resultPage = document.querySelector(".result-page");
const EI = document.querySelector("#EI");
const SN = document.querySelector("#SN");
const TF = document.querySelector("#TF");
const JP = document.querySelector("#JP");
const mbtiResult = document.querySelector(".mbti");
const img = document.querySelector("#img");
const animal = document.querySelector("#animal");
const explain = document.querySelector("#explain");

let num = 1;
const q = {
    1: {"title": "문제 1번", "type":"EI", "A":"E", "B":"I"},
    2: {"title": "문제 2번", "type":"EI", "A":"E", "B":"I"},
    3: {"title": "문제 3번", "type":"EI", "A":"E", "B":"I"},
    4: {"title": "문제 4번", "type":"SN", "A":"S", "B":"N"},
    5: {"title": "문제 5번", "type":"SN", "A":"S", "B":"N"},
    6: {"title": "문제 6번", "type":"SN", "A":"S", "B":"N"},
    7: {"title": "문제 7번", "type":"TF", "A":"T", "B":"F"},
    8: {"title": "문제 8번", "type":"TF", "A":"T", "B":"F"},
    9: {"title": "문제 9번", "type":"TF", "A":"T", "B":"F"},
    10: {"title": "문제 10번", "type":"JP", "A":"J", "B":"P"},
    11: {"title": "문제 11번", "type":"JP", "A":"J", "B":"P"},
    12: {"title": "문제 12번", "type":"JP", "A":"J", "B":"P"},
};

const resultValue = {
    "ISTJ" : {"animal": "하마", "explain": "하마 설명", "img":"img/hippo.jpg"},
    "ISFJ" : {"animal": "부엉이", "explain": "부엉이 설명", "img":"img/owl.jpg"},
    "INFJ" : {"animal": "물소", "explain": "물소 설명", "img":"img/buffalo.jpg"},
    "INTJ" : {"animal": "치타", "explain": "치타 설명", "img":"img/cheetah.jpg"},
    "ISTP" : {"animal": "나무늘보", "explain": "나무늘보 설명", "img":"img/sloth.jpg"},
    "ISFP" : {"animal": "거북이", "explain": "거북이 설명", "img":"img/turtle.jpg"},
    "INFP" : {"animal": "코끼리", "explain": "코끼리 설명", "img":"img/elephant.jpg"},
    "INTP" : {"animal": "침팬지", "explain": "침팬지 설명", "img":"img/monkey.jpg"},
    "ESTP" : {"animal": "악어", "explain": "악어 설명", "img":"img/crocodile.jpg"},
    "ESFP" : {"animal": "미어캣", "explain": "미어캣 설명", "img":"img/meerkat.jpg"},
    "ENFP" : {"animal": "사자", "explain": "사자 설명", "img":"img/lion.jpg"},
    "ENTP" : {"animal": "태양새", "explain": "태양새 설명", "img":"img/sunbird.jpg"},
    "ESTJ" : {"animal": "기린", "explain": "기린 설명", "img":"img/giraffe.jpg"},
    "ESFJ" : {"animal": "고릴라", "explain": "고릴라 설명", "img":"img/gorillas.jpg"},
    "ENFJ" : {"animal": "카피바라", "explain": "카피바라 설명", "img":"img/capybara.jpg"},
    "ENTJ" : {"animal": "호랑이", "explain": "호랑이 설명", "img":"img/tiger.jpg"},
}

const HIDDEN_CLASSNAME = "hidden"

function handleStartBtn(event) {
    event.preventDefault();
    startBtn.classList.add(HIDDEN_CLASSNAME);
    question.classList.remove(HIDDEN_CLASSNAME);
    handleNextBtn()
}

function handleTypeBtn() {
    const typeValue = type.value;
    const inputId = ("#" + typeValue)
    const insertId = document.querySelector(inputId)
    let insertIdValue = insertId.value;
    const addValue = parseInt(insertIdValue) + 1
    insertId.value = addValue;
}

function handleNextBtn() {
    if(num === 13){
        question.classList.add(HIDDEN_CLASSNAME);
        resultPage.classList.remove(HIDDEN_CLASSNAME);
        let mbti = "";
        //삼항 조건 연산자
        (EI.value < 2) ? mbti+="I" : mbti+="E";
        (SN.value < 2) ? mbti+="N" : mbti+="S";
        (TF.value < 2) ? mbti+="F" : mbti+="T";
        (JP.value < 2) ? mbti+="P" : mbti+="J";
        mbtiResult.innerText = "결과 : " + mbti;
        alert("당신의 mbti검사 결과는 : "+mbti+" 입니다.")
        img.src = resultValue[mbti]["img"];
        animal.innerText = resultValue[mbti]["animal"];
        explain.innerText = resultValue[mbti]["explain"];
    } else {
        progressBar.style.width = "calc(100/12*"+num+"%)";
        questionTitle.innerText = q[num]["title"]
        type.value = q[num]["type"]
        typeBtnA.innerText = q[num]["A"]
        typeBtnB.innerText = q[num]["B"]
        num++
    }
}

startBtn.addEventListener("click", handleStartBtn);
typeBtnA.addEventListener("click", handleTypeBtn);
typeBtnA.addEventListener("click", handleNextBtn);
typeBtnB.addEventListener("click", handleNextBtn);
