import { ExpoConfig } from '@expo/config-types';
import { InfoPlist } from './IosConfig.types';
export declare const withBranch: import("..").ConfigPlugin<void>;
export declare function getBranchApiKey(config: Pick<ExpoConfig, 'ios'>): string | null;
export declare function setBranchApiKey(config: Pick<ExpoConfig, 'ios'>, infoPlist: InfoPlist): InfoPlist;
