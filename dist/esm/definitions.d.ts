declare module '@capacitor/core' {
    interface PluginRegistry {
        TreadsGps: TreadsGpsPlugin;
    }
}
export interface TreadsGpsPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    keepWebviewAwake(): Promise<{
        success: boolean;
    }>;
    checkStatus(): Promise<{
        dataSaver: string;
        ignoreBatteryOptimization: string;
    }>;
    requestIgnoreBatteryOptimization(): Promise<{
        success: boolean;
    }>;
    requestIgnoreDataSaver(): Promise<{
        success: boolean;
    }>;
}
