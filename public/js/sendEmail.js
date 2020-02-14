document.getElementById("sendEmail").onclick = ()=>{
    let from = document.getElementById("person").value
    let message = document.getElementById("message").value
    axios.get("https://api.ipify.org")
    .then(res=>{
        var ipv4=res.data;
        axios.get("https://api6.ipify.org")
        .then(res=>{
            axios.get("https://ip4.seeip.org/geoip")
            .then(res=>{
                var ipFull=res.data;
                Email.send({
                    SecureToken : "1c8a7432-7e18-4fd4-902c-f5ec98d761ff",
                    To : 'alexandrotapiaflores@gmail.com',
                    From : "notifymelocalhost@gmail.com",
                    Subject : "You have a new message from "+from +" through your website",
                    Body : from+" has written you a message with the following content:<br/><br/>"+message.replace(/\n/g,"<br/>")+"<br/><br/><hr/><br/>The user IP information is:<br/><br/>IPV4: "+ipv4+"<br/>IPV6: "+ipv6+"<br/>Full Ip Information: "+JSON.stringify(ipFull)+"<br/><hr/><br/>The user credentials are:<br/><br/>"+navigator.userAgent
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
            });
        });
    });
    document.getElementById("sendEmail").innerHTML = "<i class=\"fas fa-spinner\" id=\"sendingMessage\"></i>"
}
