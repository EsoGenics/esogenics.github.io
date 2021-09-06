(document.getElementsByTagName('a'), function(e){
    e.preventDefault();
    e.onclick(alert('demo'));
})();