/*function f1(x,y)
{
  
    document.getElementById("para1").innerHTML=x+y;
    {
        document.getElementById("para2").innerHTML=x-y;
    }
}*/
function f1()
{
    const stud={rno:100,name:'vel',address:'3/22,street'}
    document.getElementById('para1').innerHTML=stud.rno+'    '+stud.name;
    stud.name='siva';
    document.getElementById('para2').innerHTML=stud.rno+'    '+stud.name;
    stud={e1:10}
    document.getElementById('para3').innerHTML=stud.e1;
}
 function f2(){
//     number=[100,200,300]
//     alert(number[2])
//     number[2]=1000
//     alert(number[2])
    // number[3]=500
//     alert(number[3])
//     alert(number[4])
    number2 = new Array(100,200,300);
    alert(number2[0])
    numbers=[]
    alert(numbers)
}
function regex(){
    let pattern=(/[a-zA-Z]/g);
    let input="x"
    
    
     alert(input.match(pattern));

if(pattern.match(input)==null)
{
    document.getElementById("para1").style.display=("block");
    document.getElementById("para1").innerHTML="pattern not match" ;
}
// else
//     alert(pattern.search(input));
}
