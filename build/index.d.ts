import { ConfigPlugin } from "@expo/config-plugins";
interface PluginProps {
    PhotoLibraryUsageDescription?: string;
    CameraUsageDescription?: string;
    MicrophoneUsageDescription?: string;
}
export declare const withImageCropPicker: ConfigPlugin<PluginProps>;
export default withImageCropPicker;
