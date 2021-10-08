import { ExpoConfig } from '@expo/config-types';
import { AndroidSplashScreenConfig } from '@expo/configure-splash-screen';
import { ConfigPlugin } from '../Plugin.types';
export declare const withSplashScreen: ConfigPlugin;
export declare function getSplashScreenConfig(config: ExpoConfig): AndroidSplashScreenConfig | undefined;
export declare function setSplashScreenAsync(config: ExpoConfig, projectRoot: string): Promise<void>;
