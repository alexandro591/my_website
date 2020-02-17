document.getElementById("sendEmail").onclick = ()=>{
    let from = document.getElementById("person").value
    let message = document.getElementById("message").value
    if(message==="" || message===undefined || message===null || from==="" || from===undefined || from===null){
        alert("Please, fill all the elements.")
        return null;
    }
    var ipv4="";
    var ipv6="";
    axios.get("https://ip4.seeip.org/geoip")
    .then(res=>{
        ipv4=res.data;
        try {ipv4=JSON.stringify(ipv4)} 
        catch {}
    })
    .catch()
    .finally(()=>{
        axios.get("https://ip6.seeip.org/geoip")
        .then(res=>{
            ipv6=res.data;
            try {ipv6=JSON.stringify(ipv6)} 
            catch {}
        })
        .catch()
        .finally(()=>{
            Email.send({
                SecureToken : "1c8a7432-7e18-4fd4-902c-f5ec98d761ff",
                To : 'alexandrotapiaflores@gmail.com',
                From : "notifymelocalhost@gmail.com",
                Subject : "You have a new message from "+from +" through your website",
                Body : from+" has written you a message with the following content:<br/><br/>"+message.replace(/\n/g,"<br/>")+"<br/><br/><hr/><br/>The user IP information is:<br/><br/>IPV4: "+ipv4+"<br/><br/>IPV6: "+ipv6+"<br/><hr/><br/>The user credentials are:<br/><br/>"+navigator.userAgent
            }).then(
                message => {
                    if(message==="OK"){
                        alert("message sent succesfully")
                    }
                    else{
                        alert("there was an error, please try again")
                    }
                    document.getElementById("sendEmail").innerHTML = "Send Message";
                    document.getElementById("person").value = "";
                    document.getElementById("message").value = "";
                }
            );
        });
    });
    document.getElementById("sendEmail").innerHTML = "<i class=\"fas fa-spinner\" id=\"sendingMessage\"></i>"
}
