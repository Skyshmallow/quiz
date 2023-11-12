const quizData = [
    {
        question: 'When Kazakh Khanate was created?',
        a: '1456',
        b: '1468',
        c: '1503',
        d: '1465',
        answer: 'd',
        image: 'https://th.bing.com/th/id/R.76a349edaccb0c9f6f4700f4ffdcfc1e?rik=U3d6hzq%2fZ25Lrw&pid=ImgRaw&r=0'
    },
    {
        question: 'When was Abylai Khan captured by the Dzungars?',
        a: '1658',
        b: '1741',
        c: '1738',
        d: '1667',
        answer: 'b',
        image: 'https://th.bing.com/th/id/OIP.bFkkI2bpfN5hsWlllnszkwHaFc?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
        question: 'What is role of Rataishes in Sak community?',
        a: 'Aristocrats',
        b: 'Slaves',
        c: 'Workers',
        d: 'Military',
        answer: 'd',
        image: 'https://th.bing.com/th/id/OIP.0yiZA30mm5fUqGerKz97hAHaD4?w=317&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
        question: 'Kenesary khan lived between?',
        a: '1802-1847',
        b: '1788-1839',
        c: '1798-1854',
        d: '1763-1797',
        answer: 'a',
        image: 'https://th.bing.com/th/id/OIP.PXPvd6Pn5aMUCN96QX4dvAAAAA?w=146&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
    {
        question: 'Talgat Ryskulov wrote about the famine in Kazakhstan to whom?',
        a: 'Lenin',
        b: 'Goloshekin',
        c: 'Stalin',
        d: 'Trocki',
        answer: 'c',
        image: 'https://th.bing.com/th/id/OIP.sNkUcwiSpTzhg--deX2CUQHaEE?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
]

const questionQ = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');


const sbmBTN = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]

    document.querySelector('.card-img-top').src = currentQuizData.image;
    questionQ.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}


// sbmBTN.addEventListener("click", () => {
//     currentQuiz++;

//     if (currentQuiz < quizData.length){
//         loadQuiz();
//     }else{
//         alert("You finished ")
//     }


// });

sbmBTN.addEventListener("click", () => {
    // ... existing code ...

    // Check the answer and update the score
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if(selectedAnswer.id === quizData[currentQuiz].answer) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // Display score at the end
            alert("You finished! Your score is: " + score + "/" + quizData.length);
        }
    } else {
        alert("Please select an answer.");
    }
});







document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', function(e) {
        // Check if the clicked element is not the radio button itself or its label
        if (!e.target.matches('input[type="radio"]') && !e.target.matches('label')) {
            // Find the radio button inside this item and click it
            this.querySelector('input[type="radio"]').click();
        }
    });
});


// document.querySelectorAll('input[type="radio"][name="answer"]').forEach(radio => {
//     radio.addEventListener('change', function() {
//         // Remove 'selected' class from all radio buttons' parent elements
//         document.querySelectorAll('.list-group-item.selected').forEach(item => {
//             item.classList.remove('selected');
//         });

//         // Add 'selected' class to the parent element of the checked radio button
//         if (this.checked) {
//             this.closest('.list-group-item').classList.add('selected');
//         }
//     });
// });

