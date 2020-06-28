let validate =function()
{
    var entry = document.getElementById("entry").value;
    var entry = document.getElementById("entry").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById('lname').value;
    var DOB = document.getElementById('DOB').value;
    // var gender = document.getElementById('gender').value;
    // var gender = GENDER.options[GENDER.selectedIndex].value;
    // var gender1 = GENDER.options[GENDER.selectedIndex].text;
    var address = document.getElementById('address').value.trim().length;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var cpass = document.getElementById('cpass').value;
    var email = document.getElementById('email').value;
    var mob = document.getElementById('mob').value;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
   
   
    // if(entry=="")
    // {
    //     document.getElementById("a").innerHTML =" **please select the entry field";
    //     document.getElementById('entry').style.border="2px solid red";
    //     document.getElementById('a').style.color="red";
    //     return false;
    // }
       if(fname=="")
            {
                document.getElementById("a").innerHTML =" ";
                document.getElementById('entry').style.border="2px solid green";
                document.getElementById("1").innerHTML =" **please fill the first name field";
                document.getElementById('fname').style.border="2px solid red";
                document.getElementById('1').style.color="red";
                return false;
                
            }
        else if((fname.length <= 2) || (fname.length > 20))
            {
                document.getElementById('1').innerHTML =" ** first name length must be between 2 and 20";
                document.getElementById('fname').style.border="2px solid red"; 
                document.getElementById('1').style.color="red";
                return false;
            }
        else if(!isNaN(fname))
            {
                document.getElementById('1').innerHTML =" ** only letters are allowed";
                document.getElementById('fname').style.border="2px solid red";
                document.getElementById('1').style.color="red";
                return false;
            }
        else if(lname=="")
            {  
                document.getElementById('1').innerHTML ="";
                document.getElementById('fname').style.border="2px solid green";
                document.getElementById('2').innerHTML ="**please fill the last name field";
                document.getElementById('lname').style.border="2px solid red";
                document.getElementById('2').style.color="red";
                return false;
            }
        else if(!isNaN(lname))
            {
                document.getElementById('2').innerHTML =" ** only characters are allowed";
                document.getElementById('lname').style.border="2px solid red";
                document.getElementById('2').style.color="red";
                return false;
            }
        else if(DOB=="mm/dd/yyyy" || DOB=="")
            {
                document.getElementById('lname').style.border="2px solid green";
                document.getElementById('2').innerHTML ="";
                document.getElementById('2a').innerHTML ="**please select the date of birth";
                document.getElementById('DOB').style.border="2px solid red";
                document.getElementById('2a').style.color="red";
                return false;
            }
        //  else if(gender =="")
        //     { 
                
        //         document.getElementById('2b').innerHTML ="**please select the gender";
        //         document.getElementById('gender').style.border="2px solid red";
        //         document.getElementById('2b').style.color="red";
        //         return false;
        //     }
        else if(address<1)
            {
                document.getElementById('DOB').style.border="2px solid green";
                document.getElementById('2a').innerHTML ="";
                // document.getElementById('gender').style.border="2px solid green";
                // document.getElementById('2b').innerHTML ="";
                document.getElementById('2c').innerHTML="**please fill the address"; 
                document.getElementById('address').style.border="2px solid red";
                document.getElementById('2c').style.color="red";
                return false;
            }
        else if(username == "")
            {
                document.getElementById('address').style.border="2px solid green";
                document.getElementById('2c').innerHTML ="";
                document.getElementById('3').innerHTML ="**please fill the username field";
                document.getElementById('username').style.border="2px solid red";
                document.getElementById('3').style.color="red";
                return false;
            }
        else if((username.length <= 2) || (username.length > 20)) 
            {
        document.getElementById('3').innerHTML =" ** Username lenght must be between 2 and 20";
        document.getElementById('username').style.border="2px solid red";
        document.getElementById('3').style.color="red";
        return false;
         }
        else if(!isNaN(username))
            {
        document.getElementById('3').innerHTML =" ** only characters are allowed";
        document.getElementById('username').style.border="2px solid red";
        document.getElementById('3').style.color="red";
        return false;
            }
        else if(password == "")
            {
            document.getElementById('3').innerHTML ="";
            document.getElementById('username').style.border="2px solid green";
            document.getElementById('4').innerHTML ="**please fill the password field";
            document.getElementById('password').style.border="2px solid red";
            document.getElementById('4').style.color="red";
            return false;
            }
        else if(password.length<8) 
                {
            document.getElementById('4').innerHTML =" **poor Password.";
            document.getElementById('password').style.border="2px solid red";
            document.getElementById('4').style.color="red";
                if((!password.match(lowerCaseLetters))||(!password.match(numbers))|| (!password.match(upperCaseLetters)))
                    {
                    document.getElementById('4a').innerHTML = "***your password should contain at least one lower case letter ,one upper case letter  and one number.";                       
                    return false;
                }
                else   
                    {
                        document.getElementById('password').style.border="2px solid red";
                        document.getElementById('4a').innerHTML ="";
                        return false;
                    }
                        
                }
            else if((password.length>=8)&&(password.length <12))
                {
                    document.getElementById('4').innerHTML =" ** average password.";
                    document.getElementById('password').style.border="2px solid orange";
                    document.getElementById('4').style.color="orange";
                    if((!password.match(lowerCaseLetters))||(!password.match(numbers))|| (!password.match(upperCaseLetters)))
                        {
                        document.getElementById('4a').innerHTML = "***your password should contain at least one lower case letter ,one upper case letter  and one number.";                            
                        return false;
                    }
                    else   
                        {
                            document.getElementById('password').style.border="2px solid green";
                            document.getElementById('4a').innerHTML ="";
                            return false;
                        }	
                }
            else if(password.length >=12) 
                {
                            document.getElementById('4').innerHTML =" ** excellent password.";
                            document.getElementById('password').style.border="2px solid green";
                            document.getElementById('4').style.color="green";
                    if((!password.match(lowerCaseLetters))||(!password.match(numbers))|| (!password.match(upperCaseLetters)))
                        {
                        document.getElementById('4a').innerHTML = "***your password should contain at least one lower case letter ,one upper case letter  and one number.";    
                        return false;                      
                        }                                  
        else if(cpass == "")
            { 
                document.getElementById('password').style.border="2px solid green";
                document.getElementById('4a').innerHTML ="";
            document.getElementById('5').innerHTML ="**please fill the confirm password field";
            document.getElementById('cpass').style.border="2px solid red";
            document.getElementById('5').style.color="red";
            return false;
            }
        else if(password!=cpass)
            {
            document.getElementById('5').innerHTML =" ** Password does not match the confirm password";
            document.getElementById('cpass').style.border="2px solid red";
            document.getElementById('5').style.color="red";
            return false;
            }
        else if(email == "")
            {
                document.getElementById('5').innerHTML ="";
                document.getElementById('cpass').style.border="2px solid green"; 
            document.getElementById('6').innerHTML ="**please fill the e-mail field";
            document.getElementById('email').style.border="2px solid red";
            document.getElementById('6').style.color="red";
            return false;
            }
              
       else if(mob == "")
            {
            document.getElementById('7').innerHTML ="**please fill the mobile number field";
            document.getElementById('mob').style.border="2px solid red";
            document.getElementById('7').style.color="red";
            return false;
            } 
      
         else 
         {
             document.getElementById('7').style.border="2px solid green";
             document.getElementById('mob').innerHTML ="";
             alert("you have successfully registered");
             return true;
             
         } }
}
