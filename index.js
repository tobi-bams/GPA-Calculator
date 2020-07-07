let rowBody = document.getElementById('rowMain');
let rows = document.getElementsByClassName('courseCode');
let creditUnitRow = document.getElementById('creditUnitRow');
let gradeRow = document.getElementById('gradeRow');
let grades = document.getElementsByClassName('grade');
let courseUnit = document.getElementsByClassName('creditUnit');
let resultView = document.getElementById('resultValue');

function addRows() {

    let newRow = document.createElement('INPUT');
    newRow.setAttribute("type", "text");
    newRow.setAttribute("placeholder", "Enter Course Code");
    newRow.className = "courseCode";


    /**
     Code for adding a new Credit Unit Element
     */
	
    let newCreditUnitRow = document.createElement('INPUT');
    newCreditUnitRow.setAttribute("type", "number");
    newCreditUnitRow.setAttribute("placeholder", "Enter Credit Unit");
    newCreditUnitRow.className = "creditUnit";

    /** Code for adding a new Grade Element */

    let newGradeRow = document.createElement('SELECT');
    newGradeRow.className = "grade";
    let newOption1 = document.createElement("OPTION");
    newOption1.value = "SELECT";
    newOption1.appendChild(document.createTextNode("--SELECT--"));


    let newOption2 = document.createElement("OPTION");
    newOption2.value = "A";
    newOption2.appendChild(document.createTextNode("A"));


    let newOption3 = document.createElement("OPTION");
    newOption3.value = "B";
    newOption3.appendChild(document.createTextNode("B"));


    let newOption4 = document.createElement("OPTION");
    newOption4.value = "C";
    newOption4.appendChild(document.createTextNode("C"));


    let newOption5 = document.createElement("OPTION");
    newOption5.value = "D";
    newOption5.appendChild(document.createTextNode("D"));


    let newOption6 = document.createElement("OPTION");
    newOption6.value = "E";
    newOption6.appendChild(document.createTextNode("E"));


    let newOption7 = document.createElement("OPTION");
    newOption7.value = "F";
    newOption7.appendChild(document.createTextNode("F"));
    

    newGradeRow.appendChild(newOption1);
    newGradeRow.appendChild(newOption2);
    newGradeRow.appendChild(newOption3);
    newGradeRow.appendChild(newOption4);
    newGradeRow.appendChild(newOption5);
    newGradeRow.appendChild(newOption6);
    newGradeRow.appendChild(newOption7);

    /** Code For appending the rows when they are clicked */

    rowBody.appendChild(newRow);
    creditUnitRow .appendChild(newCreditUnitRow);
    gradeRow.appendChild(newGradeRow);

}

function calculate(){
    let totalCreditUnit = 0;
    let totalCreditGrade = 0;

    for(i = 0; i < rows.length; i++){
        let rowValue =rows[i].value;
        let creditValue = courseUnit[i].value;
        let gradeValue = grades[i].value;

        if(gradeValue === "A"){
            gradeValue = 5;
        }

        else if(gradeValue === "B"){
            gradeValue  = 4;
        }

        else if(gradeValue === "C"){
            gradeValue  = 3;
        }

        else if(gradeValue === "D"){
            gradeValue  = 2;
        }

        else if(gradeValue === "E"){
            gradeValue  = 1;
        }

        else {
            gradeValue  = 0;
        }
        
        if(creditValue === ""){
            creditValue = 0;
        }
        
        let numCreditValue = parseInt(creditValue);

        let gradeNumericValue = creditValue * gradeValue;
        
        totalCreditUnit += numCreditValue;

        totalCreditGrade += gradeNumericValue;

    }
    let result;
    if(totalCreditGrade === 0 || (totalCreditGrade === 0 && totalCreditUnit=== 0)){
        result = "0.00";
    }
  
    else{
        let gpa = totalCreditGrade/totalCreditUnit;
         result = gpa.toFixed(2);
    }
   
    resultView .innerHTML = result;
}

function resetForm(){
    rowBody.reset();
    creditUnitRow.reset();
    gradeRow.reset();

}