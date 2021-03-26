function s2(){
    document.getElementById("slider").src="img2.webp";
}

function s3(){
    document.getElementById("slider").src="img3.webp";
}

function s4(){
    document.getElementById("slider").src="img4.webp";
}

function s5(){
    document.getElementById("slider").src="img5.webp";
}

function s6(){
    document.getElementById("slider").src="img6.jpg";
}


setInterval(s2, 2000);
setInterval(s3, 4000);
setInterval(s4, 6000);
setInterval(s5, 8000);
setInterval(s6, 10000);



function toggleMenu(){
    const menuToggle = document.querySelector(".toggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active")
    navigation.classList.toggle("active")
}




