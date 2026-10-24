 
/**
 * Author: Urvi Suwal
 */

var jsPsych = initJsPsych({

  show_progress_bar: true, // TO-DO: change from automatic to manual progress
  on_finish: function () {
    jsPsych.data.displayData();
  },
  extensions: [
    {
      type: jsPsychExtensionPipe,
      params: {
        experiment_id: "hxixbjitXwxr",
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

timeline.push({
  type: jsPsychFullscreen,
  message: `<p>The experiment will launch in fullscreen mode when you click the button below.</p>`, 
  button_label: `Launch Experiment`, 
  fullscreen_mode: true
});

var instructions_1 = {
  type: jsPsychInstructions,
  pages: [
    'Welcome to this experiment. In this experiment you will learn names for aliens. There will be few different learning tasks as you go.<br><br>You will need to hear audio during the experiment, so make sure you are using an up-to-date browser (Firefox, Chrome, or Safari should all be good options). First, we will check that your audio is working properly. We will play you simple words and ask you to type in what you hear. Pay close attention - we will only accept HITs in which people pass this initial audio test. Make sure your audio is turned on, then click NEXT to start the audio test!',
  ],
  show_clickable_nav: true
}

var instructions_2 = {
  type: jsPsychInstructions,
  pages: [
    `Great! Now, let's begin with the experiment. In the first task, you will learn the names for 8 different alien creatures. On each trial, you will see two aliens and hear and read two names. At first, you won't know which name goes with which alien because the names appear <b>in random order</b>. Try to figure out over time which name goes with which alien. Please do not write any information down - just do your best to remember and learn the names as you go. Remember that you'll hear the name for each of the two aliens and read them on the screen, but the order of the names will be completely random (so, for example, the first name that appears does not necessarily go with the left alien). Make sure your audio is still on, then click NEXT to start learning!`
  ],
  show_clickable_nav: true
}
var audio_check = {
  timeline: [
    {
      type: jsPsychSurveyHtmlForm,
      preamble: function () {
        return `<div style="text-align: left;">
        <p>Click on the Play button to hear an audio recording. Then enter the word you heard. Click the<br>button to hear the sound again. Click on the Submit Answers button when you are finished.<br></p>
        <button type="button" class="jspsych-btn" onclick="new Audio('${jsPsych.timelineVariable('audio')}').play()">Play</button></div>`;
      },
      html: '<p style="text-align: left;"><textarea id="test-resp-box" name="response" style="resize: both;"></textarea></p>',
      autofocus: 'test-resp-box',
      button_label: "Submit Answers",
      post_trial_gap: 500, 
      data: {
        audio: jsPsych.timelineVariable('audio')
      },
      on_finish: function (data) {
        data.response = data.response.response;
      }
    }],
  timeline_variables: [
    { audio: 'stimuli/apple.m4a' },
    { audio: 'stimuli/ball.m4a' }
  ]
};



// Note: Hard coded stimulis combination are from the original experiment script that was available in OSF
// each block of 10 cross sit exposure trials that each show 3 different aliens, so each block has each alien exactly once
// 3 blocks are set up in specifiedstim so that no aliens occurs on the same trial with any other alien more than once over exposure
// 0, 9 and 21 are control stimuli that are only ever seen in cross sit trials, never in the production/comprehension/feedback trials
//define specific stimuli combinations, depending on condition
const stimulus_sets = {
  'high': [[0,1],[0,1],[0,1],[2,3],[2,3],[2,3],[4,5],[4,6],[4,7],[5,6],[5,7],[6,7]],
  'medium': [[0,1],[0,2],[0,3],[1,2],[1,4],[2,5],[3,6],[3,7],[4,5],[4,6],[5,7],[6,7]],
  'low': [[0,1],[0,1],[0,2],[2,3],[2,3],[1,3],[4,5],[4,6],[4,7],[5,6],[5,7],[6,7]]
}

// stimli combination depending on the condiiton; randomized 
var stimulus_set_condition = jsPsych.randomization.repeat(stimulus_sets[condition], 1);


timeline.push(instructions_1);
timeline.push(audio_check);
timeline.push(instructions_2); 




jsPsych.run(timeline);
