$(document).ready(function(){
    $("button").click(function(){
        //alert("Baby");
         var age = $("input").val();
         console.log(age);
         if (age >= 0 && age <= 2){
            console.log("baby");
            alert("baby");
        }
        else if (age >=3 && age <=12){
            console.log("child")
            alert("child");
        }
        else if (age >=13 && age <=19){
            console.log("Teen")
            alert("Teen");
        }
        else if (age>=20 && age <=80){
            console.log("Adult")
            alert("Adult")
        }
        else if (age>81){
            console.log("Senior Citizen")
            alert("Senior Citizen")
        }
    })
})