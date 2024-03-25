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
        this.clickCount = 0;
        
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
        this.heartCollision.enabled = true;
       
    } else if (this.clickCount === 3) {
        this.resetHeart();
        this.clickCount = 1;
    }
};

PhysicsHandler.prototype.resetHeart = function () {
    // Reset the heart to its original position
    this.heart.setPosition(this.originalPosition);
    this.heart.setLocalEulerAngles(this.initialRotation);
    this.heartRigidbody.type = pc.RIGIDBODY_TYPE_STATIC;    
};
PhysicsHandler.prototype.onScr = function () {
    
     this.heartRigidbody.type = pc.RIGIDBODY_TYPE_DYNAMIC;
     this.clickCount=2;
};