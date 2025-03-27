// Main application entry point
(function() {
    'use strict';
    
    /**
     * Main initialization function
     */
    function init() {
        logMessage("Hello, World!");
    }

    /**
     * Logs a message to the console
     * @param {string} message - The message to log
     */
    function logMessage(message) {
        console.log(message);
    }

    // Initialize the application
    init();
})();