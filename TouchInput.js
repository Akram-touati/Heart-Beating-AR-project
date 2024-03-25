var TouchInput = pc.createScript('touchInput');

TouchInput.prototype.initialize = function () {
    // Event listener for touchstart

 this.app.keyboard.on(pc.EVENT_KEYDOWN, this.screenTouch, this); 

};

TouchInput.prototype.screenTouch = function (event) {
   // Fire a custom event named 'screenTouch'
     
if (event.key === pc.KEY_A) {

        this.app.fire('touched',event);
      
       
    }

};
