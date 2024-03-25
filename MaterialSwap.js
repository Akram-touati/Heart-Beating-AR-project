var MaterialSwap = pc.createScript('materialSwap');
MaterialSwap.attributes.add('aliveMaterial', {
    type: 'asset',
    assetType: 'material',
    title: 'Alive Material'
});

MaterialSwap.attributes.add('lifelessMaterial', {
    type: 'asset',
    assetType: 'material',
    title: 'Lifeless Material'
});

MaterialSwap.attributes.add('heartEntity', {
    type: 'entity',
    title: 'Heart Entity',
    description: 'Reference to the entity representing the heart.'
});



// initialize code called once per entity
MaterialSwap.prototype.initialize = function() {
     
    
      this.app.on('touched', this.onScreenTouch, this);
       this.app.on('lifelessHeart', this.onScre, this);
     

};

MaterialSwap.prototype.onScreenTouch = function (event) {
    
 
      if (this.entity.render.meshInstances[0].material === this.aliveMaterial.resource ) {

        this.entity.render.meshInstances[0].material = this.lifelessMaterial.resource;
        }
         else 
        {
            this.entity.render.meshInstances[0].material = this.aliveMaterial.resource;
        }
};

MaterialSwap.prototype.onScre = function (event) {
     this.entity.render.meshInstances[0].material = this.lifelessMaterial.resource;

};
    

MaterialSwap.prototype.setMaterial = function (materialAsset) {
    // Load the material asset and apply it to the heart entity
    var self = this;
    this.app.assets.load(materialAsset, 'material', function (err, asset) {
        if (!err) {
            self.heartEntity.model.material = asset.resource;
            self.currentMaterial = materialAsset;
        } else {
            console.error('Error loading material:', err);
        }
    });
};
