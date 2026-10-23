 
/**
 * Author: Urvi Suwal
 */
var jsPsych = initJsPsych({

  on_finish: function() {
    jsPsych.data.displayData();
  }
});

const condition = jsPsych.randomization.sampleWithoutReplacement(["high", "medium", "low"], 1); 

var timeline = []; 

const participant_id = {
  type: jsPsychSurveyText,
  questions: [{prompt: 'Participant ID', rows: 1, required: true},], 
  on_finish: function(trial){
    jsPsych.data.addProperties({pid: trial.response['Q0'], condition: condition})
  }, 
};
timeline.push(participant_id);

var instructions = {
type: jsPsychInstructions,
pages: [
  'Welcome to this experiment. In this experiment you will learn names for aliens. There will be few different learning tasks as you go.<br><br>You will need to hear audio during the experiment, so make sure you are using an up-to-date browser (Firefox, Chrome, or Safari should all be good options). First, we will check that your audio is working properly. We will play you simple words and ask you to type in what you hear. Pay close attention - we will only accept HITs in which people pass this initial audio test. Make sure your audio is turned on, then click NEXT to start the audio test!',
],
show_clickable_nav: true
}

var audio_check = {
	type: 'audio-check',
	prompt: "Click on the Play button to hear an audio recording. Then enter the word you heard. Click the button to hear the sound again. Click on the Submit Answers button when you are finished <br>",
	timeline: [
		{stimulus: 'stims/apple.m4a'},
		{stimulus: 'stims/ball.m4a'},
	]
};
timeline.push(instructions);

var instructions = {
type: jsPsychInstructions,
pages: [
  `Great! Now, let's begin with the experiment. In the first task, you will learn the names for 8 different alien creatures. On each trial, you will see two aliens and hear and read two names. At first, you won't know which name goes with which alien because the names appear <b>in random order</b>. Try to figure out over time which name goes with which alien. Please do not write any information down - just do your best to remember and learn the names as you go. Remember that you'll hear the name for each of the two aliens and read them on the screen, but the order of the names will be completely random (so, for example, the first name that appears does not necessarily go with the left alien). Make sure your audio is still on, then click NEXT to start learning!`
],
show_clickable_nav: true
}

timeline.push(instructions)


jsPsych.run(timeline);
