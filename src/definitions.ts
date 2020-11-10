declare module '@capacitor/core' {
  interface PluginRegistry {
    TreadsGps: TreadsGpsPlugin;
  }
}

export interface TreadsGpsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
