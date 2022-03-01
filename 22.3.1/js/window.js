class basic_window {
     constructor() {
         this.window = document.createElement('div');
         this.window.className = 'window_style';

         window.addEventListener('resize', this.resize.bind(this), {
              once: false,
              passive: false,
              capture: false,
          });

         this.resize();

     }

     resize() {
          this.window_width = document.body.clientWidth;
          this.window_height = document.body.clientHeight;

          console.log("width : " + this.window_width + ", heidht : " + this.window_height);

          this.window.style.width = this.window_width + "px";
          this.window.style.height = this.window_height + "px";
     }

     add() {
          document.body.appendChild(this.window);
     }
}