import { ExpoConfig } from '@expo/config-types';
import { ConfigPlugin } from '../Plugin.types';
export declare const withRootViewBackgroundColor: ConfigPlugin;
export declare function getRootViewBackgroundColor(config: Pick<ExpoConfig, 'android' | 'backgroundColor'>): string | null;
export declare function setRootViewBackgroundColor(config: Pick<ExpoConfig, 'android' | 'backgroundColor'>, projectRoot: string): Promise<boolean>;
