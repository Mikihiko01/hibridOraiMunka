$(function () {
    // megjelenitjük a tömböket
    function megjelenit(tomb) {
        console.log(tomb);
        let txt = "";
        tomb.forEach(elem => {
            txt += "<div>" + elem.nev + "</div>";
            elem.haromAllat.forEach(allat=>{
                txt += "<div>" + allat + "</div>";
            });
        });
        $("section").append(txt);
    }
    window.megjelenit=megjelenit;
});


