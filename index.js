const questions = document.querySelectorAll('.question');

questions.forEach((question)=>{
const btns = question.querySelector('.question-btn');
btns.addEventListener('click', ()=>{
    questions.forEach((items)=>{
        if(items !== question){
            items.classList.remove('show-text');
        }
    })
    question.classList.toggle('show-text')
})
})