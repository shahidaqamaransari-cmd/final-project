/* =========================================================
   TAMEER-E-MILLAT SCHOOLING SYSTEM
   JAVASCRIPT
========================================================= */


/* =========================================================
   NAVIGATION MENU
========================================================= */

function toggleMenu() {

    const nav = document.getElementById("mainNav");

    if (nav) {

        nav.classList.toggle("mobile-open");

    }

}


/* =========================================================
   DARK MODE
========================================================= */

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    const darkMode =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "darkMode",
        darkMode ? "true" : "false"
    );

}


window.addEventListener("DOMContentLoaded", function () {

    const savedMode =
        localStorage.getItem("darkMode");

    if (savedMode === "true") {

        document.body.classList.add("dark-mode");

    }

});


/* =========================================================
   LOGIN TYPE
========================================================= */

function selectLoginType(type, button) {

    const tabs =
        document.querySelectorAll(".login-tab");

    tabs.forEach(function (tab) {

        tab.classList.remove("active");

    });


    button.classList.add("active");


    const userType =
        document.getElementById("userType");

    const title =
        document.getElementById("loginTitle");

    const description =
        document.getElementById("loginDescription");


    if (type === "student") {

        userType.value = "student";

        title.textContent = "Student Login";

        description.textContent =
            "Enter your student credentials to continue.";

    } else {

        userType.value = "teacher";

        title.textContent = "Teacher Login";

        description.textContent =
            "Enter your teacher credentials to continue.";

    }

}


/* =========================================================
   PASSWORD VISIBILITY
========================================================= */

function togglePassword() {

    const password =
        document.getElementById("password");

    if (!password) return;


    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }

}


/* =========================================================
   LOGIN
========================================================= */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const username =
                document.getElementById("username")
                    .value
                    .trim();

            const password =
                document.getElementById("password")
                    .value
                    .trim();

            const userType =
                document.getElementById("userType")
                    .value;

            const message =
                document.getElementById("loginMessage");


            /* DEMO ACCOUNTS */

            const studentUsername = "student";
            const teacherUsername = "teacher";

            const demoPassword = "12345";


            if (
                userType === "student" &&
                username === studentUsername &&
                password === demoPassword
            ) {

                localStorage.setItem(
                    "loggedIn",
                    "true"
                );

                localStorage.setItem(
                    "userType",
                    "student"
                );

                message.style.color = "#16a34a";

                message.textContent =
                    "Login successful! Opening student portal...";


                setTimeout(function () {

                    window.location.href =
                        "student-dashboard.html";

                }, 700);


            } else if (
                userType === "teacher" &&
                username === teacherUsername &&
                password === demoPassword
            ) {

                localStorage.setItem(
                    "loggedIn",
                    "true"
                );

                localStorage.setItem(
                    "userType",
                    "teacher"
                );

                message.style.color = "#16a34a";

                message.textContent =
                    "Login successful! Opening teacher portal...";


                setTimeout(function () {

                    window.location.href =
                        "teacher-dashboard.html";

                }, 700);


            } else {

                message.style.color = "#dc2626";

                message.textContent =
                    "Invalid username or password. Please try again.";

            }

        }
    );

}


/* =========================================================
   FORGOT PASSWORD
========================================================= */

function showForgotPassword() {

    alert(
        "For this assignment demo, please contact the school administrator to reset your password."
    );

}


/* =========================================================
   LOGOUT
========================================================= */

function logout() {

    localStorage.removeItem("loggedIn");

    localStorage.removeItem("userType");

    window.location.href = "index.html";

}


/* =========================================================
   SIDEBAR
========================================================= */

function toggleSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    if (sidebar) {

        sidebar.classList.toggle("mobile-open");

    }

}


/* =========================================================
   STUDENT DASHBOARD NAVIGATION
========================================================= */

