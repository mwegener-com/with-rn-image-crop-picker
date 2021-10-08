import { ConfigPlugin } from '../Plugin.types';
import { InfoPlist } from './IosConfig.types';
/**
 * Apply permissions and their respective descriptions to the iOS Info.plist.
 * Providing a null description will remove the permission from the Info.plist.
 *
 * @param config
 * @param permissions record of strings where the key matches Info.plist permissions and the values are the permission descriptions.
 */
export declare const withPermissions: ConfigPlugin<Record<string, string | null>>;
export declare function applyPermissions(permissions: Record<string, string | null>, infoPlist: Record<string, any>): InfoPlist;
