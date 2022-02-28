export default class Settings {
  constructor(settings) {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSettings = new Map(Object.entries(settings));
  }

  get settings() {
    const settings = new Map(Object.entries(this.defaultSettings));

    for (const [key, value] of this.userSettings) {
      settings.set(key, value);
    }

    return settings;
  }
}
