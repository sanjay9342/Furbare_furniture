
//contact pages//

var form=document.getElementById("form")
var inputname=document.getElementById("inputname")
var inputemail=document.getElementById("inputemail")
var inputpass=document.getElementById("inputpass")
var inputcpass=document.getElementById("inputcpass")

form.addEventListener("submit",function (validation){
    validation.preventDefault();

    var name=document.getElementById("name").value.trim()
    var email=document.getElementById("email").value.trim()
    var pass=document.getElementById("pass").value.trim()
    var cpass=document.getElementById("cpass").value.trim()


if (name !==""||){
inputname.textContent = "name is required";
inputname.style.color=Red;

}

if (!email .includes("@")||" "){
inputemail.textContent="Entered the invalid email"
}

if (pass.length < 6||" "){
    inputpass.textContent="password must be atleast 6 charcters"
}
if(cpass !== pass ||" "){
    inputcpass.textContent="Password Doesnot match"
}

form.reset()

}
)
// contactpages//