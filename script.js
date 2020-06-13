

var body = document.body;

//Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
   var password = generatePassword()
   //alert(password);
   var passwordText = document.querySelector("#password");

   passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//  prompt user for asking length, upppecase, lowercase,numeric and sprecial character to genrate password.

function generatePassword(){
  var result="";

  // when user click generate button  promp user what length you want to be your password. 

  var passwordLength = prompt("What length you would line in your password. It should be 8 character and maximum 128")



//  Prompt user what character you want in lowercase a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z and store the result in variable.
  var lowecaseChar = prompt("What lowercase character you want to be in your password, Select options: a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z")

  // Prompt user what character you want in uppercase A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z and store the result in variable.
  var upercaseChar = prompt("What Uppercase character you want to be in your password, Select options: A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z")

  // // Prompt user what numeric value you want in your password. choose 0,1,2,3,4,5,6,7,8,9 and store the result in variable
  var number = prompt("What numeric value you want to be in your password, Select options 0,1,2,3,4,5,6,7,8,9")

// // Prompt user what character value you want in your password. choose !,@,#,$,%,&,

  var specialCharacter=prompt("what special character you want in your password selec option !,@,#,$,%,&")

  //  store user input in variable called final

  var final=lowecaseChar+upercaseChar+number+specialCharacter;
  var charLength=final.length;

  //   use for loop to select rendom charater and numbe and retutn the result.

  for ( var i = 0; i < passwordLength; i++ ) {
    result += final.charAt(Math.floor(Math.random() * charLength));
 }
  return result;
}