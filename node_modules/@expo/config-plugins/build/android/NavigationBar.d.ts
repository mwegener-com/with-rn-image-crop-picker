import { ExpoConfig } from '@expo/config-types';
import { ConfigPlugin } from '../Plugin.types';
export declare const withNavigationBar: ConfigPlugin;
export declare function getNavigationBarImmersiveMode(config: Pick<ExpoConfig, 'androidNavigationBar'>): "leanback" | "immersive" | "sticky-immersive" | null;
export declare function getNavigationBarColor(config: Pick<ExpoConfig, 'androidNavigationBar'>): string | null;
export declare function getNavigationBarStyle(config: Pick<ExpoConfig, 'androidNavigationBar'>): "light-content" | "dark-content";
export declare function setNavigationBarConfig(config: Pick<ExpoConfig, 'androidNavigationBar'>, projectRoot: string): Promise<boolean>;
