let user = JSON.parse(localStorage.getItem("current_user"));
let questAns = JSON.parse(localStorage.getItem("test"));
let selectedlevel = JSON.parse(localStorage.getItem("level"));
let selectedcategory = JSON.parse(localStorage.getItem("cat"));
let users = JSON.parse(localStorage.getItem("user_list"));


let testdate = Date.now();
let test = {
    dificulty: selectedlevel,
    attempts: 1,
    category: selectedcategory,
    date: testdate,
    score: 0,
    rapports: 
    {
      quests: questAns.quests,
      selectedAns: [],
      correctAns: questAns.correct,
      answer: questAns.answers,
    }
};

console.log(test);

// Shuffle questions and answers
for (let i = 0; i < questAns.quests.length; i++) {
    let randomPlace = Math.floor(Math.random() * questAns.quests.length);
    [questAns.quests[i], questAns.quests[randomPlace]] = [questAns.quests[randomPlace], questAns.quests[i]];
    [questAns.answers[i], questAns.answers[randomPlace]] = [questAns.answers[randomPlace], questAns.answers[i]];
    [questAns.correct[i], questAns.correct[randomPlace]] = [questAns.correct[randomPlace], questAns.correct[i]];
}

document.addEventListener("DOMContentLoaded", () => {
    // Variables and constants
    let htmlQuest = document.querySelector(".quest-quest");
    let htmlAnswers = document.querySelectorAll(".reponse");
    let next = document.querySelector(".suivant");
    let num = 0;
    let correctAns = 0;
    let clicked = false;
    let counter = 19;
    let htmlCounter = document.querySelector(".counter");
    let interval;

    async function showQuests(index) {
        counter = 20;
        htmlQuest.textContent = questAns.quests[index];
        htmlAnswers.forEach((ansHtml, ansIndex) => {
            ansHtml.textContent = questAns.answers[index][ansIndex];
            ansHtml.style.backgroundColor = "#004BAC";
        });

        document.querySelector(".score-counter").innerHTML = `${correctAns}/10`;
        document.querySelector(".quest-num").innerHTML = `Question ${num + 1}/10`;
        clearInterval(interval);
        await ansChosed();
    }

    function ansChosed() {
        return new Promise((resolve) => {
            htmlAnswers.forEach((ans, ansIndex) => {
                ans.addEventListener("click", () => {
                    if (!clicked) {
                        clearInterval(interval);
                        if (ansIndex == questAns.correct[num]) {
                            ans.style.backgroundColor = "green";
                            correctAns++;
                            test.score = correctAns; // Update test.score
                            localStorage.setItem("totalScore", correctAns);
                        } else {
                            ans.style.backgroundColor = "red";
                            htmlAnswers[questAns.correct[num]].style.backgroundColor = "green";
                        }
                        test.rapports.selectedAns.push(ansIndex);
                        clicked = true;
                        next.style.cursor = "pointer";
                        next.style.backgroundColor = "#004BAC";

                        if (num === questAns.quests.length - 1) {
                            updateUserTestInfo(); // Call function to handle end-of-test updates
                        }
                    }
                });
            });
            clicked = false;
            next.style.cursor = "no-drop";
            next.style.backgroundColor = "#ddd";

            interval = setInterval(() => {
                htmlCounter.textContent = `${counter} Sec`;
                counter--;
                if (counter < 0) {
                    counter = 19;
                    clicked = true;
                    clearInterval(interval);
                    htmlAnswers[questAns.correct[num]].style.backgroundColor = "green";
                    next.style.cursor = "pointer";
                    next.style.backgroundColor = "#004BAC";
                }
            }, 1000);

            next.addEventListener("click", () => {
                if (clicked) resolve();
            });
        });
    }

    function updateUserTestInfo() {
        let thescore = JSON.parse(localStorage.getItem("totalScore"));
        test.score = thescore;

        // Update category to true if the score is a perfect 10
        if (test.score === test.rapports.quests.length && user.niveau === selectedlevel) {
                if (selectedcategory == "Vocabulary") user.categorie.vocabulary = true;
                if (selectedcategory == "Grammar") user.categorie.grammar = true;
                if (selectedcategory == "Orthography") user.categorie.orthograph = true;
        }

        // Check if all categories are complete to increase the level
        if (user.categorie.vocabulary && user.categorie.grammar && user.categorie.orthograph && user.niveau < 6) {
            user.niveau++;
            user.categorie.vocabulary = false;
            user.categorie.grammar = false;
            user.categorie.orthograph = false;
        }

        // Update test attempts and save user data
        let existingTestIndex = user.tests.findIndex(testdata => 
            testdata.dificulty === selectedlevel && testdata.category === selectedcategory
        );

        if (existingTestIndex !== -1) {
            if (user.tests[existingTestIndex].score < 10) {
                test.attempts = user.tests[existingTestIndex].attempts + 1;
                user.tests[existingTestIndex] = test;
            }
        } else {
            user.tests.push(test);
        }

        localStorage.setItem("current_user", JSON.stringify(user));
        for (let i = 0; i < users.length; i++) {
            if (user.id == users[i].id) {
                users[i] = user;
            }
        }
        localStorage.setItem("user_list", JSON.stringify(users));
    }

    async function start() {
        while (num <= questAns.quests.length) {
            await showQuests(num);
            num++;

            if (num == questAns.quests.length - 1) {
                next.textContent = "See Result";
                next.style.cursor = "pointer";
                next.style.backgroundColor = "#004BAC";

                next.addEventListener("click", () => {
                    window.location.href = "./fin.html";
                });
            }
        }
    }
    start();
});
