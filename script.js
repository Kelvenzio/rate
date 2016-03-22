var Clicks = Math.ceil(9*Math.random());
var totaalScore = Clicks*Math.random()*5;
var Aantal = document.getElementById('aantal');
var Waardering = document.getElementById('waardering')
var Sterren = document.querySelectorAll('.geen');

function kSter(sterNummer, procent) {
    var naam = 's' + sterNummer;
    procent = Math.min(procent, 100);
    document.getElementById(naam).style.width = procent+'%';
}

function kSterren(waardering) {
    for(var i=1; i<6; i++) {
        kSter(i, waardering*100);
        waardering --;
    }
}

function uitvoer(){
    Aantal.innerHTML = Clicks;
    Waardering.innerHTML = Math.ceil(10*totaalScore/Clicks)/10;
    kSterren(Math.ceil(10*totaalScore/Clicks)/10);
}
uitvoer();

function Klik() {
    Clicks ++;
    var nummertje = this.getAttribute('data-role');
    totaalScore += parseInt(nummertje);
    uitvoer();
}
for(var i=0; i<Sterren.length; i++) {
    Sterren[i].addEventListener('click', Klik);
}