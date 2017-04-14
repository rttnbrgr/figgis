// import 'gradients' from './gradients.json'
import gradients from './gradients';

console.log('gradients', gradients[0]);

let testGradient = gradients[0];

var content = {

  nav: [
    { title: 'landing' },
    { title: 'intro' },
    { title: 'roster' },
  ],
  
  // Intro Section
  intro: {
    headline: 'tasteclub',
    copy: [
      'Portland is a prism of possibility — a creative community where people intersect and an unseen, radiant vision of opportunity is unlocked. Ideas are born, inspiration takes hold.',
      'For its seventh annual event, TEDxPortland presents SPECTRUM — a celebratory gathering that honors the light in all of us.'
    ]
  },

  // Landing Page
  landing: {
    profiles: [
      'Aaron Requena',
      'Mack The Shark',
      'Lord Rolex',
      'Alex Colas',
      'Aaron Requena',
    ]
  },

  // Gradients; cant seem to ref other json file
  gradients: [
    {
      "name": "Dusk",
      "colors": ["#2C3E50", "#FD746C"]
    },
    {
      "name": "Dance To Forget",
      "colors": ["#FF4E50", "#F9D423"]
    },
    {
      "name": "Brady Brady Fun Fun",
      "colors": ["#00c3ff", "#ffff1c"]
    },
    {
      "name": "Back to the Future",
      "colors": ["#C02425", "#F0CB35"]
    },

    {
      "name": "Dusk",
      "colors": ["#2C3E50", "#FD746C"]
    }
  ]
}

export default content
