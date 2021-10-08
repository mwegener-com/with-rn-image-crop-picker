import { ExpoConfig } from '@expo/config-types';
import { ConfigPlugin } from '../Plugin.types';
/**
 * Sanitize a name, this should be used for files and gradle names.
 * - `[/, \, :, <, >, ", ?, *, |]` are not allowed https://bit.ly/3l6xqKL
 *
 * @param name
 */
export declare function sanitizeNameForGradle(name: string): string;
export declare const withName: ConfigPlugin<void>;
export declare const withNameSettingsGradle: ConfigPlugin;
export declare function getName(config: Pick<ExpoConfig, 'name'>): string | null;
/**
 * Changes the display name on the home screen,
 * notifications, and others.
 */
export declare function setName(config: Pick<ExpoConfig, 'name'>, projectRoot: string): Promise<boolean>;
/**
 * Regex a name change -- fragile.
 *
 * @param config
 * @param settingsGradle
 */
export declare function applyNameSettingsGradle(config: Pick<ExpoConfig, 'name'>, settingsGradle: string): string;
