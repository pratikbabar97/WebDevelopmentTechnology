function validateName(id, errid) {
    // alert("Hi");
    var name = document.getElementById(id).value;
    if (name.trim().length > 0) {
        document.getElementById(errid).innerHTML = "";
        console.log("username is"+name)
        return true;
    }
    else {
        document.getElementById(errid).innerHTML = "enter the validate username"
        // alert()
        return false;
    }
}
function validateMobileNo( id,errid)
{
    var num = document.getElementById(id).value
    var rgx = /^[0-9]{10}$/;
    if(rgx.test(num))
        {
            document.getElementById(errid).innerHTML = "";
            return true;
        }   
    document.getElementById(errid).innerHTML="Invalid Number";
    return false;

}
function validateAddress (id,errid)
{
    var address=document.getElementById(id).value
    if(address.trim().length>0)
        {
            document.getElementById(errid).innerHTML="";
            return  true;
        }
        document.getElementById(errid).innerHTML="enter valid address.."
        return false;
}
function validateGender(id,errid)
{
 var garr= document.getElementsByName(id);
 for(var i=0;i<garr.length;i++)
    {
      if(garr[i].checked) 
        {document.getElementById(errid).innerHTML="";
            return true;
        }
    }
    document.getElementById(errid).innerHTML="Gender not selected..."
    return false;
}
function validateDegree(id,errid)
{
 var degree=document.getElementsByName(id);
 for( var i=0;i<degree.length;i++)
    {
       if(degree[i].checked)
        {
            document.getElementById(errid).innerHTML="";
            return true;
        }
    }
    document.getElementById(errid).innerHTML="Degrree not selected.."
    return false;
} 
function validateSkills(id ,errid)
{ 
    var skills = document.getElementsByName(id);
    var skillCount=0;
     for(var i=0;i<skills.length;i++)
        {
            if(skills[i].checked)
                {
                  skillCount++;
                  if(skillCount>=2)
                    {
                        document.getElementById(errid).innerHTML="";
                        return true;
                    }
                }
        }
        document.getElementById(errid).innerHTML="not qualified for job..." ;
        return false;
}
function validateCity( id,errid)
{
    var temp =document.getElementById(id);
    // var city=temp.options[temp.selectedIndex].value;
    if(temp.selectedIndex !=0){
        document.getElementById(errid).innerHTML="";
        return true;
        alert("form submitted successfully");
    }
    document.getElementById(errid).innerHTML="city not selected.."
    return false;
}

function validatedetails() {
                             // string of id  from input box and error id from error table data 
    var flag1 = validateName("name", "errname")
    var flag2 = validateMobileNo("mobileno", "errno")
    var flag3 = validateAddress("adress", "erradr")
    var flag4 = validateGender("gender", "errgen")
     var flag5 = validateDegree("degree", "errdegree")
    var flag6 = validateSkills("skills", "errskills")
    var flag7 = validateCity("city", "errcity")
    // return flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7
    return flag1 && flag2 && flag3 && flag4 && flag5 && flag6 && flag7;
}