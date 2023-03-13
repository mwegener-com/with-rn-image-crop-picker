import { AndroidConfig, ConfigPlugin, withAndroidManifest } from '@expo/config-plugins';
import { addPermission } from '@expo/config-plugins/build/android/Permissions';
import { ExpoConfig } from '@expo/config-types';

export const withUpdateAndroidManifest: ConfigPlugin = (config) => {
	return withAndroidManifest(config, async (config) => {
		config.modResults = await setCustomConfigAsync(config, config.modResults);
		return config;
	});
};

async function setCustomConfigAsync(
	config: Pick<ExpoConfig, 'android'>,
	androidManifest: AndroidConfig.Manifest.AndroidManifest
): Promise<AndroidConfig.Manifest.AndroidManifest> {
	addPermission(androidManifest, 'android.permission.CAMERA');
	addPermission(androidManifest, 'android.permission.READ_MEDIA_IMAGES')

	return androidManifest;
}

export default withUpdateAndroidManifest;
