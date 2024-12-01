import {
  AndroidConfig,
  ConfigPlugin,
  withAndroidManifest,
} from "expo/config-plugins";

export const addManifestPermissions: ConfigPlugin = (config) => {
  return withAndroidManifest(config, async (config) => {
    config.modResults = await setCustomConfigAsync(config.modResults);
    return config;
  });
};

async function setCustomConfigAsync(
  androidManifest: AndroidConfig.Manifest.AndroidManifest,
) {
  AndroidConfig.Permissions.ensurePermission(
    androidManifest,
    "android.permission.CAMERA",
  );

  return androidManifest;
}
