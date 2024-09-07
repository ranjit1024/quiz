const form = document.querySelector(".quiz-form");
const actualAnsweList = ['A', 'A', 'A', 'A', 'A'];
const qustions = document.querySelectorAll(".qustion");
const result = document.querySelector(".result");
const relodePage = document.querySelector(".reload button");
console.log(qustions)
form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value,form.q3.value,form.q4.value,form.q5.value]
    userAnswers.forEach((answer, index)=>{
        if(answer === actualAnsweList[index]){
            score = score + 1;
            qustions[index].classList.add("correct");
        }else{
            qustions[index].classList.add("wrong")
        }
    });

    result.classList.remove("hide");
    scrollTo(0,0);
    result.querySelector("p").innerText = `You Scored ${score}/5`;
})

relodePage.addEventListener("click", (e)=>{
    location.reload();
})