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

var navbarHt = document.getElementById('navbar').offsetHeight;

function scrollto(id){
    // document.getElementById(id).scrollIntoView();

    const element = document.getElementById(id);
    const offset = document.getElementById('navbar').offsetHeight;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
    });

}