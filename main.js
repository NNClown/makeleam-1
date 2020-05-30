var funcinputnum = function() {
    var name = document.forms.id_form.id_name.value;
    var email = document.forms.id_form.id_email.value;
    var content = document.forms.id_form.id_content.value;
    if(name.length == 0 
        && email.length == 0
        && content.length == 0){
            document.getElementById("submitbtn").classList.remove("is-valid");
            document.getElementById("submitbtn").classList.add("is-invalid");
        }
}
var funcPolicy = function () {
    var ch = document.getElementById("id_Policy").checked;
    if(ch == true){
        document.getElementById("submitbtn").disabled = false;
    }
    else{
        document.getElementById("submitbtn").disabled = true;
    }    
}