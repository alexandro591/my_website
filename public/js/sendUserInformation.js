axios.get("https://api.ipify.org")
.then(res=>{
    var ipv4=res.data;
    axios.get("https://api6.ipify.org")
    .then(res=>{
        var ipv6=res.data;
        axios.get("https://ip4.seeip.org/geoip")
        .then(res=>{
            var ipFull=res.data;
            Email.send({
                SecureToken : "1c8a7432-7e18-4fd4-902c-f5ec98d761ff",
                To : 'alexandrotapiaflores@gmail.com',
                From : "notifymelocalhost@gmail.com",
                Subject : "You have a new visitor on your website",
                Body : "The user IP information is:<br/><br/>IPV4: "+ipv4+"<br/>IPV6: "+ipv6+"<br/>Full Ip Information: "+JSON.stringify(ipFull)+"<br/><hr/><br/>The user credentials are:<br/><br/>"+navigator.userAgent
            });
        });
    });
});