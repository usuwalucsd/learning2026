 
/**
 * Author: Urvi Suwal
 */

var jsPsych = initJsPsych({
  on_finish: function () {
    jsPsych.data.displayData();
  },
  extensions: [
    {
      type: jsPsychExtensionPipe,
      params: {
        experiment_id: "PASTE_YOUR_ID_HERE",
        filename: function () {
          return subject_id + ".csv";
        }
      }
    }
  ]
});

var subject_id = jsPsych.randomization.randomID(10);

const condition = jsPsych.randomization.sampleWithoutReplacement(["high", "medium", "low"], 1); 

jsPsych.data.addProperties({
	subject: subject_id,
	condition: condition,
});

var timeline = []; 



var instructions = {
  type: jsPsychInstructions,
  pages: [
    'Welcome to this experiment. In this experiment you will learn names for aliens. There will be few different learning tasks as you go.<br><br>You will need to hear audio during the experiment, so make sure you are using an up-to-date browser (Firefox, Chrome, or Safari should all be good options). First, we will check that your audio is working properly. We will play you simple words and ask you to type in what you hear. Pay close attention - we will only accept HITs in which people pass this initial audio test. Make sure your audio is turned on, then click NEXT to start the audio test!',
  ],
  show_clickable_nav: true
}

timeline.push(instructions);

var instructions = {
  type: jsPsychInstructions,
  pages: [
    `Great! Now, let's begin with the experiment. In the first task, you will learn the names for 8 different alien creatures. On each trial, you will see two aliens and hear and read two names. At first, you won't know which name goes with which alien because the names appear <b>in random order</b>. Try to figure out over time which name goes with which alien. Please do not write any information down - just do your best to remember and learn the names as you go. Remember that you'll hear the name for each of the two aliens and read them on the screen, but the order of the names will be completely random (so, for example, the first name that appears does not necessarily go with the left alien). Make sure your audio is still on, then click NEXT to start learning!`
  ],
  show_clickable_nav: true
}

timeline.push(instructions); 




jsPsych.run(timeline);
