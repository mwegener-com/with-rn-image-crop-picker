import { ConfigPlugin, WarningAggregator, withAppBuildGradle } from '@expo/config-plugins';

export const withUpdateAppBuildGradle: ConfigPlugin = (config) => {
	return withAppBuildGradle(config, (config) => {
		if (config.modResults.language === 'groovy') {
			config.modResults.contents = setBuildscript(config.modResults.contents);
		} else {
			WarningAggregator.addWarningAndroid(
				'android-google-services',
				`Cannot automatically configure project build.gradle if it's not groovy`
			);
		}
		return config;
	});
};

export function setBuildscript(buildGradle: string) {
	let newBuildGradle = buildGradle;
	if (!newBuildGradle.includes('vectorDrawables.useSupportLibrary = true')) {
		const newEntry = `defaultConfig {\n\t\tvectorDrawables.useSupportLibrary = true`;
		newBuildGradle = newBuildGradle.replace(/defaultConfig\s?{/, newEntry);
	}

	return newBuildGradle;
}

export default withUpdateAppBuildGradle;
