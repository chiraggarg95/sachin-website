function scroll1(no) {
    var elmnt = document.getElementById("pdt-"+no);
    elmnt.scrollIntoView();
  }

function hide() {
    elms = document.getElementsByClassName("indi-pdt");

    var i;
    for(i=0; i<elms.length; i++) {
        elms[i].classList.add("hide");
    }
}

function showInfo(num) {
    
    hide();

    var i;

    for(i=0; i<arguments.length; i++){
        name = "pdt-" + String(i);
        name = String(name);
        document.getElementById("pdt-"+arguments[i]).classList.remove("hide");
        // console.log('"' + name + '"');
    }

    document.getElementById("pdt-"+arguments[0]).scrollIntoView();
    
}