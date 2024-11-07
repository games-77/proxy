var server = localStorage.getItem('server-node');
function getRandom(max) {
 return Math.floor(Math.random() * Math.floor(max)) + 1;
}  
if('server' === 'undefined){
getServer();
}
    function getServer(){
      localStorage.setItem('server-node', getRandom(1000000000000));
    var header = getRandom(8);
    if (header === 1){
      localStorage.setItem('domain', '.topvazgeo.online/launch.html?domain=);
                           }
      else if (header === 2){
        localStorage.setItem('domain', '.topvazgeo.site/launch.html?domain=);
    }
      else if (header === 3){
        localStorage.setItem('domain', '.mathsblog.online/launch.html?domain=);
                             }
      else if (header === 4){
        localStorage.setItem('domain', '.mathematicstopvaz.site/launch.html?domain=);
                             }
      else if (header === 5){
        localStorage.setItem('domain', '.topvazgeometry.online/launch.html?domain=);
                             }
      else if (header === 6){
        localStorage.setItem('domain', '.tvazgeometry.online/launch.html?domain=);
                             }
      else if (header === 7){
        localStorage.setItem('domain', '.tvazgeo.site/launch.html?domain=);
                             }
      else if (header === 8){
        localStorage.setItem('domain', '.tvazgeo.online/launch.html?domain=);
                            }
      else{
        localStorage.setItem('domain', '.topvazgeo.online/launch.html?domain=);
                             }
    }
