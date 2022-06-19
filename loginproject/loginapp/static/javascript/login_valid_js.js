function validation(){
    var status = 1
    email = document.getElementById('emailid')
    pass = document.getElementById('password')

    if(email.value == ""){
        document.getElementById('emailid').style.borderColor="red"
        document.getElementById('email_error').innerHTML="** Please Enter Your Email Id **"
        document.getElementById('email_error').style.color="red"
        document.getElementById('email_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('emailid').style.borderColor="black"
        document.getElementById('email_error').style.display="none"
        var status = 1
    }

    if(pass.value == ""){
        document.getElementById('password').style.borderColor="red"
        document.getElementById('password_error').innerHTML="** Please Enter Your Password **"
        document.getElementById('password_error').style.color="red"
        document.getElementById('password_error').style.display="block"
        var status = 0
    }

    else{
        document.getElementById('password').style.borderColor="black"
        document.getElementById('password_error').style.display="none"
        var static = 1
    }

    if(status == 0){
        return false
    }

    if(status == 1){
        return true
    }
}

function emailvalid(){
    email = document.getElementById('emailid').value

    if(email.length<5){
        document.getElementById('email_error').innerHTML="*** Please Enter A Valid Email Id ***"
        document.getElementById('email_error').style.color="red"
        document.getElementById('email_error').style.display="block"
    }

    else if(email.length>=7){
        document.getElementById('email_error').innerHTML="*** You Entered Perfect Email Id ***"
        document.getElementById('email_error').style.color="green"
        document.getElementById('email_error').style.display="block"
    }
    if(email.value == Number){
        document.getElementById('email_error').innerHTML="*** Please Enter A Valid Email Id ***"
        document.getElementById('email_error').style.color="red"
        document.getElementById('email_error').style.display="block"
    }

    if(email.length == 8){
        document.getElementById('email_error').innerHTML="*** Email Id Must End With @gmail.com ***"
        document.getElementById('email_error').style.color="red"
        document.getElementById('email_error').style.display="block"
    }
}

function passvalid(){
    pass = document.getElementById('password').value

    if(pass.length<5){
        document.getElementById('password_error').innerHTML="*** Password Must Have 8 Digits ***"
        document.getElementById('password_error').style.color="red"
        document.getElementById('password_error').style.display="block"
    }

    else if(pass.length>=8){
        document.getElementById('password_error').innerHTML="*** You Entered Perfect Password ***"
        document.getElementById('password_error').style.color="green"
        document.getElementById('password_error').style.display="block"
    }
}