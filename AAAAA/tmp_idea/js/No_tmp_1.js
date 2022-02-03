class status_window {
    constructor(health, stamina) {
        this.status_cover = document.createElement("div");
        this.status_cover.id = 'status_cover';
        this.status_cover.className = 'status_cover';
        document.body.appendChild(this.status_cover);

        this.health = health;
        this.current_H = health; 

        this.stamina = stamina;
        this.current_S = stamina; 
    }

    add_element(H_bar, S_bar) {
        this.status_cover.appendChild(H_bar);
        this.status_cover.appendChild(S_bar);
    }
}

class value_bar {
    constructor(value, color, element_ID) {
        this.bar_cover = document.createElement("div");
        this.bar_cover.id = element_ID + "_bar_cover";
        this.bar_cover.className = "state_bar_cover";

        this.bar_name = document.createElement("div");
        this.bar_name.className = "bar_name";
        this.bar_name.textContent = element_ID;

        this.bar = document.createElement("div");
        this.bar.id = element_ID + "_bar";
        this.bar.className = 'state_bar';
        this.bar.textContent = value + " / " + value;
        this.bar.style.backgroundColor = color;
        
        this.bar_cover.appendChild(this.bar_name);
        this.bar_cover.appendChild(this.bar);
    }
}

window.onload = function() {
    var state = new status_window(100, 100);
    var H_bar = new value_bar(state.health, "rgb(150, 0, 0)", "HP");
    var S_bar = new value_bar(state.stamina, "rgb(0, 0, 150)", "SP");
    state.add_element(H_bar.bar_cover, S_bar.bar_cover);
}
