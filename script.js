// Get elements from page :- 

let mainSection = document.getElementsByClassName("main-section")[0];
let selectValues = document.querySelectorAll("select");
let courseName = document.getElementsByClassName("course-name")
let creditValues = document.querySelectorAll('.credits');
let removeButton = document.querySelectorAll(".button");
let addCourse = document.getElementsByClassName("add-task")[0];
let rows = document.getElementsByClassName("rows")[0]
let showGrade = document.getElementsByClassName("show-grade")[0]
let divResult = document.querySelector(".zz");
let clearAll = document.querySelector(".hide")

function getElementsFromPage() {
    mainSection = document.getElementsByClassName("main-section")[0];
    selectValues = document.querySelectorAll("select");
    courseName = document.querySelectorAll(".course-name");
    creditValues = document.querySelectorAll('.credits');
    removeButton = document.querySelectorAll(".button");
    addCourse = document.getElementsByClassName("add-task")[0];
    rows = document.getElementsByClassName("rows")[0]
    showGrade = document.getElementsByClassName("show-grade")[0]
}

// num for future inputs id
let xx = 5

// initiate the main arrays 
let TotalGradePoints = [];
let TotalCreditHours = [];
let grade = [];
let credit = [];
let finalGradeResult = 0;
let finalCreditHours = 0;

function gitElementsCount() {
    TotalGradePoints.length = selectValues.length
    TotalCreditHours.length = creditValues.length;
    
    grade.length = selectValues.length;
    credit.length = creditValues.length;

    finalGradeResult = 0
    finalCreditHours = 0
}

function refreshValues() {
    // put all grades values in one main array
selectValues.forEach(function (ele, index) {
    gitElementsCount()
    ele.addEventListener("change", () => {
        grade[index] = ele.value
    })
})
// put all credit values in one main array
creditValues.forEach(function (ele, index) {
    gitElementsCount()
    ele.addEventListener("input", () => {
        credit[index] = ele.value
    })
})
}

// add course button
addCourse.addEventListener("click", () => {
    let newRow = document.createElement("div");
    newRow.className = "row"
    newRow.innerHTML = `<input type="text" class="course-name" id="course-name-${xx}" placeholder="Course Name">
                <select name="Letter-grade" id="Letter-grade-${xx}">
                    <option value="none" selected disabled hidden>Grade</option>
                    <option value="4">A+</option>
                        <option value="3.7">A</option>
                        <option value="3.4">A-</option>
                        <option value="3.2">B+</option>
                        <option value="3">B</option>
                        <option value="2.8">B-</option>
                        <option value="2.6">C+</option>
                        <option value="2.4">C</option>
                        <option value="2.2">C-</option>
                        <option value="2">D</option>
                </select>
                <input type="number" class="credits" id="credits-${xx}" placeholder="Credits">
                <div class="button">x</div>`
    // <div class="button">x</div>
    ++xx
    rows.appendChild(newRow)
    getElementsFromPage()
    gitElementsCount()
    removeCourse()
    refreshValues()
})

removeCourse()
// Remove courses from page
function removeCourse() {
    removeButton.forEach(function (ele, index) {
    ele.addEventListener("click", () => {
        ele.parentElement.remove()
        removeButton = document.querySelectorAll(".button");
        getElementsFromPage()
        gitElementsCount()
    } )
})
}

// TotalCreditHours

// Calculate the GPA button
showGrade.addEventListener("click", function () {
    console.log("zz")
    getElementsFromPage()
    gitElementsCount()
    let loopCount = TotalCreditHours.length
    let decide = false
    for (let i = 0; i < loopCount; i++) {
        if (selectValues[i].selectedIndex != 0 && creditValues[i].value != "") {
            TotalGradePoints[i] = +credit[i]
            console.log(credit[i])
            //
            console.log(TotalGradePoints[i])
            decide = true
            TotalCreditHours[i] = +grade[i] * +credit[i]
            //
            console.log(TotalCreditHours[i])
            let graderesult = TotalGradePoints.reduce(function (acc, current) {
                return acc + current
            })
            finalGradeResult = graderesult
            //
            console.log(finalGradeResult)
            
            let creditHours = TotalCreditHours.reduce(function (acc, current) {
                return acc + current
            })
            finalCreditHours = creditHours
            //
            console.log(finalCreditHours)
        }
        else {
            console.log(`element ${selectValues[i].ELEMENT_NODE} or ${creditValues[i].ELEMENT_NODE} is empty`)
        }
    }
    if (decide == true) {
        showFinal()
    } else {
        hideFinal()
    }
    clearAll.className = "remove-all"
})
clearAll.addEventListener(("click"), () => {
    getElementsFromPage()
    removeAll()
    hideFinal()
})
function showFinal() {
    divResult.className = "grade"
    console.log(finalCreditHours)
    console.log(finalGradeResult)
    divResult.innerHTML = `Your GPA Is : ${(finalCreditHours / finalGradeResult).toFixed(2)}`
    getElementsFromPage()
    gitElementsCount()
}
function hideFinal() {
    divResult.className = "zz";
    divResult.innerHTML = "";
}
function removeAll() {
    courseName.forEach(function (ele) {
        ele.value = ""
    })
    selectValues.forEach(function (ele) {
        ele.selectedIndex = 0
    })
    creditValues.forEach(function (ele) {
        ele.value = ""
    })
}