function showStudentSection(section, button) {

    const sections =
        document.querySelectorAll(
            ".dashboard-section"
        );


    sections.forEach(function (item) {

        item.classList.remove("active");

    });


    const target =
        document.getElementById(
            "student-" + section
        );


    if (target) {

        target.classList.add("active");

    }


    const navItems =
        document.querySelectorAll(
            ".nav-item"
        );


    navItems.forEach(function (item) {

        item.classList.remove("active");

    });


    if (button) {

        button.classList.add("active");

    }


    updatePageTitle(section);


    closeMobileSidebar();

}


/* =========================================================
   TEACHER DASHBOARD NAVIGATION
========================================================= */

function showTeacherSection(section, button) {

    const sections =
        document.querySelectorAll(
            ".dashboard-section"
        );


    sections.forEach(function (item) {

        item.classList.remove("active");

    });


    const target =
        document.getElementById(
            "teacher-" + section
        );


    if (target) {

        target.classList.add("active");

    }


    const navItems =
        document.querySelectorAll(
            ".nav-item"
        );


    navItems.forEach(function (item) {

        item.classList.remove("active");

    });


    if (button) {

        button.classList.add("active");

    }


    updatePageTitle(section);


    closeMobileSidebar();

}


/* =========================================================
   PAGE TITLE
========================================================= */

function updatePageTitle(section) {

    const title =
        document.getElementById("pageTitle");

    if (!title) return;


    const titles = {

        overview: "Dashboard",

        attendance: "Attendance",

        timetable: "Class Timetable",

        assignments: "Assignments",

        results: "Academic Results",

        announcements: "Announcements",

        students: "My Students"

    };


    title.textContent =
        titles[section] || "Dashboard";

}


/* =========================================================
   CLOSE MOBILE SIDEBAR
========================================================= */

function closeMobileSidebar() {

    const sidebar =
        document.getElementById("sidebar");

    if (
        sidebar &&
        window.innerWidth <= 750
    ) {

        sidebar.classList.remove(
            "mobile-open"
        );

    }

}


/* =========================================================
   ADD ASSIGNMENT
========================================================= */

function addAssignment(event) {

    event.preventDefault();


    const title =
        document.getElementById(
            "assignmentTitle"
        );


    const message =
        document.getElementById(
            "newAssignmentMessage"
        );


    if (!title || !message) return;


    message.textContent =
        "✓ Assignment '" +
        title.value +
        "' has been published successfully!";


    title.value = "";


    setTimeout(function () {

        message.textContent = "";

    }, 4000);

}


/* =========================================================
   PUBLISH ANNOUNCEMENT
========================================================= */

function publishAnnouncement(event) {

    event.preventDefault();


    const title =
        document.getElementById(
            "announcementTitle"
        );


    const message =
        document.getElementById(
            "announcementMessage"
        );


    if (!title || !message) return;


    message.textContent =
        "✓ Announcement '" +
        title.value +
        "' has been published successfully!";


    title.value = "";


    document.getElementById(
        "announcementText"
    ).value = "";


    setTimeout(function () {

        message.textContent = "";

    }, 4000);

}


/* =========================================================
   ATTENDANCE BUTTONS
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList.contains(
                "attendance-btn"
            )
        ) {

            const button =
                event.target;


            if (
                button.classList.contains(
                    "present"
                )
            ) {

                button.classList.remove(
                    "present"
                );

                button.classList.add(
                    "absent"
                );

                button.textContent =
                    "Absent";

            } else {

                button.classList.remove(
                    "absent"
                );

                button.classList.add(
                    "present"
                );

                button.textContent =
                    "Present";

            }

        }

    }
);


/* =========================================================
   LOGIN PROTECTION
========================================================= */

function protectDashboard(requiredType) {

    const loggedIn =
        localStorage.getItem("loggedIn");

    const userType =
        localStorage.getItem("userType");


    if (
        loggedIn !== "true" ||
        userType !== requiredType
    ) {

        window.location.href =
            "login.html";

    }

}


if (
    window.location.pathname.includes(
        "student-dashboard.html"
    )
) {

    protectDashboard("student");

}


if (
    window.location.pathname.includes(
        "teacher-dashboard.html"
    )
) {

    protectDashboard("teacher");

}