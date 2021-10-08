import { ExpoConfig } from '@expo/config-types';
import { AndroidManifest } from './Manifest';
export declare const withAdMob: import("..").ConfigPlugin<void>;
export declare function getGoogleMobileAdsAppId(config: Pick<ExpoConfig, 'android'>): string | null;
export declare function getGoogleMobileAdsAutoInit(config: Pick<ExpoConfig, 'android'>): boolean;
export declare function setAdMobConfig(config: Pick<ExpoConfig, 'android'>, androidManifest: AndroidManifest): AndroidManifest;
