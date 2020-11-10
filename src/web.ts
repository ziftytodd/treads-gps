import { WebPlugin } from '@capacitor/core';
import { TreadsGpsPlugin } from './definitions';

export class TreadsGpsWeb extends WebPlugin implements TreadsGpsPlugin {
  constructor() {
    super({
      name: 'TreadsGps',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async checkStatus(): Promise<{ dataSaver: string, ignoreBatteryOptimization: string }> {
    return { dataSaver: 'false', ignoreBatteryOptimization: 'false' };
  }

  async requestIgnoreBatteryOptimization(): Promise<{ success: boolean }> {
    return { success: true };
  }

  async requestIgnoreDataSaver(): Promise<{ success: boolean }> {
    return { success: true };
  }
}

const TreadsGps = new TreadsGpsWeb();

export { TreadsGps };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(TreadsGps);
