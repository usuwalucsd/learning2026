var jsPsychComprehensionTest = (function (jspsych) {
    "use strict";
    
    const info = {
        name: "comprehension_test",
        version: "1.0.0",
        parameters: { 
            // TO-DO
        },
        data: {
            // TO-DO
        },
    };

    

    /**
         * plugin for comprehension test trials in cross-situational word learning study
         * 
         * adapted re-implementation of the jspsych-comprehension-test-prompt and  jspsych-comprehension-test plugins
         * used in Experiment S1 (crossact version 2) 
         * Martin Zettersten 
         *  
         * functionality: 
         *      - add here
         * 
         * @author Urvi Suwal
         * Implemented using jsPsych 8
     */
    class ComprehensionTestPlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        
        trial(display_element, trial) {
           
            display_element.innerHTML = 'comprehension test';
        }
    }
    ComprehensionTestPlugin.info = info;
    return ComprehensionTestPlugin;
})(jsPsychModule);
