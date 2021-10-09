import { ConfigPlugin, WarningAggregator, withProjectBuildGradle } from '@expo/config-plugins';

export const withUpdateProjectBuildGradle: ConfigPlugin = (config) => {
	return withProjectBuildGradle(config, (config) => {
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
	if (!newBuildGradle.includes("maven { url 'https://maven.google.com' }")) {
		const google = `allprojects {\n\trepositories {\n\t\tmaven { url 'https://maven.google.com' }`;
		newBuildGradle = newBuildGradle.replace(/allprojects *{\n.*repositories\s?{/, google);
	}
	if (!newBuildGradle.includes("maven { url 'https://www.jitpack.io' }")) {
		const jitpack = `allprojects {
            repositories {
                maven { url 'https://www.jitpack.io' }`;
		newBuildGradle = newBuildGradle.replace(/allprojects *{\n.*repositories\s?{/, jitpack);
	}

	return newBuildGradle;
}

export default withUpdateProjectBuildGradle;
