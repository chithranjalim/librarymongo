  
let validate = function()
{
    var title = document.getElementById("title").value;
    var author = document.getElementById('author').value;
    var genre = document.getElementById('genre').value;
    var bookno = document.getElementById('bookno').value;
    var image = document.getElementById('image').value;
    var image = document.getElementById('imageA').value;
    
        if(title=="")
            {
                document.getElementById("1").innerHTML =" **please fill the title field";
                document.getElementById('title').style.border="2px solid red";
                document.getElementById('1').style.color="red";
                return false;
                
            }
        else if(author=="")
            {  
                 document.getElementById('1').innerHTML ="";
                document.getElementById('title').style.border="2px solid green";
                document.getElementById('2').innerHTML ="**please fill author name";
                document.getElementById('author').style.border="2px solid red";
                document.getElementById('2').style.color="red";
                return false;
            }
        else if(genre == "")
            {
                document.getElementById('author').style.border="2px solid green";
                document.getElementById('2').innerHTML ="";
                document.getElementById('2b').innerHTML ="**please select the genre";
                document.getElementById('2b').style.color="red";
                return false;
            }
            else if(bookno== "")
            {  
                document.getElementById('2b').innerHTML ="";
                document.getElementById('3').innerHTML ="**please fill the book no.";
                document.getElementById('bookno').style.border="2px solid red";
                document.getElementById('3').style.color="red";
            return false;

            }
            else if(image=="")
            {  
                document.getElementById('3').innerHTML ="";
                document.getElementById('bookno').innerHTML ="**please select image";
                document.getElementById('image').style.border="2px solid red";
               
            return false;

            }
            else if(imageA=="")
            {  
                document.getElementById('4').innerHTML ="";
                document.getElementById('image').innerHTML ="**please select image";
                document.getElementById('imageA').style.border="2px solid red";
               
            return false;
            }
        else
            {
               
                document.getElementById('image').style.border="2px solid green";
                alert("you have successfully added the new book");
               return true;
                
            }        
}
    
    