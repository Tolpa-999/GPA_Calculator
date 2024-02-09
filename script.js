// Get elements from page :- 
let mainSection = document.getElementsByClassName("main-section")[0];
let selectValues = document.querySelectorAll("select");
let creditValues = document.querySelectorAll('.credits');
let divResult = document.createElement("div");
let removeButton = document.querySelectorAll(".button");
let addCourse = document.getElementsByClassName("add-task")[0];
let rows = document.getElementsByClassName("rows")[0]

let xx = 5

let TotalGradePoints = [];
TotalGradePoints.length = selectValues.length

let TotalCreditHours = [];
TotalCreditHours.length = creditValues.length;

let grade = [];
grade.length = selectValues.length;

let credit = [];
credit.length = creditValues.length

let finalGradeResult = 0
let finalCreditHours = 0


selectValues.forEach(function (ele, index) {
    ele.addEventListener("change", () => {
        grade[index] = ele.value
    })
})

creditValues.forEach(function (ele, index) {
    ele.addEventListener("input", () => {
        credit[index] = ele.value
    })
})

selectValues.forEach(function (ele, index) {
    ele.addEventListener("change", () => {
        if (grade[index] != null && credit[index] != null) {
            TotalGradePoints[index] = +credit[index];
            // console.log(TotalGradePoints)
            TotalCreditHours[index] = grade[index] * credit[index]
            // console.log(TotalCreditHours)
            TotalCreditHours[index] = grade[index] * credit[index]
            let graderesult = TotalGradePoints.reduce(function (acc, current) {
                return acc + current
            })
            finalGradeResult = graderesult
            
            let creditHours = TotalCreditHours.reduce(function (acc, current) {
                return acc + current
            })
            finalCreditHours = creditHours

            final()
    }
    })
})



creditValues.forEach(function (ele, index) {
    ele.addEventListener("input", () => {
        if (grade[index] != null && credit[index] != null) {
            TotalGradePoints[index] = +credit[index];
            // console.log(TotalGradePoints)
            TotalCreditHours[index] = grade[index] * credit[index]
            let graderesult = TotalGradePoints.reduce(function (acc, current) {
                return acc + current
            })
            finalGradeResult = graderesult
            
            let creditHours = TotalCreditHours.reduce(function (acc, current) {
                return acc + current
            })
            finalCreditHours = creditHours

            // console.log(finalGradeResult)
            // console.log(finalCreditHours)
            final()
        }
    })
})


function final() {
    divResult.textContent = "";
    divResult.className = "none"

    divResult.className = "grade";
    divResult.appendChild(document.createTextNode(`Your GPA Is : ${(finalCreditHours / finalGradeResult).toFixed(2)}`))
    if (finalGradeResult == 0 || finalCreditHours == 0) {
        divResult.remove()
    } else {
        mainSection.appendChild(divResult)
    }
}

removeButton.forEach(function (ele, index) {
    ele.addEventListener("click", () => {
        ele.parentElement.remove()

        selectValues.forEach(function (ele, index) {
    ele.addEventListener("change", () => {
        grade[index] = ele.value
    })
})

creditValues.forEach(function (ele, index) {
    ele.addEventListener("input", () => {
        credit[index] = ele.value
    })
})
        
    } )
})


addCourse.addEventListener("click", () => {
    let newRow = document.createElement("div");
    newRow.className = "row"
    newRow.innerHTML = `                <input type="text" class="course-name" id="course-name-${xx}" placeholder="Course Name">
                <select name="Letter-grade" id="Letter-grade-${xx}">
                    <option value="none" selected disabled hidden>Grade</option>
                    <option value="4">A</option>
                    <option value="3.7">A-</option>
                    <option value="3.3">B+</option>
                    <option value="3">B</option>
                    <option value="2.7">B-</option>
                    <option value="2.3">C+</option>
                    <option value="2">C</option>
                    <option value="1.7">C-</option>
                    <option value="1.3">D+</option>
                    <option value="1">D</option>
                    <option value="0.7">D-</option>
                    <option value="0">F</option>
                </select>
                <input type="number" class="credits" id="credits-${xx}" placeholder="Credits">
                <div class="button">x</div>`
    ++xx
    rows.appendChild(newRow)

    selectValues = document.querySelectorAll("select");
    creditValues = document.querySelectorAll('.credits');
    divResult = document.createElement("div");
    removeButton = document.querySelectorAll(".button");

    TotalGradePoints.length = selectValues.length
    TotalCreditHours.length = creditValues.length;
    grade.length = selectValues.length;
    credit.length = creditValues.length
    // refresh();


    selectValues.forEach(function (ele, index) {
    ele.addEventListener("change", () => {
        grade[index] = ele.value
    })
    })

creditValues.forEach(function (ele, index) {
    ele.addEventListener("input", () => {
        credit[index] = ele.value
    })
})

selectValues.forEach(function (ele, index) {
    ele.addEventListener("change", () => {
        if (grade[index] != null && credit[index] != null) {
            TotalGradePoints[index] = +credit[index];
            // console.log(TotalGradePoints)
            TotalCreditHours[index] = grade[index] * credit[index]
            // console.log(TotalCreditHours)
            TotalCreditHours[index] = grade[index] * credit[index]
            let graderesult = TotalGradePoints.reduce(function (acc, current) {
                return acc + current
            })
            finalGradeResult = graderesult
            
            let creditHours = TotalCreditHours.reduce(function (acc, current) {
                return acc + current
            })
            finalCreditHours = creditHours
            final()
    }
    })
})



creditValues.forEach(function (ele, index) {
    ele.addEventListener("input", () => {
        if (grade[index] != null && credit[index] != null) {
            TotalGradePoints[index] = +credit[index];
            // console.log(TotalGradePoints)
            TotalCreditHours[index] = grade[index] * credit[index]
            let graderesult = TotalGradePoints.reduce(function (acc, current) {
                return acc + current
            })
            finalGradeResult = graderesult
            
            let creditHours = TotalCreditHours.reduce(function (acc, current) {
                return acc + current
            })
            finalCreditHours = creditHours

            final()
        }
    })
})


// function final() {
//     divResult.textContent = "";
//     divResult.className = "none"

//     divResult.className = "grade";
//     console.log(finalGradeResult)
//     console.log(finalCreditHours)
//     divResult.appendChild(document.createTextNode(`Your GPA Is : ${(finalCreditHours / finalGradeResult).toFixed(2)}`))
//     if (finalGradeResult == 0 || finalCreditHours == 0) {
//         divResult.remove()
//     } else {
//         mainSection.appendChild(divResult)
//     }
// }

    removeButton.forEach(function (ele, index) {
    ele.addEventListener("click", () => {
        ele.parentElement.remove()
    })
        
    
})
})
