import { XMLParser } from 'fast-xml-parser';

export const getIdsXml = (capString: string) => {
    const parser = new XMLParser();
    const xmlDoc = parser.parse(capString);
    return xmlDoc['ns3:value'];
}