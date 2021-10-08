import { ResourceItemXML, ResourceKind, ResourceXML } from './Resources';
export declare function getProjectColorsXMLPathAsync(projectRoot: string, { kind }?: {
    kind?: ResourceKind;
}): Promise<string>;
export declare function setColorItem(itemToAdd: ResourceItemXML, colorFileContentsJSON: ResourceXML): ResourceXML;
export declare function removeColorItem(named: string, contents: ResourceXML): ResourceXML;
