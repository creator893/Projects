var guess = Math.floor(Math.random()*100)+1; 

function response()
{
  var n = document.getElementById("in").value;
  if(n == guess)
    document.getElementById('out').innerHTML = "CONGRATS! GOT IT CORRECTLY!";
  else if(n > guess)
    document.getElementById('out').innerHTML = "GUESS A SMALLER NUMBER";
  else 
    document.getElementById('out').innerHTML="GUESS A GREATER NUMBER"
}