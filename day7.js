/* =========================================
   CODER ARMY
   DAILY PROBLEMS
========================================= */


/* =========================================
   DAY 2 QUESTIONS
========================================= */

const dailyProblems = [

 {
    id: 5,
    date: "Day 3",
    title: "Second Largest Element",
    topic: "Array Basics",
    difficulty: "Easy",
    platform: "GeeksforGeeks",
    link:
        "https://www.geeksforgeeks.org/problems/second-largest3735/1"
},

{
    id: 6,
    date: "Day 3",
    title: "Reverse an Array",
    topic: "Array Basics",
    difficulty: "Easy",
    platform: "GeeksforGeeks",
    link:
        "https://www.geeksforgeeks.org/problems/reverse-an-array/1"
},

];


/* =========================================
   PREVIOUS QUESTIONS
========================================= */

const previousProblems = [

    {
        id: 1,
        date: "Day 1",
        title: "Print Elements of Array",
        topic: "Array Basics",
        difficulty: "Basic",
        platform: "GeeksforGeeks",
        link:
            "https://www.geeksforgeeks.org/problems/print-elements-of-array4910/1"
    },

    {
        id: 2,
        date: "Day 1",
        title: "Sum of Array",
        topic: "Array Basics",
        difficulty: "Basic",
        platform: "GeeksforGeeks",
        link:
            "https://www.geeksforgeeks.org/problems/sum-of-array2326/1"
    },
    {
        id: 3,
        date: "Day 2",
        title: "Find Maximum Element",
        topic: "Array Basics",
        difficulty: "Basic",
        platform: "GeeksforGeeks",
        description:
            "Find the maximum element in the given array.",
        link:
            "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1"
    },

    {
        id: 4,
        date: "Day 2",
        title: "Find Minimum Element",
        topic: "Array Basics",
        difficulty: "Basic",
        platform: "GeeksforGeeks",
        description:
            "Find the minimum element in the given array.",
        link:
            "https://www.geeksforgeeks.org/problems/min-element-in-array/1"
    }

];


/* =========================================
   LOCAL STORAGE
========================================= */

let solvedProblems =
    JSON.parse(
        localStorage.getItem("solvedProblems")
    ) || [];


/* =========================================
   HTML ELEMENTS
========================================= */

const todayContainer =
    document.getElementById("todayProblems");

const previousContainer =
    document.getElementById("previousProblems");

const solvedCount =
    document.getElementById("solvedCount");

const memberCount =
    document.getElementById("memberCount");

const memberList =
    document.getElementById("memberList");

const themeBtn =
    document.getElementById("themeBtn");


/* =========================================
   DISPLAY TODAY'S PROBLEMS
========================================= */

function displayTodayProblems() {

    if (!todayContainer) {
        return;
    }

    todayContainer.innerHTML = "";


    dailyProblems.forEach(problem => {

        const card =
            document.createElement("article");


        card.className =
            "problem-card";


        const difficultyClass =
            problem.difficulty.toLowerCase();


        const isSolved =
            solvedProblems.includes(problem.id);


        card.innerHTML = `

            <div class="problem-top">

                <span class="difficulty ${difficultyClass}">
                    ${problem.difficulty}
                </span>

                <span>
                    ${problem.topic}
                </span>

            </div>


            <h3>
                ${problem.title}
            </h3>


            <p>
                ${problem.description}
            </p>


            <p>
                <strong>Platform:</strong>
                ${problem.platform}
            </p>


            <div class="problem-buttons">

                <a
                    href="${problem.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="problem-btn"
                >
                    Open Problem ↗
                </a>


                <button
                    class="problem-btn ${isSolved ? "solved" : ""}"
                    onclick="markSolved(${problem.id})"
                >
                    ${isSolved ? "✓ Solved" : "Mark Solved"}
                </button>

            </div>

        `;


        todayContainer.appendChild(card);

    });

}


/* =========================================
   MARK AS SOLVED
========================================= */

function markSolved(id) {

    if (!solvedProblems.includes(id)) {

        solvedProblems.push(id);


        localStorage.setItem(
            "solvedProblems",
            JSON.stringify(solvedProblems)
        );

    }


    displayTodayProblems();

}


/* =========================================
   DISPLAY PREVIOUS PROBLEMS
========================================= */

function displayPreviousProblems() {

    if (!previousContainer) {
        return;
    }

    previousContainer.innerHTML = "";


    previousProblems.forEach(problem => {

        const card =
            document.createElement("div");


        card.className =
            "previous-card";


        card.innerHTML = `

            <div>

                <h3>
                    ${problem.title}
                </h3>

                <p>
                    ${problem.date}
                    ·
                    ${problem.topic}
                    ·
                    ${problem.difficulty}
                    ·
                    ${problem.platform}
                </p>

            </div>


            <div>

                <a
                    href="${problem.link}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="problem-btn"
                >
                    Practice ↗
                </a>

                <span class="status">
                    ✓ Available
                </span>

            </div>

        `;


        previousContainer.appendChild(card);

    });

}


/* =========================================
   PROBLEMS SOLVED COUNTER
   ALWAYS SHOW 2
========================================= */

function updateSolvedCount() {

    if (!solvedCount) {
        return;
    }

    solvedCount.textContent = "2";

}


/* =========================================
   FIXED 4 MEMBERS
========================================= */

const members = [

    "Sagar Gawali",

    "Member 2",

    "Member 3",

    "Member 4"

];


function displayMembers() {

    if (!memberList) {
        return;
    }

    memberList.innerHTML = "";


    members.forEach(member => {

        const div =
            document.createElement("div");


        div.className =
            "member";


        div.textContent =
            "⚔️ " + member;


        memberList.appendChild(div);

    });


    if (memberCount) {

        memberCount.textContent =
            members.length;

    }

}


/* =========================================
   DARK / LIGHT MODE
========================================= */

if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        function() {

            document.body.classList.toggle("light");


            if (
                document.body.classList.contains("light")
            ) {

                this.textContent = "☀️";

            } else {

                this.textContent = "🌙";

            }

        }
    );

}


/* =========================================
   START WEBSITE
========================================= */

displayTodayProblems();

displayPreviousProblems();

displayMembers();

updateSolvedCount();