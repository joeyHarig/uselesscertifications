window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-149507678-1');

document.addEventListener('click', function(event) {
    if(event.target.name != null) {
        gtag('event', event.target.name, {});
    }
});