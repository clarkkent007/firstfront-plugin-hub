export interface Plugin {
  id: string;
  name: string;
  description: string;
  copilotPrompt: string;
  icon?: string;
}

export interface PluginResult {
  success: boolean;
  output: string;
  error?: string;
}
