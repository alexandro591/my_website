document.getElementById("sendEmail").onclick = ()=>{
let from = document.getElementById("person").value
let message = document.getElementById("message").value
Email.send({
    SecureToken : "1c8a7432-7e18-4fd4-902c-f5ec98d761ff",
    To : 'alexandrotapiaflores@gmail.com',
    From : "notifymelocalhost@gmail.com",
    Subject : "You have a new message from "+from +" through your website",
    Body : message.replace(/\n/g,"<br/>")
    }).then(
        message => {
            if(message==="OK"){
                alert("message sent succesfully")
            }
            else{
                alert("there was an error, please try again")
            }
            document.getElementById("sendEmail").innerHTML = "Send Message"
        }
    );
    document.getElementById("sendEmail").innerHTML = "<i class=\"fas fa-spinner\" id=\"sendingMessage\"></i>"
}