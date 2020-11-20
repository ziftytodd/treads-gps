import { WebPlugin } from '@capacitor/core';
import { TreadsGpsPlugin } from './definitions';
export declare class TreadsGpsWeb extends WebPlugin implements TreadsGpsPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    checkStatus(): Promise<{
        dataSaver: string;
        ignoreBatteryOptimization: string;
    }>;
    keepWebviewAwake(): Promise<{
        success: boolean;
    }>;
    requestIgnoreBatteryOptimization(): Promise<{
        success: boolean;
    }>;
    requestIgnoreDataSaver(): Promise<{
        success: boolean;
    }>;
}
declare const TreadsGps: TreadsGpsWeb;
export { TreadsGps };
