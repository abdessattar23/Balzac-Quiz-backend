let data = JSON.parse(localStorage.getItem("quizz")) || [];
init();
function init() {
    const selects = document.querySelectorAll("select");
    const level = selects[0];
    const category = selects[1];
    const tbody = document.querySelector("tbody");

    const newtr = (cat, ele) => {
        const tr = document.createElement("tr");
        tr.className = "border-b border-gray-200 hover:bg-blue-100";
        tr.innerHTML = `
            <td id="categ" class="py-3 px-6 text-center font-medium">
                ${cat.name}
            </td>
            <td id="levl" class="py-3 px-6 text-center font-medium">
                ${ele.level}
            </td>
            <td class="py-3 px-6 text-center font-medium">
                ${cat.questions.quests.length}
            </td>
            <td class="py-3 px-6 text-center font-medium">
                <a onclick="addNew(this)" class="text-blue-500 cursor-pointer">Ajouter</a> / <a onclick="Delete(this)" class="text-red-500 cursor-pointer">Supprimer</a> / <a onclick="modify(this)" class="text-blue-500 cursor-pointer">Modifier</a>
            </td>
        `;
        return tr;
    };

    function filter() {
        const levelVal = level.value;
        const categoryVal = category.value;
        let res = data;

        if (levelVal !== "all") {
            res = res.filter(ele => ele.level === levelVal);
        }

        if (categoryVal !== "all") {
            res = res.map(ele => {
                const filtred = ele.categories.filter(cat => cat.name === categoryVal);
                return { ...ele, categories: filtred };
            }).filter(ele => ele.categories.length > 0);
        }

        tbody.innerHTML = "";
        res.forEach(ele => {
            ele.categories.forEach(cat => {
                tbody.appendChild(newtr(cat, ele));
            });
        });
    }
    level.addEventListener("change", filter);
    category.addEventListener("change", filter);
    filter();
}


