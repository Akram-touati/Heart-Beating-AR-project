var AnimController = pc.createScript('animController');

// initialize code called once per entity
AnimController.prototype.initialize = function() {
     //this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onScreenTouch, this);
      this.app.on('touched', this.onScreenTouch, this);
       this.app.on('lifelessHeart', this.onScr, this);
       //this.app.on('kho', this.onScreen, this);
       //this.app.on('noKeyPressEvent', this.onLifelessHeart, this);

};

AnimController.prototype.onScreenTouch = function (event) {
      //this.entity.anim.baseLayer.play();
    // Assuming entity has an 'anim' property and 'aliveMaterial' and 'lifelessMaterial' are defined
    /*if (event.key === pc.KEY_A) {
        if (this.entity.anim.baseLayer.activeState==='Initial State'){
       
             this.entity.anim.baseLayer.transition('op', 0.2);
            
        }else {this.entity.anim.baseLayer.transition('Initial State', 0.2);}
    }*/
    if (this.entity.anim.baseLayer.activeState==='Initial State'){
       
             this.entity.anim.baseLayer.transition('op', 0.2);
            
        }else {this.entity.anim.baseLayer.transition('Initial State', 0.2);}
    
};
AnimController.prototype.onScr = function (event) {
    // this.entity.anim.baseLayer.transition('Initial State', 0.2);
   this.entity.anim.baseLayer.transition('Initial State', 0.2);
};


// update code called every frame
// swap method called for script hot-reloading
// inherit your script state here
// AnimController.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/