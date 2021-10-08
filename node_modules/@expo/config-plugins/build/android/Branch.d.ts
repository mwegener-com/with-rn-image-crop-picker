import { ExpoConfig } from '@expo/config-types';
import { AndroidManifest } from './Manifest';
export declare const withBranch: import("..").ConfigPlugin<void>;
export declare function getBranchApiKey(config: ExpoConfig): string | null;
export declare function setBranchApiKey(config: ExpoConfig, androidManifest: AndroidManifest): AndroidManifest;
