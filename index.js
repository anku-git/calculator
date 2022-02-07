function GradeCalculate() {
    let web = document.getElementById("web").value;
    let math = document.getElementById("math").value;
    let comp = document.getElementById("comp").value;
    let elec = document.getElementById("elec").value;
    let totalGrades = parseFloat(web) + parseFloat(math) + parseFloat(comp)
        + parseFloat(elec);
    // alert(totalGrades);
    let grades = "";
    let parc = (totalGrades / 400) * 100;
    // alert(parc);


    if (parc <= 100 && parc >= 80) {
        grades = "A";

    }
    else if (parc <= 79 && parc >= 60) {
        grades = "B";
    }
    else if (parc <= 59 && parc >= 40) {
        grades = "c";

    }
    else {
        grades = "F";
    }
    if(parc>=40){
document.getElementById("showData").innerHTML=`out of 400 your total
is  ${totalGrades} and precentage is  ${parc}  your grade is 
${grades}.you are pass.`
    }
else{
    document.getElementById("showData").innerHTML=`out of 400 your total
    is  ${totalGrades} and precentage is ${parc} your grade is 
    ${grades}.you are fail.`
}

}
function onlyNumberKey(evt) {
    var OnlyNum= (evt.which) ? evt.which : evt.keyCode
    if (OnlyNum > 31 && (OnlyNum < 48 || OnlyNum > 57))
        return false;
    return true;
}

