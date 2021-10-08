import { ExpoConfig } from '@expo/config-types';
import { IosSplashScreenConfig } from '@expo/configure-splash-screen';
import { ConfigPlugin } from '../Plugin.types';
export declare const withSplashScreen: ConfigPlugin;
export declare function getSplashScreen(config: ExpoConfig): IosSplashScreenConfig | undefined;
export declare function setSplashScreenAsync(config: ExpoConfig, projectRoot: string): Promise<void>;
