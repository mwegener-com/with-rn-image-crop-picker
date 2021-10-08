import { ExpoConfig } from '@expo/config-types';
import { ConfigPlugin } from '../Plugin.types';
import { ContentsJsonImageIdiom } from './AssetContents';
export declare const withIcons: ConfigPlugin;
export declare const ICON_CONTENTS: {
    idiom: ContentsJsonImageIdiom;
    sizes: {
        size: number;
        scales: (1 | 2 | 3)[];
    }[];
}[];
export declare function getIcons(config: Pick<ExpoConfig, 'icon' | 'ios'>): string | null;
export declare function setIconsAsync(config: ExpoConfig, projectRoot: string): Promise<void>;
