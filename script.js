document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    const courseSelection = document.getElementById('course-selection');
    const courseForm = document.getElementById('courseForm');
    const courseInfo = document.getElementById('course-info');
    const courseTitle = document.getElementById('course-title');
    const courseDetails = document.getElementById('course-details');
    const goHomeButton = document.getElementById('goHome');
    const startQuizButton = document.getElementById('startQuiz');
    const quizSection = document.getElementById('quiz');
    const quizForm = document.getElementById('quizForm');
    const quizQuestions = document.getElementById('quiz-questions');
    const quizResult = document.getElementById('quizResult');

    const USERNAME = 'alumno';
    const PASSWORD = '2024'; 


    const courses = {
        matematica: {
            title: "Curso de Matemáticas",
            content: `
                <p>Matemática es la ciencia que estudia patrones, estructuras, cantidades, espacio y cambios a través de conceptos abstractos como números, figuras geométricas, fórmulas y ecuaciones. Se utiliza para resolver problemas en diversos contextos, desde lo cotidiano hasta áreas avanzadas de la ciencia y la tecnología.</p>
                <a href="https://youtu.be/0d5VWxcSUIk?si=Ea2Sm7m4OGYvfdzx" target="_blank">Ver en YouTube</a>
                <div class="images">
                    <img src="Mate1.png">
                    <img src="Mate2.png">
                    <img src="Mate3.png">
                </div>
                `,
            quiz: [
                { question: "¿Qué es un número primo?", type: "radio", options: ["Solo divisible por 1 y sí mismo", "Divisible por todos"], correct: 0 },
                { question: "¿Cuál es el área de un círculo?", type: "dropdown", options: ["πr²", "2πr"], correct: 0 },
                { question: "Selecciona números pares:", type: "checkbox", options: ["1", "2", "4"], correct: [1, 2] },
                { question: "¿Qué fórmula es la correcta para el perímetro de un cuadrado?", type: "radio", options: ["4l", "l²"], correct: 0 },
                { question: "Resuelve: 5 + 3", type: "text", correct: "8" }
            ]
        },
        fisica: {
            title: "Curso de Fisica",
            content: `
                <p>Física: Ciencia que estudia la naturaleza, sus leyes y los fenómenos que ocurren en el universo, como el movimiento, la energía, la materia y las fuerzas.</p>
                <a href="https://youtu.be/lgC8hc6a8rM?si=O-g0ILw4CGwpHJkz" target="_blank">Ver en YouTube</a>
                <div class="images">
                    <img src="fisica1.png">
                    <img src="fisica2.png">
                    <img src="fisica3.png">
                </div>
                `,
            quiz: [
                { question: "¿Qué mide la aceleración?", type: "radio", options: ["Cambio de velocidad", "Fuerza"], correct: 0 },
                { question: "Selecciona unidades de energía:", type: "checkbox", options: ["Joule", "Newton", "Watt"], correct: [0] },
                { question: "¿Qué fórmula es correcta para la energía cinética?", type: "dropdown", options: ["1/2mv²", "mv"], correct: 0 },
                { question: "¿Qué fuerza es responsable de mantener los planetas en órbita?", type: "checkbox", options: ["Fuerza gravitacional", "Fuerza centrípeta"], correct: [0] },
                { question: "¿Qué unidad se usa para medir la fuerza?", type: "dropdown", options: ["joule", "newton"], correct: 1 }
            ]
        },
        historia: {
            title: "Curso de Historia",
            content: `
                <p>Historia: Disciplina que analiza y estudia los eventos del pasado para comprender el desarrollo de las sociedades humanas a lo largo del tiempo.</p>
                <a href="https://youtu.be/bhfJEg9cyDc?si=9RWQuLZM8hDofy0B" target="_blank">Ver en YouTube</a>
                <div class="images">
                    <img src="historia1.png">
                    <img src="historia2.png">
                    <img src="historia3.png">
                </div>
                `,
            quiz: [
                { question: "¿Cuándo empezó la Primera Guerra Mundial?", type: "dropdown", options: ["1939", "1914"], correct: 1 },
                { question: "Selecciona eventos de la Edad Media:", type: "checkbox", options: ["Descubrimiento de América", "Cruzadas", "Revolución Francesa"], correct: [1] },
                { question: "¿Qué imperio cayó en el año 476 d.C.?", type: "dropdown", options: ["Bizantino", "Romano"], correct: 1 },
                { question: "¿Qué cultura construyó las pirámides de Egipto?", type: "checkbox", options: ["Mayas", "Egipcios"], correct: [1] },
                { question: "¿Quién lideró las tropas francesas en la Batalla de Orleans?", type: "dropdown", options: ["Juan de Arco", "Napoleon Bonaparte"], correct: 1 }
            ]
        },
        
        programacion: {
            title: "Curso de Programacion",
            content: `
                <p>Programación: Proceso de diseñar, escribir y depurar código para crear software o aplicaciones que resuelvan problemas o ejecuten tareas específicas.</p>
                <a href="https://youtu.be/as1opL254NA?si=lT1I967jHY2JAwlk" target="_blank">Ver en YouTube</a>
                <div class="images">
                    <img src="progra1.png">
                    <img src="progra2.png">
                    <img src="progra3.png">
                </div>
                `,
            quiz: [
                { question: "¿Qué significa HTML?", type: "dropdown", options: ["HyperText Markup Language", "Home Tool Markup Language"], correct: 0 },
                { question: "¿Qué es un bucle en programación?", type: "checkbox", options: ["Una variable constante.", "Una estructura que repite un bloque de código."], correct: [1] },
                { question: "Selecciona lenguajes de programación:", type: "checkbox", options: ["Python", "JavaScript", "Excel"], correct: [0, 1] },
                { question: "¿Qué etiqueta se usa para un enlace en HTML?", type: "checkbox", options: ["<a>", "<link>"], correct: [0] },
                { question: "¿Qué operador se usa para concatenar cadenas en JavaScript?", type: "dropdown", options: ["+", "-"], correct: [0] }
            ]
        },
        calculo: {
            title: "Curso de Calculo",
            content: `
                <p>Cálculo: Rama de las matemáticas que analiza el cambio y el movimiento a través de derivadas e integrales, fundamentales en ciencias y tecnologías.</p>
                <a href="https://youtu.be/Ll_qHUG6OWs?si=wejX1enz3BNcB01r" target="_blank">Ver en YouTube</a>
                <div class="images">
                    <img src="calculo1.png">
                    <img src="calculo2.png">
                    <img src="calculo3.png">
                </div>
                `,
                quiz: [
                    {question: "¿Qué es una derivada?", type: "radio", options: ["La pendiente de una función en un punto.", "La suma de una serie infinita."], correct: 0},
                    {question: "Selecciona conceptos relacionados con integrales:",type: "checkbox",options: ["Área bajo la curva.", "Derivadas parciales.", "Límite infinito."],correct: [0]},
                    {question: "¿Qué significa el símbolo ∫?", type: "dropdown", options: ["Integral", "Derivada"], correct: 0},
                    {question: "¿Cuál es la derivada de x²?", type: "dropdown", options: ["2x", "x²"], correct: 0},
                    {question: "¿Qué rama de las matemáticas estudia el cálculo?", type: "radio", options: ["Álgebra", "Análisis Matemático"], correct: 1}
            ]
        },
    };


    let currentQuiz = null;


    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === USERNAME && password === PASSWORD) {
            loginForm.parentElement.classList.add('hidden');
            courseSelection.classList.remove('hidden');
        } else {
            loginError.textContent = 'Usuario o contraseña incorrectos.';
        }
    });


    courseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedCourse = document.getElementById('course').value;
        const course = courses[selectedCourse];

        if (course) {
            courseSelection.classList.add('hidden');
            courseInfo.classList.remove('hidden');
            courseTitle.textContent = course.title;
            courseDetails.innerHTML = course.content;
            currentQuiz = course.quiz;
        }
    });


    goHomeButton.addEventListener('click', () => {
        courseInfo.classList.add('hidden');
        courseSelection.classList.remove('hidden');
        quizSection.classList.add('hidden');
        quizResult.textContent = '';
    });


    startQuizButton.addEventListener('click', () => {
        courseInfo.classList.add('hidden');
        quizSection.classList.remove('hidden');
        renderQuiz(currentQuiz);
    });


    function renderQuiz(quiz) {
        quizQuestions.innerHTML = '';
        quiz.forEach((item, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML = `<p>${index + 1}. ${item.question}</p>`;
            if (item.type === 'radio' || item.type === 'checkbox') {
                item.options.forEach((option, i) => {
                    const input = document.createElement('input');
                    input.type = item.type;
                    input.name = `question${index}`;
                    input.value = i;
                    const label = document.createElement('label');
                    label.textContent = option;
                    questionElement.appendChild(input);
                    questionElement.appendChild(label);
                });
            } else if (item.type === 'dropdown') {
                const select = document.createElement('select');
                item.options.forEach((option, i) => {
                    const opt = document.createElement('option');
                    opt.value = i;
                    opt.textContent = option;
                    select.appendChild(opt);
                });
                questionElement.appendChild(select);
            } else if (item.type === 'text') {
                const input = document.createElement('input');
                input.type = 'text';
                input.name = `question${index}`;
                questionElement.appendChild(input);
            }
            quizQuestions.appendChild(questionElement);
        });
    }


    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(quizForm);
        let score = 0;
        currentQuiz.forEach((item, index) => {
            const userAnswer = formData.getAll(`question${index}`);
            if (item.type === 'checkbox') {
                const correctAnswers = item.correct.map(String);
                if (JSON.stringify(userAnswer.sort()) === JSON.stringify(correctAnswers.sort())) {
                    score++;
                }
            } else if (userAnswer[0] == item.correct || userAnswer === item.correct) {
                score++;
            }
        });
        quizResult.textContent = `Tu puntaje es: ${score}/${currentQuiz.length}`;
    });
});
