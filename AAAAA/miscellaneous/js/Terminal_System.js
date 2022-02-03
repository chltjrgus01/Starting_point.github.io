var terminal_div = document.createElement("div");
var terminal_size = 0;

function add_command(command) {
    terminal_div.textContent += command + '\n';
    terminal_size = command.length + 1;
    console.log("terminal_size : " + terminal_size);
    console.log(" * terminal\n" + terminal_div.textContent);
    
}

function read_line(number) {
    this.terminal_value = terminal_div.textContent;
}

function input_key_event(key_code) {
    if (window.event.keyCode == key_code) {
        this.add_input = document.getElementById('add_input');
        console.log("input : " + this.add_input.value);
        add_command(this.add_input.value);
        this.add_input.value = '';
    }
}