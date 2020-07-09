const setup = () => {
  console.log('from setup');
};

const teardown = () => {
  console.log('from teardown');
};

const action = () => {
  const synth = window.speechSynthesis;
  const txt = 'I am from hansfree module';
  const utterThis = new SpeechSynthesisUtterance(txt);
  synth.speak(utterThis);
};

const contextModule = {
  name: 'Website Context',
  description: 'These commands can be used to get back the current site context though voice',
  icon: 'fas fa-headphones',
  contexts: [
    {
      context: 'root',
      commands: [{
        name: 'what is on my screen',
        action,
      }],
      setup,
      teardown,
    },
  ],
};

export default contextModule;
