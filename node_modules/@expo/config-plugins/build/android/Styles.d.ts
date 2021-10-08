import { ResourceGroupXML, ResourceItemXML, ResourceKind, ResourceXML } from './Resources';
export declare function getProjectStylesXMLPathAsync(projectRoot: string, { kind }?: {
    kind?: ResourceKind;
}): Promise<string>;
export declare function getStyleParent(xml: ResourceXML, parent: {
    name: string;
    parent?: string;
}): ResourceGroupXML | null;
export declare function getStylesItem({ name, xml, parent, }: {
    name: string;
    xml: ResourceXML;
    parent: {
        name: string;
        parent: string;
    };
}): ResourceItemXML | null;
export declare function setStylesItem({ item, xml, parent, }: {
    item: ResourceItemXML;
    xml: ResourceXML;
    parent: {
        name: string;
        parent: string;
    };
}): ResourceXML;
export declare function removeStylesItem({ name, xml, parent, }: {
    name: string;
    xml: ResourceXML;
    parent: {
        name: string;
        parent: string;
    };
}): ResourceXML;
