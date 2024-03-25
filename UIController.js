var Uicontroller = pc.createScript('uicontroller');

Uicontroller.attributes.add('uiParent', {
    type: 'entity'
});

Uicontroller.attributes.add('heart', {
    type: 'entity'
});

Uicontroller.attributes.add('waitTimeToShow', {
    type: 'number',
    default: 1.5
});

Uicontroller.attributes.add('infoWindow', {
    type: 'entity'
});

// initialize code called once per entity
Uicontroller.prototype.initialize = function () {
    this.app.on('screen:touch', this.showUI, this);
    this.app.on('heart:lifeless', this.hideUI, this);
};

Uicontroller.prototype.showUI = function () {
    // Enable UI when touching the screen but waits a little bit until the heart has reached the top
    setTimeout(() => {
        this.uiParent.script.groupOpacity.opacity = 1;
    }, this.waitTimeToShow * 1000);
};

Uicontroller.prototype.hideUI = function () {
    // Hide the UI if heart was set to lifeless
    this.uiParent.script.groupOpacity.opacity = 0;
    this.infoWindow.enabled = false;
};