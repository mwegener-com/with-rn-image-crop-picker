import { XMLObject } from '../utils/XML';
export declare type ResourceGroupXML = {
    $: {
        name: string;
        parent: string;
    };
    item: ResourceItemXML[];
};
export declare type ResourceXML = {
    resources: {
        color?: ResourceItemXML[];
        string?: ResourceItemXML[];
        style?: ResourceGroupXML[];
    };
};
export declare type ResourceItemXML = {
    _: string;
    $: {
        name: string;
    };
};
/**
 * Name of the resource folder.
 */
export declare type ResourceKind = 'values' | 'values-night' | 'values-v23';
/**
 * Read an XML file while providing a default fallback for resource files.
 *
 * @param options path to the XML file, returns a fallback XML if the path doesn't exist.
 */
export declare function readResourcesXMLAsync({ path, fallback, }: {
    path: string;
    fallback?: string | null;
}): Promise<ResourceXML>;
/**
 * Ensure the provided xml has a `resources` object (the expected shape).
 *
 * @param xml
 */
export declare function ensureDefaultResourceXML(xml: XMLObject): ResourceXML;
/**
 * Build a `ResourceItemXML` given its `name` and `value`. This makes things a bit more readable.
 *
 * - JSON: `{ $: { name }, _: value }`
 * - XML: `<item name="NAME">VALUE</item>`
 *
 * @param props name and value strings.
 */
export declare function buildResourceItem({ name, value, }: {
    name: string;
    value: string;
}): ResourceItemXML;
export declare function buildResourceGroup(parent: {
    name: string;
    parent: string;
    items?: ResourceItemXML[];
}): ResourceGroupXML;
