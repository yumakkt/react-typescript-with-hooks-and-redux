import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
  require('../src/components/atoms/MyInputField/stories');
}

configure(loadStories, module);
