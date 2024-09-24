document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("ty-section").style.display = "none";
    let botonsDiv = document.getElementById("div-botons");//.addEventListener("click", rating);
    let boto = botonsDiv.children;
    let selectedValue = null;
    for (let i = 0; i < boto.length; i++) {
        boto[i].addEventListener("click", function () {
            selectedValue = boto[i].value;
            console.log("Button selected " + selectedValue);
            selectedValue.style.background = "white";
            selectedValue.style.color = "#303845";


        });
    }
    document.getElementById("submit").addEventListener("click", function () {
        if (selectedValue !== null) {
            document.getElementById("numero").textContent = selectedValue;
            //hide rating section and show ty section
            document.getElementById("main1").style.display = "none";
            document.getElementById("footer").style.display = "none";
            document.getElementById("ty-section").style.display = "block";
        } else {
            alert("Please select an option.");
        }

    });

});