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