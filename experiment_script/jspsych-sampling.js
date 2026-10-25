var jsPsychSampling = (function (jspsych) {
    "use strict";
    
    const info = {
        name: "sampling",
        version: "1.0.0",
        parameters: { 
            // TO-DO
        },
        data: {
            // TO-DO
        },
    };

    

    /**
         * plugin for sampling trials in cross-situational word learning study
         * 
         * adapted re-implementation of the jspsych-selection-learning plugins
         * used in Experiment S1 (crossact version 2) 
         * Martin Zettersten 
         *  
         * functionality: 
         *      - add here
         * 
         * @author Urvi Suwal
         * Implemented using jsPsych 8
     */
    class SamplingPlugin {
        constructor(jsPsych) {
            this.jsPsych = jsPsych;
        }
        
        trial(display_element, trial) {
           
            display_element.innerHTML = 'sampling';
        }
    }
    SamplingPlugin.info = info;
    return SamplingPlugin;
})(jsPsychModule);
