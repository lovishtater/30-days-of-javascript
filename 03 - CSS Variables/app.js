const input = document.querySelectorAll(".controls input , .hl");

function changecss (){
    const suffix = this.dataset.sizing || `` ;
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

// input.forEach(input => input.addEventListener("change", changecss));
input.forEach(input=> input.addEventListener("mousemove",changecss));
