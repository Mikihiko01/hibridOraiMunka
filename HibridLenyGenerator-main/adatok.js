$(function () {
    const tanulo = [];
    const allat = [];
    const osszerendeles = [];

    //akkor történyen meg a  fálj betöltése ha meg változozot
    $("#osztalyvalaszto").on("change", function () {
        let faljnev = $("#osztalyvalaszto").val() + ".json";
        // let faljnev=$("#osztalyvalaszto option:selected").arrt("id")+".json";
        console.log(faljnev);
        //tanulo tömböt üriteni hf
        adatbeolvasas(faljnev, tanulo, allatbeolvas);


    });
    function allatbeolvas() {
        adatbeolvasas("adatok.json", allat, oszerendel);
    }



    function oszerendel() {
       // osszerendeles.splice(0,tomb.length);

        tanulo.forEach((elem) => {
            const obj = {};
            obj.nev = elem;
            let haromAllat = [];
            while (haromAllat.length < 3) {
                let rnd = Math.floor((Math.random() * allat.length));
                if (!haromAllat.includes(allat[rnd])) {
                    haromAllat.push(allat[rnd]);
                }
            }
            obj.haromAllat = haromAllat;
            osszerendeles.push(obj);
           
        });
        console.log(osszerendeles);
        megjelenit(osszerendeles);
    }
    function adatbeolvasas(faljnev, tomb, myCallback) {
        $.ajax(
            {
                url: faljnev,
                success: function (result) {
                  //  tomb.splice(0,tomb.length);
                    //beteszem a adatokat a tanulo tömbe
                    result.lista.forEach((elem) => {
                        tomb.push(elem);
                    });
                    console.log(tomb);
                    myCallback();
                }
            }
        );
    }


});