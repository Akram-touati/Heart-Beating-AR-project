var PhysicsHandler = pc.createScript('physicsHandler');

PhysicsHandler.attributes.add('heartEntity', { type: 'entity' });
PhysicsHandler.attributes.add('planeEntity', { type: 'entity' });

PhysicsHandler.prototype.initialize = function () {
    // Get references to the heart and plane entities
    this.heart = this.heartEntity;
    this.plane = this.planeEntity;
    //this.entity.rotateLocal(124.71, 10.4, 165.39);

    // Check if entities are valid
    if (this.heart && this.plane) {
        // Get the rigidbody and collision components of the heart
        this.heartRigidbody = this.heart.rigidbody;
        this.heartCollision = this.heart.collision;

        // Get the rigidbody and collision components of the plane
        this.planeRigidbody = this.plane.rigidbody;
        this.planeCollision = this.plane.collision;

        // Set the plane to a static state
        this.planeRigidbody.type = pc.RIGIDBODY_TYPE_STATIC;

        // Set the heart to a static state initially
        this.heartRigidbody.type = pc.RIGIDBODY_TYPE_STATIC;

        // Subscribe to the 'touched' event
        this.app.on('touched', this.onScreen, this);
         this.app.on('lifelessHeart', this.onScr, this);
         //this.app.on('kho', this.onScr, this);
        this.clickCount = 0;
        // this.app.on('lifelessHeart', this.onLifelessHeart, this);

        // Save the original position of the heart
        this.originalPosition = this.heart.getPosition().clone();
         this.initialRotation = this.heart.getLocalEulerAngles().clone();
        
    } else {
        console.error('Heart or plane entity not found.');
    }
};
PhysicsHandler.prototype.onScreen = function (event) {
    // Check if the pressed key is the one you want to use (e.g., spacebar)
    this.clickCount++;
    console.log('Click Count:', this.clickCount);

    if (this.clickCount === 2) {
        // On the second click, enable physics (let it fall)
       
       
        this.heartRigidbody.type = pc.RIGIDBODY_TYPE_DYNAMIC;
       
        // Optionally, you can enable collisions with the plane
        this.heartCollision.enabled = true;
        // this.entity.rotateLocal(124.71, 10.4, 165.39);
         //var newRotation = new pc.Vec3(0, 90, 0);
       // this.heart.setLocalEulerAngles(newRotation);

        // Set angular damping to gradually slow down the rotation
       // this.heartRigidbody.angularDamping = 0.1;
    } else if (this.clickCount === 3) {
        // On the third click, reset the heart to its initial position immediately
        this.resetHeart();
        // Reset the click count to allow the process to repeat
        this.clickCount = 1;
    }
};

PhysicsHandler.prototype.resetHeart = function () {
    // Reset the heart to its original position
    this.heart.setPosition(this.originalPosition);
    this.heart.setLocalEulerAngles(this.initialRotation);

    // Reset any other properties or components as needed

    // Set the heart back to a static state
    this.heartRigidbody.type = pc.RIGIDBODY_TYPE_STATIC;

    // Reset click count
    //this.clickCount = 2;

    // Subscribe to the 'touched' event again for future clicks
   // this.app.on('touched', this.onScreen, this);
};
PhysicsHandler.prototype.onScr = function () {
    //this.clickCount = 1;

     this.heartRigidbody.type = pc.RIGIDBODY_TYPE_DYNAMIC;
     this.clickCount=2;
   
    
    // this.entity.anim.baseLayer.transition('Initial State', 0.2);


};