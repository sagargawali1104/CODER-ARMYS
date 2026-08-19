/* =========================================
   CODER ARMY
   DAILY PROBLEMS
========================================= */


/*
    CHANGE ONLY THIS SECTION
    WHEN YOU WANT NEW DAILY QUESTIONS.
*/


const dailyProblems = [

    {
        id: 3,
        date: "Day 2",
        title: "Find Smallest Element",
        topic: "Array Basics",
        difficulty: "Basic",
        platform: "GeeksforGeeks",
        description:
            "Find the smallest element in the given array.",
        link:
            "https://www.geeksforgeeks.org/problems/find-the-smallest-and-second-smallest-element-in-an-array3226/1"
    },

    {
        id: 4,
        date: "Day 2",
        title: "Find Largest Element",
        topic: "Array Basics",
        difficulty: "Basic",
        platform: "GeeksforGeeks",
        description:
            "Find the largest element present in the given array.",
        link:
            "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1"
    }

];


/* =========================================
   PREVIOUS QUESTIONS
========================================= */


const previousProblems = [

    {
        id: 101,
        date: "Day 1",
        title: "Print Elements of Array",
        topic: "Array Basics",
        difficulty: "Basic",
        platform: "GeeksforGeeks",
        link:
            "https://www.geeksforgeeks.org/problems/print-elements-of-array4910/1"
    },

    {
        id: 102,
        date: "Day 1",
        title: "Sum of Array",
        topic: "Array Basics",
        difficulty: "Basic",
        platform: "GeeksforGeeks",
        link:
            "https://www.geeksforgeeks.org/problems/sum-of-array2326/1"
    }

];


/* =========================================
   LOCAL STORAGE
========================================= */


/*
   IMPORTANT:
   This saves solved problems after refresh.
*/


let solvedProblems =
    JSON.parse(
        localStorage.getItem("solvedProblems")
    ) || [];


let members =
    JSON.parse(
        localStorage.getItem("coderArmyMembers")
    ) || [];


/* =========================================
   HTML ELEMENTS
========================================= */


const todayContainer =
    document.getElementById(
        "todayProblems"
    );


const previousContainer =
    document.getElementById(
        "previousProblems"
    );


/*
   Your HTML uses:
   <b id="solved">0</b>
*/


const solvedCount =
    document.getElementById(
        "solved"
    );


const memberCount =
    document.getElementById(
        "memberCount"
    );


const memberList =
    document.getElementById(
        "memberList"
    );


/* =========================================
   DISPLAY TODAY'S PROBLEMS
========================================= */


function displayTodayProblems() {

    todayContainer.innerHTML = "";


    dailyProblems.forEach(problem => {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "problem-card";


        const difficultyClass =
            problem.difficulty.toLowerCase();


        const isSolved =
            solvedProblems.includes(
                problem.id
            );


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
                <strong>
                    Platform:
                </strong>

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
                    class="problem-btn
                    ${isSolved ? "solved" : ""}"
                    onclick="markSolved(${problem.id})"
                >

                    ${
                        isSolved
                        ? "✓ Solved"
                        : "Mark Solved"
                    }

                </button>

            </div>

        `;


        todayContainer.appendChild(card);

    });


    updateSolvedCount();

}


/* =========================================
   MARK AS SOLVED
========================================= */


function markSolved(id) {

    /*
       Don't count the same problem twice.
    */


    if (
        !solvedProblems.includes(id)
    ) {

        solvedProblems.push(id);


        /*
           Save solved problems
           in browser.
        */


        localStorage.setItem(
            "solvedProblems",
            JSON.stringify(
                solvedProblems
            )
        );

    }


    /*
       Update website immediately.
    */


    updateSolvedCount();


    displayTodayProblems();

}


/* =========================================
   DISPLAY PREVIOUS PROBLEMS
========================================= */


function displayPreviousProblems() {

    previousContainer.innerHTML = "";


    previousProblems.forEach(
        problem => {

            const card =
                document.createElement(
                    "div"
                );


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


            previousContainer.appendChild(
                card
            );

        }
    );

}


/* =========================================
   SOLVED COUNTER
========================================= */


function updateSolvedCount() {

    /*
       Number of unique problems solved.
    */


    solvedCount.textContent =
        solvedProblems.length;

}


/* =========================================
   MEMBERS
========================================= */


function displayMembers() {

    memberList.innerHTML = "";


    members.forEach(member => {

        const div =
            document.createElement(
                "div"
            );


        div.className =
            "member";


        div.textContent =
            "⚔️ " + member;


        memberList.appendChild(
            div
        );

    });


    memberCount.textContent =
        members.length;

}


/* =========================================
   ADD MEMBER
========================================= */


document
    .getElementById("memberForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const input =
                document.getElementById(
                    "memberName"
                );


            const name =
                input.value.trim();


            if (name === "") {
                return;
            }


            members.push(name);


            localStorage.setItem(
                "coderArmyMembers",
                JSON.stringify(
                    members
                )
            );


            input.value = "";


            displayMembers();

        }
    );


/* =========================================
   DARK / LIGHT MODE
========================================= */


document
    .getElementById("themeBtn")
    .addEventListener(
        "click",
        function() {

            document.body.classList.toggle(
                "light"
            );


            if (
                document.body.classList.contains(
                    "light"
                )
            ) {

                this.textContent = "🌙";

            } else {

                this.textContent = "☀️";

            }

        }
    );


/* =========================================
   START WEBSITE
========================================= */


displayTodayProblems();

displayPreviousProblems();

displayMembers();

updateSolvedCount();