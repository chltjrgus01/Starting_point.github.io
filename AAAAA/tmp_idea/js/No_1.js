class Base {
    constructor() {
        this.base = document.createElement("div");
        this.base.id = "status_base";
        this.base.className = "status_base";
        document.body.appendChild(this.base);
        window.addEventListener("resize", this.resize.bind(this), {
            once: false,
            passive: false,
            capture: false,
        });

        this.resize();
    }

    resize() {
        this.stage_width = document.body.clientWidth;
        this.stage_height = document.body.clientHeight;


        this.base.style.width = this.stage_width + "px";
        this.base.style.height = this.stage_height + "px";

    }
}

window.onload = function() {
    var status_base = new Base();
}