import { ExpoConfig } from '@expo/config-types';
import { InfoPlist } from './IosConfig.types';
export declare const withAdMob: import("..").ConfigPlugin<void>;
export declare function getGoogleMobileAdsAppId(config: Pick<ExpoConfig, 'ios'>): string | null;
export declare function setGoogleMobileAdsAppId(config: Pick<ExpoConfig, 'ios'>, { GADApplicationIdentifier, ...infoPlist }: InfoPlist): InfoPlist;
