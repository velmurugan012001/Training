function BMI() {
    let w=document.getElementById("weight").value 
    let h=document.getElementById("height").value
    let bmi=w/h/100*h/100
    document.getElementById("BMI").value=bmi
    if(w==""){
        alert('please enter both weight & height');
    
    
    }

}