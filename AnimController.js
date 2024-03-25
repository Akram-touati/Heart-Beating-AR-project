var AnimController = pc.createScript('animController');

// initialize code called once per entity
AnimController.prototype.initialize = function() {
      this.app.on('touched', this.onScreenTouch, this);
       this.app.on('lifelessHeart', this.onScr, this);

};

AnimController.prototype.onScreenTouch = function (event) {
      
    if (this.entity.anim.baseLayer.activeState==='Initial State'){
       
             this.entity.anim.baseLayer.transition('op', 0.2);
            
        }else {this.entity.anim.baseLayer.transition('Initial State', 0.2);}
    
};
AnimController.prototype.onScr = function (event) {
    
   this.entity.anim.baseLayer.transition('Initial State', 0.2);
};


