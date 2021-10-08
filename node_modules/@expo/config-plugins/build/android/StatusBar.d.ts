import { ExpoConfig } from '@expo/config-types';
import { ConfigPlugin } from '../Plugin.types';
export declare const withStatusBar: ConfigPlugin;
export declare function getStatusBarColor(config: Pick<ExpoConfig, 'androidStatusBarColor' | 'androidStatusBar'>): string;
export declare function getStatusBarStyle(config: Pick<ExpoConfig, 'androidStatusBar'>): "light-content" | "dark-content";
export declare function setStatusBarConfig(config: Pick<ExpoConfig, 'androidStatusBarColor' | 'androidStatusBar'>, projectRoot: string): Promise<boolean>;
