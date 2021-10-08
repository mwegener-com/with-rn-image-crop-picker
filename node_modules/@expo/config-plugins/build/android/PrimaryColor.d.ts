import { ExpoConfig } from '@expo/config-types';
import { ConfigPlugin } from '../Plugin.types';
export declare const withPrimaryColor: ConfigPlugin;
export declare function getPrimaryColor(config: Pick<ExpoConfig, 'primaryColor'>): string;
export declare function setPrimaryColor(config: Pick<ExpoConfig, 'primaryColor'>, projectRoot: string): Promise<boolean>;
