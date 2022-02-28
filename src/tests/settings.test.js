import Settings from '../js/Settings';

test('Settings should correctly change settings by user', () => {
  const settings = {
    theme: 'light',
    music: 'chillout',
    difficulty: 'hard',
  };
  const testSettings = new Settings(settings);

  expect(testSettings.settings).toEqual(new Map(Object.entries(settings)));
});