function addNew(ele) {
    const modal = document.getElementById('modal');
    const multiSteps = document.querySelector('.multi-step-form');
    let currentStep = 0;

    multiSteps.innerHTML = `
        <div class="step">
            <h2 class="text-xl font-bold mb-4">Question</h2>
            <input id="question" type="text" class="w-full mb-4 border border-gray-300 p-2 rounded" placeholder="Enter the question">
            <button class="next-step bg-blue-500 text-white py-2 px-4 rounded">Next</button>
        </div>
        <div class="step hidden">
            <h2 class="text-xl font-bold mb-4">Wrong Answers</h2>
            <input class="wrong-answer w-full mb-4 border border-gray-300 p-2 rounded" placeholder="Enter a Wrong answer">
            <input class="wrong-answer w-full mb-4 border border-gray-300 p-2 rounded" placeholder="Enter a Wrong answer">
            <button class="prev-step bg-gray-500 text-white py-2 px-4 rounded">Previous</button>
            <button class="next-step bg-blue-500 text-white py-2 px-4 rounded">Next</button>
        </div>
        <div class="step hidden">
            <h2 class="text-xl font-bold mb-4">Correct Answer</h2>
            <input id="correct" type="text" class="w-full mb-4 border border-gray-300 p-2 rounded" placeholder="Enter the correct answer">
            <button class="prev-step bg-gray-500 text-white py-2 px-4 rounded">Previous</button>
            <button class="next-step bg-blue-500 text-white py-2 px-4 rounded" onclick="vis()">Next</button>
        </div>
        <div class="step hidden">
            <h2 class="text-xl font-bold mb-4">Visualize the Question</h2>
            <div class="m-5 p-3 text-center">
                <h1 id="vis-question" class="text-lg m-2 text-center"></h1>
                <br><br>
                <div id="vis-wrong-answers"></div>
                
            </div>
            <button class="prev-step bg-gray-500 text-white py-2 px-4 rounded">Previous</button>
            <button class="submit bg-green-500 text-white py-2 px-4 rounded">Submit</button>
        </div>
    `;

    const steps = document.querySelectorAll('.step');

    function showStep(step) {
        steps.forEach((s, index) => {
            s.classList.toggle('hidden', index !== step);
        });
    }

    document.querySelectorAll('.next-step').forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        });
    });

    document.querySelectorAll('.prev-step').forEach(button => {
        button.addEventListener('click', () => {
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });


    document.querySelector('.submit').addEventListener('click', () => {
        modal.classList.add('hidden');
        var categ = ele.parentElement.closest("tr").querySelector("#categ").textContent.trim();
        var levl = ele.parentElement.closest("tr").querySelector("#levl").textContent.trim();
        const question = document.getElementById('question').value;
        let wrongAnswers = Array.from(document.querySelectorAll('.wrong-answer')).map(input => input.value);
        const correctAnswer = document.getElementById('correct').value;
        wrongAnswers.push(correctAnswer);
    
        // Find the correct level and category in the data
        const levelData = data.find(d => d.level == levl);
        if (levelData) {
            const categoryData = levelData.categories.find(cat => cat.name === categ);
            if (categoryData) {
                // Add the new question and answers
                categoryData.questions.quests.push(question);
                categoryData.questions.answers.push(wrongAnswers);
                categoryData.questions.correct.push(wrongAnswers.length - 1); // Index of the correct answer
                categoryData.questions.selected.push(null); // Assuming selected is used for tracking user selections
            }
        }
    
        // Save the updated data to localStorage
        localStorage.setItem("quizz", JSON.stringify(data));
        console.log(data);
    });

    // For demonstration, open the modal
    modal.classList.remove('hidden');
    showStep(currentStep);
}
function vis() {
    const question = document.getElementById('question').value;
    const wrongAnswers = Array.from(document.querySelectorAll('.wrong-answer')).map(input => input.value);
    const correctAnswer = document.getElementById('correct').value;

    document.getElementById("vis-question").textContent = question;
    const wrongAnswersList = document.getElementById("vis-wrong-answers");
    wrongAnswersList.innerHTML = '';
    wrongAnswers.forEach(answer => {
        const li = document.createElement('a');
        li.className = "px-5 py-2 bg-blue-700 rounded text-white m-2";
        li.textContent = answer;
        wrongAnswersList.appendChild(li);
    });
    document.getElementById("vis-wrong-answers").innerHTML += `<a class="px-5 py-2 bg-blue-700 rounded text-white">${correctAnswer}</a>`;
}

function Delete(ele) {
    const modal = document.getElementById('modal');
    const multiSteps = document.querySelector('.multi-step-form');
    let currentStep = 0;

    var categ = ele.parentElement.closest("tr").querySelector("#categ").textContent.trim();
    var levl = ele.parentElement.closest("tr").querySelector("#levl").textContent.trim();

    // Find the correct level and category in the data
    const levelData = data.find(d => d.level === levl);
    if (levelData) {
        const categoryData = levelData.categories.find(cat => cat.name === categ);
        if (categoryData) {
            // Display all questions for the selected category and level
            multiSteps.innerHTML = `
                <div class="step">
                    <h2 class="text-xl font-bold mb-4">Select Question to Delete</h2>
                    <ul id="question-list" class="mb-4">
                        ${categoryData.questions.quests.map((question, index) => `
                            <li class="mb-2">
                                <input type="radio" name="question" value="${index}" id="question-${index}">
                                <label for="question-${index}">${question}</label>
                            </li>
                        `).join('')}
                    </ul>
                    <button class="submit bg-red-500 text-white py-2 px-4 rounded">Delete</button>
                </div>
            `;

            document.querySelector('.submit').addEventListener('click', () => {
                const selectedQuestionIndex = document.querySelector('input[name="question"]:checked').value;
                if (selectedQuestionIndex !== undefined) {
                    // Remove the selected question and its associated answers and correct answer
                    categoryData.questions.quests.splice(selectedQuestionIndex, 1);
                    categoryData.questions.answers.splice(selectedQuestionIndex, 1);
                    categoryData.questions.correct.splice(selectedQuestionIndex, 1);
                    categoryData.questions.selected.splice(selectedQuestionIndex, 1);

                    // Save the updated data to localStorage
                    localStorage.setItem("quizz", JSON.stringify(data));

                    // Close the modal
                    modal.classList.add('hidden');
                }
            });

            // For demonstration, open the modal
            modal.classList.remove('hidden');
        }
    }
}
function modify(ele) {
    const modal = document.getElementById('modal');
    const multiSteps = document.querySelector('.multi-step-form');
    let currentStep = 0;

    var categ = ele.parentElement.closest("tr").querySelector("#categ").textContent.trim();
    var levl = ele.parentElement.closest("tr").querySelector("#levl").textContent.trim();

    // Find the correct level and category in the data
    const levelData = data.find(d => d.level === levl);
    if (levelData) {
        const categoryData = levelData.categories.find(cat => cat.name === categ);
        if (categoryData) {
            // Display all questions for the selected category and level
            multiSteps.innerHTML = `
                <div class="step">
                    <h2 class="text-xl font-bold mb-4">Select Question to Modify</h2>
                    <ul id="question-list" class="mb-4">
                        ${categoryData.questions.quests.map((question, index) => `
                            <li class="mb-2">
                                <input type="radio" name="question" value="${index}" id="question-${index}">
                                <label for="question-${index}">${question}</label>
                            </li>
                        `).join('')}
                    </ul>
                    <button class="submit bg-blue-500 text-white py-2 px-4 rounded">Modify</button>
                </div>
            `;

            document.querySelector('.submit').addEventListener('click', () => {
                const selectedQuestionIndex = document.querySelector('input[name="question"]:checked').value;
                if (selectedQuestionIndex !== undefined) {
                    const selectedQuestion = categoryData.questions.quests[selectedQuestionIndex];
                    const selectedAnswers = categoryData.questions.answers[selectedQuestionIndex];
                    const correctAnswerIndex = categoryData.questions.correct[selectedQuestionIndex];
                    const correctAnswer = selectedAnswers[correctAnswerIndex];

                    // Populate the form with the selected question and its answers
                    multiSteps.innerHTML = `
                        <div class="step">
                            <h2 class="text-xl font-bold mb-4">Question</h2>
                            <input id="question" type="text" class="w-full mb-4 border border-gray-300 p-2 rounded" value="${selectedQuestion}">
                            <button class="next-step bg-blue-500 text-white py-2 px-4 rounded">Next</button>
                        </div>
                        <div class="step hidden">
                            <h2 class="text-xl font-bold mb-4">Wrong Answers</h2>
                            ${selectedAnswers.slice(0, -1).map(answer => `
                                <input class="wrong-answer w-full mb-4 border border-gray-300 p-2 rounded" value="${answer}">
                            `).join('')}
                            <button class="prev-step bg-gray-500 text-white py-2 px-4 rounded">Previous</button>
                            <button class="next-step bg-blue-500 text-white py-2 px-4 rounded">Next</button>
                        </div>
                        <div class="step hidden">
                            <h2 class="text-xl font-bold mb-4">Correct Answer</h2>
                            <input id="correct" type="text" class="w-full mb-4 border border-gray-300 p-2 rounded" value="${correctAnswer}">
                            <button class="prev-step bg-gray-500 text-white py-2 px-4 rounded">Previous</button>
                            <button class="next-step bg-blue-500 text-white py-2 px-4 rounded" onclick="vis()">Next</button>
                        </div>
                        <div class="step hidden">
                            <h2 class="text-xl font-bold mb-4">Visualize the Question</h2>
                            <div class="m-5 p-3 text-center">
                                <h1 id="vis-question" class="text-lg m-2 text-center"></h1>
                                <br><br>
                                <div id="vis-wrong-answers"></div>
                            </div>
                            <button class="prev-step bg-gray-500 text-white py-2 px-4 rounded">Previous</button>
                            <button class="submit bg-green-500 text-white py-2 px-4 rounded">Submit</button>
                        </div>
                    `;

                    const steps = document.querySelectorAll('.step');

                    function showStep(step) {
                        steps.forEach((s, index) => {
                            s.classList.toggle('hidden', index !== step);
                        });
                    }

                    document.querySelectorAll('.next-step').forEach(button => {
                        button.addEventListener('click', () => {
                            if (currentStep < steps.length - 1) {
                                currentStep++;
                                showStep(currentStep);
                            }
                        });
                    });

                    document.querySelectorAll('.prev-step').forEach(button => {
                        button.addEventListener('click', () => {
                            if (currentStep > 0) {
                                currentStep--;
                                showStep(currentStep);
                            }
                        });
                    });

                    document.querySelector('.submit').addEventListener('click', () => {
                        modal.classList.add('hidden');
                        const question = document.getElementById('question').value;
                        let wrongAnswers = Array.from(document.querySelectorAll('.wrong-answer')).map(input => input.value);
                        const correctAnswer = document.getElementById('correct').value;
                        wrongAnswers.push(correctAnswer);

                        // Update the selected question and answers
                        categoryData.questions.quests[selectedQuestionIndex] = question;
                        categoryData.questions.answers[selectedQuestionIndex] = wrongAnswers;
                        categoryData.questions.correct[selectedQuestionIndex] = wrongAnswers.length - 1; // Index of the correct answer

                        // Save the updated data to localStorage
                        localStorage.setItem("quizz", JSON.stringify(data));
                    });

                    // For demonstration, open the modal
                    modal.classList.remove('hidden');
                    showStep(currentStep);
                }
            });

            // For demonstration, open the modal
            modal.classList.remove('hidden');
        }
    }
}

const logout = document.getElementById("logoutButton");
logout.addEventListener("click", () => {
    localStorage.removeItem("current_user");
    window.location.href = "index.html";
});
