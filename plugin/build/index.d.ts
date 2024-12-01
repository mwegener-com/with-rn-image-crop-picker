import { ConfigPlugin } from "expo/config-plugins";
interface PluginProps {
    PhotoLibraryUsageDescription?: string;
    CameraUsageDescription?: string;
    MicrophoneUsageDescription?: string;
}
declare const _default: ConfigPlugin<PluginProps>;
export default _default;
