import { ConfigPlugin, withInfoPlist } from '@expo/config-plugins';

export const withUpdateInfoPlist: ConfigPlugin<{
	photolibText?: string;
	cameraText?: string;
	microText?: string;
}> = (config, { photolibText, cameraText, microText } = {}) => {
	const photoDescription = photolibText || 'Allow $(PRODUCT_NAME) to access your photo library';
	const CameraDescription = cameraText || 'Allow $(PRODUCT_NAME) to access your camera';
	const MicrophoneDescription = microText || 'Allow $(PRODUCT_NAME) to access your microphone';

	return withInfoPlist(config, (config) => {
		config.modResults.NSPhotoLibraryUsageDescription = photoDescription;
		config.modResults.NSCameraUsageDescription = CameraDescription;
		config.modResults.NSMicrophoneUsageDescription = MicrophoneDescription;

		return config;
	});
};

export default withUpdateInfoPlist;
