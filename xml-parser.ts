import { XMLParser } from 'fast-xml-parser';
import { readFileSync } from 'fs';

export const getIdsXml = () => {
    const xmlFile = readFileSync(`./test.xml`, 'utf8');
    const parser = new XMLParser();
    const xmlDoc = parser.parse(xmlFile);
    const geoIds = xmlDoc['env:Envelope']['env:Body']['ns3:alert']['ns3:info']['ns3:area']['ns3:geocode'][1]['ns3:value'];
    return geoIds.split(',').map((geoId: string) => Number(geoId));
}