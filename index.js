window.onload = async function() {
    let package = await fetch("http://localhost:63342/recupero4A/server/stanze.php", {method: "GET"});
    let response = await package.json();

    if(response.cod == 0){
        console.log(response.stanze);

        for(let stanza of response.stanze){
            let card = `<div class="card">
                                    <img src="img/camera.png">
                                    <div class="dettagli">
                                        <div>
                                            <input type="checkbox" id="checkTv1" ${(stanza.tv == 1) ? "checked" : ""}>
                                            <label for="checkTv1">
                                                <span class="material-symbols-outlined">tv</span>
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="checkBalcone1" ${(stanza.balcone == 1) ? "checked" : ""}>
                                            <label for="checkBalcone1">
                                                <span class="material-symbols-outlined">balcony</span>
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="checkMare1" ${(stanza.vistaMare == 1) ? "checked" : ""}>
                                            <label for="checkMare1">
                                                <span class="material-symbols-outlined">beach_access</span>
                                            </label>
                                        </div>
                                        <div>
                                            <input type="checkbox" id="checkMatrimoniale1" ${(stanza.matrimoniale == 1) ? "checked" : ""}>
                                            <label for="checkMatrimoniale1">
                                                <span class="material-symbols-outlined">bed</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>`;
            document.getElementById("cardGroup").innerHTML+=card;
        }

    }
    else{
        console.log("Il tuo codice fa cagare coglione -> " + response.desc);
    }


}



/*

 */