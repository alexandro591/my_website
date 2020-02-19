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
            Subject : "You have a new visitor on your website",
            Body : "A user has visited your website. The user IP information is:<br/><br/>IPV4: "+ipv4+"<br/><br/>IPV6: "+ipv6+"<br/><br/><hr/><br/>The user credentials are:<br/><br/>"+navigator.userAgent+"<br/><br/>"+location.href.replace(".","*")
        });
    });
})