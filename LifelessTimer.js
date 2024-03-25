var LifelessTimer = pc.createScript('LifelessTimer');

LifelessTimer.attributes.add('lifelessTime', {
    type: 'number',
    default: 10,
    title: 'Lifeless Time (seconds)'
});

LifelessTimer.prototype.initialize = function() {
    this.timer = this.lifelessTime;
   

    // Listen for the 'screenTouch' event from TouchInput.js
    this.app.on('touched', this.kk, this);

    // Set up the initial timer
    this.startTimer();
};

LifelessTimer.prototype.startTimer = function() {
    this.timer = this.lifelessTime;
    this.timerId = setTimeout(this.onTimerElapsed.bind(this), this.lifelessTime * 1000);
};

LifelessTimer.prototype.onTimerElapsed = function() {
    
        // Timer elapsed, change the heart to lifeless state and send the event
        this.app.fire('lifelessHeart');
    
};

LifelessTimer.prototype.kk = function() {
    // Reset the timer when the screen is touched
    clearTimeout(this.timerId);
    this.startTimer();
};