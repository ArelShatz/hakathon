const { Socket } = require("socket.io");

import express from 'express';
import {Request, Response} from 'express';
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const { getIdsXml } = require('./xml-parser');
const cors = require('cors');
import { myDataSource } from "./datasource";
import { Polygon } from './polygon.entity';

let currentIds: number[] = [];

const AuthUrl = '';

const getIdsFromCap = () => {
    currentIds = getIdsXml();
}

const app = express();
const server = createServer(app);
const ioServer = new Server(server, {cors: {origin: '*'}});
app.use(cors());
app.use(express.json());

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err: any) => {
        console.error("Error during Data Source initialization:", err)
    })

app.get('/polygon', async (req: Request, res: Response) => {
    // const polygonRepository = myDataSource.getRepository(Polygon);

    const polygons = [
        {
            "CITY_NAME": "אבו-גוש",
            "POLYGON_ID": 511,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אבו תלול",
            "POLYGON_ID": 103,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אבו סנאן",
            "POLYGON_ID": 1470,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אבו קרינאת",
            "POLYGON_ID": 92,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אבטליון",
            "POLYGON_ID": 1363,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אביאל",
            "POLYGON_ID": 1065,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אביבים",
            "POLYGON_ID": 1604,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אביגדור",
            "POLYGON_ID": 373,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אביחיל",
            "POLYGON_ID": 940,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אביעזר",
            "POLYGON_ID": 359,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אבירים",
            "POLYGON_ID": 1557,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אבן יהודה",
            "POLYGON_ID": 891,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אבן מנחם",
            "POLYGON_ID": 1588,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אבן ספיר",
            "POLYGON_ID": 443,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אבן שמואל",
            "POLYGON_ID": 278,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אבני איתן",
            "POLYGON_ID": 1359,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אבני חפץ",
            "POLYGON_ID": 911,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אבנת",
            "POLYGON_ID": 372,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אבשלום",
            "POLYGON_ID": 109,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אדורה",
            "POLYGON_ID": 271,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אדוריים",
            "POLYGON_ID": 1883,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אדמית",
            "POLYGON_ID": 1592,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אדרת",
            "POLYGON_ID": 339,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אודים",
            "POLYGON_ID": 889,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אודם",
            "POLYGON_ID": 1639,
            "AREA_NAME": "גולן צפון",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אום אל-גנם",
            "POLYGON_ID": 1187,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אום אל פחם",
            "POLYGON_ID": 1047,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אום אל קוטוף",
            "POLYGON_ID": 1015,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אום בטין",
            "POLYGON_ID": 144,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אופקים",
            "POLYGON_ID": 155,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אור הגנוז",
            "POLYGON_ID": 1538,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אור הנר",
            "POLYGON_ID": 266,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אור יהודה",
            "POLYGON_ID": 716,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אור עקיבא",
            "POLYGON_ID": 1044,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אורה",
            "POLYGON_ID": 429,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אורון תעשייה ומסחר",
            "POLYGON_ID": 1769,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אורות",
            "POLYGON_ID": 407,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אורטל",
            "POLYGON_ID": 1606,
            "AREA_NAME": "גולן צפון",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אורים",
            "POLYGON_ID": 158,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אורנים",
            "POLYGON_ID": 1216,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אורנית",
            "POLYGON_ID": 804,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אושה",
            "POLYGON_ID": 1319,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור",
            "POLYGON_ID": 709,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אזור תעשייה אכזיב מילואות",
            "POLYGON_ID": 1562,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה אלון התבור",
            "POLYGON_ID": 1141,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה אפק ולב הארץ",
            "POLYGON_ID": 792,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אזור תעשייה באר טוביה",
            "POLYGON_ID": 384,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אזור תעשייה בני יהודה",
            "POLYGON_ID": 1343,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה בר-לב",
            "POLYGON_ID": 1415,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה בראון",
            "POLYGON_ID": 883,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אזור תעשייה ברוש",
            "POLYGON_ID": 399,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אזור תעשייה דימונה",
            "POLYGON_ID": 87,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אזור תעשייה הדרומי אשקלון",
            "POLYGON_ID": 305,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אזור תעשייה הר טוב - צרעה",
            "POLYGON_ID": 441,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אזור תעשייה חבל מודיעין",
            "POLYGON_ID": 704,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אזור תעשייה חצור הגלילית",
            "POLYGON_ID": 1507,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה טירה",
            "POLYGON_ID": 1758,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אזור תעשייה יקנעם עילית",
            "POLYGON_ID": 1150,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה כנות",
            "POLYGON_ID": 483,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אזור תעשייה כרמיאל",
            "POLYGON_ID": 1435,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה מבוא כרמל",
            "POLYGON_ID": 1125,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה מבואות הגלבוע",
            "POLYGON_ID": 1096,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה מישור אדומים",
            "POLYGON_ID": 478,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אזור תעשייה מיתרים",
            "POLYGON_ID": 199,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אזור תעשייה נ.ע.מ",
            "POLYGON_ID": 207,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אזור תעשייה ניר עציון",
            "POLYGON_ID": 1730,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה נשר - רמלה",
            "POLYGON_ID": 1799,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אזור תעשייה עד הלום",
            "POLYGON_ID": 425,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אזור תעשייה עידן הנגב",
            "POLYGON_ID": 196,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אזור תעשייה עמק חפר",
            "POLYGON_ID": 972,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אזור תעשייה צ.ח.ר",
            "POLYGON_ID": 1496,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה צבאים",
            "POLYGON_ID": 1079,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה ציפורית",
            "POLYGON_ID": 1278,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה צמח",
            "POLYGON_ID": 1212,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה צפוני אשקלון",
            "POLYGON_ID": 333,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אזור תעשייה קדמת גליל",
            "POLYGON_ID": 1313,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה קיסריה",
            "POLYGON_ID": 1020,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה קריית גת",
            "POLYGON_ID": 284,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אזור תעשייה רגבים",
            "POLYGON_ID": 1058,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה רותם",
            "POLYGON_ID": 89,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אזור תעשייה רמת דלתון",
            "POLYGON_ID": 1550,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה שחורת",
            "POLYGON_ID": 10,
            "AREA_NAME": "אילת",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אזור תעשייה שער בנימין",
            "POLYGON_ID": 584,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אזור תעשייה שער נעמן",
            "POLYGON_ID": 1389,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אזור תעשייה תימורים",
            "POLYGON_ID": 386,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אזור תעשייה תרדיון",
            "POLYGON_ID": 1386,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אחווה",
            "POLYGON_ID": 419,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אחוזם",
            "POLYGON_ID": 264,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אחוזת ברק",
            "POLYGON_ID": 1147,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אחיה",
            "POLYGON_ID": 765,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אחיהוד",
            "POLYGON_ID": 1414,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אחיטוב",
            "POLYGON_ID": 970,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אחיסמך",
            "POLYGON_ID": 1811,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אחיעזר",
            "POLYGON_ID": 1849,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "איבטין",
            "POLYGON_ID": 1272,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אייל",
            "POLYGON_ID": 864,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "איילת השחר",
            "POLYGON_ID": 1552,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אילון",
            "POLYGON_ID": 1571,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אילות",
            "POLYGON_ID": 9,
            "AREA_NAME": "אילת",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אילניה",
            "POLYGON_ID": 1265,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אילת",
            "POLYGON_ID": 4,
            "AREA_NAME": "אילת",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אירוס",
            "POLYGON_ID": 1807,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "איתמר",
            "POLYGON_ID": 852,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "איתן",
            "POLYGON_ID": 273,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אכסאל",
            "POLYGON_ID": 1178,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אל-ח'וואלד מערב",
            "POLYGON_ID": 1282,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אל סייד",
            "POLYGON_ID": 1921,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אל עזי",
            "POLYGON_ID": 387,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אל עמארני, אל מסק",
            "POLYGON_ID": 1929,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אל עריאן",
            "POLYGON_ID": 1046,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אל פורעה",
            "POLYGON_ID": 115,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אל רום",
            "POLYGON_ID": 1635,
            "AREA_NAME": "גולן צפון",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אלומה",
            "POLYGON_ID": 323,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אלומות",
            "POLYGON_ID": 1222,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אלון",
            "POLYGON_ID": 556,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אלון הגליל",
            "POLYGON_ID": 1276,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אלון מורה",
            "POLYGON_ID": 877,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אלון שבות",
            "POLYGON_ID": 341,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אלוני אבא",
            "POLYGON_ID": 1231,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אלוני הבשן",
            "POLYGON_ID": 1569,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אלוני יצחק",
            "POLYGON_ID": 1054,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אלונים",
            "POLYGON_ID": 1217,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אלי עד",
            "POLYGON_ID": 1344,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אליאב",
            "POLYGON_ID": 257,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אליכין",
            "POLYGON_ID": 980,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אליפז ומכרות תמנע",
            "POLYGON_ID": 15,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אליפלט",
            "POLYGON_ID": 1466,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אליקים",
            "POLYGON_ID": 1131,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אלישיב",
            "POLYGON_ID": 961,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אלישמע",
            "POLYGON_ID": 827,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אלמגור",
            "POLYGON_ID": 1432,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אלמוג",
            "POLYGON_ID": 499,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אלעד",
            "POLYGON_ID": 735,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אלעזר",
            "POLYGON_ID": 351,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אלפי מנשה",
            "POLYGON_ID": 844,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אלקוש",
            "POLYGON_ID": 1547,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אלקנה",
            "POLYGON_ID": 794,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אמונים",
            "POLYGON_ID": 406,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אמירים",
            "POLYGON_ID": 1454,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אמנון",
            "POLYGON_ID": 1422,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אמץ",
            "POLYGON_ID": 955,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אמציה",
            "POLYGON_ID": 256,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אניעם",
            "POLYGON_ID": 1488,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אעבלין",
            "POLYGON_ID": 1339,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אפיק",
            "POLYGON_ID": 1314,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אפיקים",
            "POLYGON_ID": 1188,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אפק",
            "POLYGON_ID": 1352,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אפרת",
            "POLYGON_ID": 329,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ארבל",
            "POLYGON_ID": 1342,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ארגמן",
            "POLYGON_ID": 853,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ארז",
            "POLYGON_ID": 263,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אריאל",
            "POLYGON_ID": 795,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ארסוף",
            "POLYGON_ID": 862,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אשבול",
            "POLYGON_ID": 225,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אשבל",
            "POLYGON_ID": 1392,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אשדוד -יא,יב,טו,יז,מרינה,סיטי",
            "POLYGON_ID": 432,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אשדוד - א,ב,ד,ה",
            "POLYGON_ID": 468,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אשדוד - ג,ו,ז",
            "POLYGON_ID": 455,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אשדוד - ח,ט,י,יג,יד,טז",
            "POLYGON_ID": 433,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אשדוד - איזור תעשייה צפוני",
            "POLYGON_ID": 530,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אשדות יעקב איחוד",
            "POLYGON_ID": 1161,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אשדות יעקב מאוחד",
            "POLYGON_ID": 1168,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אשחר",
            "POLYGON_ID": 1399,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אשכולות",
            "POLYGON_ID": 203,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אשל הנשיא",
            "POLYGON_ID": 168,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אשלים",
            "POLYGON_ID": 1774,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אשקלון - דרום",
            "POLYGON_ID": 1932,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אשקלון - צפון",
            "POLYGON_ID": 320,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אשרת",
            "POLYGON_ID": 1482,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "אשתאול",
            "POLYGON_ID": 462,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אתר דודאים",
            "POLYGON_ID": 1752,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "אתר ההנצחה גולני",
            "POLYGON_ID": 1715,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "באקה אל גרבייה",
            "POLYGON_ID": 982,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "באר אורה",
            "POLYGON_ID": 12,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "באר גנים",
            "POLYGON_ID": 362,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "באר טוביה",
            "POLYGON_ID": 382,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "באר יעקב",
            "POLYGON_ID": 1809,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "באר מילכה",
            "POLYGON_ID": 1771,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "באר שבע - מזרח",
            "POLYGON_ID": 124,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "באר שבע - דרום",
            "POLYGON_ID": 1749,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "באר שבע - צפון",
            "POLYGON_ID": 1748,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "באר שבע - מערב",
            "POLYGON_ID": 141,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בארות יצחק",
            "POLYGON_ID": 727,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בארותיים",
            "POLYGON_ID": 923,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בארי",
            "POLYGON_ID": 212,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בוסתן הגליל",
            "POLYGON_ID": 1458,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בועיינה-נוג'ידאת",
            "POLYGON_ID": 1328,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בוקעתא",
            "POLYGON_ID": 1641,
            "AREA_NAME": "גולן צפון",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בורגתה",
            "POLYGON_ID": 927,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בחן",
            "POLYGON_ID": 944,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בטחה",
            "POLYGON_ID": 173,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ביצרון",
            "POLYGON_ID": 470,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ביר אלמכסור",
            "POLYGON_ID": 1285,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ביר הדאג'",
            "POLYGON_ID": 78,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ביריה",
            "POLYGON_ID": 1503,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית אורן",
            "POLYGON_ID": 1240,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית אל",
            "POLYGON_ID": 1822,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית אלעזרי",
            "POLYGON_ID": 544,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בית אלפא וחפציבה",
            "POLYGON_ID": 1062,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית אריה",
            "POLYGON_ID": 728,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית ברל",
            "POLYGON_ID": 858,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית ג'אן",
            "POLYGON_ID": 1474,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית גוברין",
            "POLYGON_ID": 301,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית גמליאל",
            "POLYGON_ID": 558,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בית דגן",
            "POLYGON_ID": 1860,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית הגדי",
            "POLYGON_ID": 1760,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בית הלוי",
            "POLYGON_ID": 943,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית הלל",
            "POLYGON_ID": 1640,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית העמק",
            "POLYGON_ID": 1481,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית הערבה",
            "POLYGON_ID": 529,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בית השיטה",
            "POLYGON_ID": 1087,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית זית",
            "POLYGON_ID": 466,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית זרע",
            "POLYGON_ID": 1196,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית חגי",
            "POLYGON_ID": 247,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית חורון",
            "POLYGON_ID": 596,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית חזון",
            "POLYGON_ID": 965,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית חלקיה",
            "POLYGON_ID": 471,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בית חנן",
            "POLYGON_ID": 1806,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית חנניה",
            "POLYGON_ID": 1064,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית חרות",
            "POLYGON_ID": 958,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית חשמונאי",
            "POLYGON_ID": 1780,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית יהושע",
            "POLYGON_ID": 890,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית יוסף",
            "POLYGON_ID": 1094,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית ינאי",
            "POLYGON_ID": 959,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית יצחק - שער חפר",
            "POLYGON_ID": 925,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית ירח",
            "POLYGON_ID": 1239,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית יתיר",
            "POLYGON_ID": 193,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית לחם הגלילית",
            "POLYGON_ID": 1245,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית מאיר",
            "POLYGON_ID": 490,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית נחמיה",
            "POLYGON_ID": 1852,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית ניר",
            "POLYGON_ID": 325,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית נקופה",
            "POLYGON_ID": 512,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית סוהר השרון",
            "POLYGON_ID": 1756,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית סוהר מגידו",
            "POLYGON_ID": 1755,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית סוהר נפחא",
            "POLYGON_ID": 1757,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בית סוהר צלמון",
            "POLYGON_ID": 1931,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית סוהר קישון",
            "POLYGON_ID": 1928,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית סוהר שיטה וגלבוע",
            "POLYGON_ID": 1754,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית ספר אורט בנימינה",
            "POLYGON_ID": 1073,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית ספר שדה מירון",
            "POLYGON_ID": 1722,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית עובד",
            "POLYGON_ID": 1794,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית עוזיאל",
            "POLYGON_ID": 578,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית עזרא",
            "POLYGON_ID": 394,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בית עלמין תל רגב",
            "POLYGON_ID": 1871,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית עריף",
            "POLYGON_ID": 1864,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית צבי",
            "POLYGON_ID": 1214,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית קמה",
            "POLYGON_ID": 227,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בית קשת",
            "POLYGON_ID": 1234,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית רימון",
            "POLYGON_ID": 1310,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית שאן",
            "POLYGON_ID": 1042,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית שמש",
            "POLYGON_ID": 412,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בית שערים",
            "POLYGON_ID": 1185,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בית שקמה",
            "POLYGON_ID": 311,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ביתן אהרן",
            "POLYGON_ID": 950,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ביתר עילית",
            "POLYGON_ID": 371,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בלפוריה",
            "POLYGON_ID": 1139,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בן זכאי",
            "POLYGON_ID": 557,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בן עמי",
            "POLYGON_ID": 1520,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בן שמן",
            "POLYGON_ID": 1831,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בני ברק",
            "POLYGON_ID": 754,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בני דקלים",
            "POLYGON_ID": 254,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בני דרום",
            "POLYGON_ID": 500,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בני דרור",
            "POLYGON_ID": 892,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בני יהודה וגבעת יואב",
            "POLYGON_ID": 1331,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בני נצרים",
            "POLYGON_ID": 95,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בני עטרות",
            "POLYGON_ID": 712,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בני עי''ש",
            "POLYGON_ID": 456,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בני ציון",
            "POLYGON_ID": 867,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בני ראם",
            "POLYGON_ID": 438,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בניה",
            "POLYGON_ID": 543,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בנימינה",
            "POLYGON_ID": 1053,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בסמת טבעון",
            "POLYGON_ID": 1244,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בענה",
            "POLYGON_ID": 1434,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בצרה",
            "POLYGON_ID": 863,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בצת",
            "POLYGON_ID": 1581,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בקוע",
            "POLYGON_ID": 536,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בקעות",
            "POLYGON_ID": 887,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בר גיורא",
            "POLYGON_ID": 400,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בר יוחאי",
            "POLYGON_ID": 1526,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ברוכין",
            "POLYGON_ID": 782,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ברור חיל",
            "POLYGON_ID": 267,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ברוש",
            "POLYGON_ID": 189,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ברטעה",
            "POLYGON_ID": 1017,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ברכיה",
            "POLYGON_ID": 344,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ברעם",
            "POLYGON_ID": 1575,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ברקאי",
            "POLYGON_ID": 1022,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ברקן",
            "POLYGON_ID": 788,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ברקת",
            "POLYGON_ID": 713,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בת-ים",
            "POLYGON_ID": 1866,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בת הדר",
            "POLYGON_ID": 317,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "בת חן",
            "POLYGON_ID": 949,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בת חפר",
            "POLYGON_ID": 932,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בת עין",
            "POLYGON_ID": 340,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "בת שלמה",
            "POLYGON_ID": 1110,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "בתי מלון ים המלח",
            "POLYGON_ID": 108,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ג'דידה מכר",
            "POLYGON_ID": 1424,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ג'וליס",
            "POLYGON_ID": 1448,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ג'לג'וליה",
            "POLYGON_ID": 828,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ג'סר א-זרקא",
            "POLYGON_ID": 1063,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ג'ש - גוש חלב",
            "POLYGON_ID": 1541,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ג'ת",
            "POLYGON_ID": 977,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גאולי תימן",
            "POLYGON_ID": 973,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גאולים",
            "POLYGON_ID": 915,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גאליה",
            "POLYGON_ID": 571,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבולות",
            "POLYGON_ID": 118,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גבים, מכללת ספיר",
            "POLYGON_ID": 1759,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גבע בנימין",
            "POLYGON_ID": 565,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבע כרמל",
            "POLYGON_ID": 1149,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גבעות",
            "POLYGON_ID": 360,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבעות בר",
            "POLYGON_ID": 181,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גבעות גורל",
            "POLYGON_ID": 1919,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גבעות עדן",
            "POLYGON_ID": 350,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבעת אבני",
            "POLYGON_ID": 1297,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גבעת אלה",
            "POLYGON_ID": 1232,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גבעת אסף",
            "POLYGON_ID": 1891,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבעת ברנר",
            "POLYGON_ID": 567,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גבעת הראל וגבעת הרואה",
            "POLYGON_ID": 1890,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבעת השלושה",
            "POLYGON_ID": 787,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבעת וולפסון",
            "POLYGON_ID": 1228,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גבעת וושינגטון",
            "POLYGON_ID": 519,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גבעת זאב",
            "POLYGON_ID": 570,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבעת חביבה",
            "POLYGON_ID": 1006,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גבעת חיים איחוד",
            "POLYGON_ID": 975,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבעת חיים מאוחד",
            "POLYGON_ID": 968,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבעת חן",
            "POLYGON_ID": 837,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבעת יערים",
            "POLYGON_ID": 474,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבעת ישעיהו",
            "POLYGON_ID": 349,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבעת כ''ח",
            "POLYGON_ID": 719,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבעת ניל''י",
            "POLYGON_ID": 1074,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גבעת עדה",
            "POLYGON_ID": 1056,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גבעת עוז",
            "POLYGON_ID": 1084,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גבעת שמואל",
            "POLYGON_ID": 755,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבעת שפירא",
            "POLYGON_ID": 951,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גבעתי",
            "POLYGON_ID": 395,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גבעתיים",
            "POLYGON_ID": 744,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גברעם",
            "POLYGON_ID": 282,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גבת",
            "POLYGON_ID": 1164,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גדות",
            "POLYGON_ID": 1543,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גדעונה",
            "POLYGON_ID": 1085,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גדרה",
            "POLYGON_ID": 484,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גונן",
            "POLYGON_ID": 1618,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גורן",
            "POLYGON_ID": 1565,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גורנות הגליל",
            "POLYGON_ID": 1572,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גזית",
            "POLYGON_ID": 1148,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גזר",
            "POLYGON_ID": 579,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גיאה",
            "POLYGON_ID": 306,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גיבתון",
            "POLYGON_ID": 1779,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גיזו",
            "POLYGON_ID": 505,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גילת",
            "POLYGON_ID": 164,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גינוסר",
            "POLYGON_ID": 1372,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גינתון",
            "POLYGON_ID": 1842,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גיתה",
            "POLYGON_ID": 1483,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גיתית",
            "POLYGON_ID": 798,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גלאון",
            "POLYGON_ID": 315,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גלגל",
            "POLYGON_ID": 707,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מתחם פי גלילות",
            "POLYGON_ID": 1751,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גלעד",
            "POLYGON_ID": 1083,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גמזו",
            "POLYGON_ID": 1812,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גן הדרום",
            "POLYGON_ID": 480,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גן השומרון",
            "POLYGON_ID": 1004,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גן חיים",
            "POLYGON_ID": 856,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גן יאשיה",
            "POLYGON_ID": 937,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גן יבנה",
            "POLYGON_ID": 447,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גן נר",
            "POLYGON_ID": 1069,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גן שורק",
            "POLYGON_ID": 1826,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גן שלמה",
            "POLYGON_ID": 572,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גן שמואל",
            "POLYGON_ID": 992,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גנות",
            "POLYGON_ID": 710,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גנות הדר",
            "POLYGON_ID": 926,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גני הדר",
            "POLYGON_ID": 589,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גני טל",
            "POLYGON_ID": 457,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גני יוחנן",
            "POLYGON_ID": 559,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גני עם",
            "POLYGON_ID": 825,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גני תקווה",
            "POLYGON_ID": 746,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גניגר",
            "POLYGON_ID": 1159,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "געש",
            "POLYGON_ID": 872,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "געתון",
            "POLYGON_ID": 1522,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גפן",
            "POLYGON_ID": 411,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "גרופית",
            "POLYGON_ID": 22,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גשור",
            "POLYGON_ID": 1349,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גשר",
            "POLYGON_ID": 1135,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גשר הזיו",
            "POLYGON_ID": 1545,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "גת",
            "POLYGON_ID": 314,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "גת רימון",
            "POLYGON_ID": 758,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "דבוריה",
            "POLYGON_ID": 1179,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דביר",
            "POLYGON_ID": 210,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "דברת",
            "POLYGON_ID": 1154,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דגניה א",
            "POLYGON_ID": 1224,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דגניה ב",
            "POLYGON_ID": 1211,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דוב''ב",
            "POLYGON_ID": 1574,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דולב",
            "POLYGON_ID": 1815,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "דור",
            "POLYGON_ID": 1109,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דורות",
            "POLYGON_ID": 249,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "דחי",
            "POLYGON_ID": 1134,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דימונה",
            "POLYGON_ID": 88,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "דיר אל-אסד",
            "POLYGON_ID": 1442,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דיר חנא",
            "POLYGON_ID": 1381,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דישון",
            "POLYGON_ID": 1599,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דליה",
            "POLYGON_ID": 1102,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דלית אל כרמל",
            "POLYGON_ID": 1172,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דלתון",
            "POLYGON_ID": 1542,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דמיידה",
            "POLYGON_ID": 1340,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דניאל",
            "POLYGON_ID": 1930,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "דפנה",
            "POLYGON_ID": 1653,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "דקל",
            "POLYGON_ID": 110,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "האון",
            "POLYGON_ID": 1251,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "הבונים",
            "POLYGON_ID": 1128,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "הגושרים",
            "POLYGON_ID": 1649,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "הדר עם",
            "POLYGON_ID": 941,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "הוד השרון",
            "POLYGON_ID": 810,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "הודיה",
            "POLYGON_ID": 345,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "הודיות",
            "POLYGON_ID": 1322,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "הושעיה",
            "POLYGON_ID": 1277,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "הזורעים",
            "POLYGON_ID": 1268,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "החותרים",
            "POLYGON_ID": 1258,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "היוגב",
            "POLYGON_ID": 1117,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "הילה",
            "POLYGON_ID": 1556,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "המכללה האקדמית כנרת",
            "POLYGON_ID": 1225,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "המעפיל",
            "POLYGON_ID": 962,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "המרכז האקדמי רופין",
            "POLYGON_ID": 935,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "הסוללים",
            "POLYGON_ID": 1263,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "העוגן",
            "POLYGON_ID": 954,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "הר-חלוץ",
            "POLYGON_ID": 1463,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "הר אדר",
            "POLYGON_ID": 538,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "הר ברכה",
            "POLYGON_ID": 861,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "הר גילה",
            "POLYGON_ID": 402,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "הר הנגב",
            "POLYGON_ID": 1924,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "הר עמשא",
            "POLYGON_ID": 182,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "הראל",
            "POLYGON_ID": 506,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "הרדוף",
            "POLYGON_ID": 1275,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "הרצליה - מערב",
            "POLYGON_ID": 834,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "הרצליה - מרכז וגליל ים",
            "POLYGON_ID": 824,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "הררית יחד",
            "POLYGON_ID": 1370,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ואדי אל חמאם",
            "POLYGON_ID": 1357,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ואדי אל נעם דרום",
            "POLYGON_ID": 91,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ורד יריחו",
            "POLYGON_ID": 550,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ורדון",
            "POLYGON_ID": 348,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "זבדיאל",
            "POLYGON_ID": 336,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "זוהר",
            "POLYGON_ID": 287,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "זיקים",
            "POLYGON_ID": 290,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "זיתן",
            "POLYGON_ID": 1850,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "זכרון יעקב",
            "POLYGON_ID": 1081,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "זכריה",
            "POLYGON_ID": 380,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "זמר",
            "POLYGON_ID": 956,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "זמרת, שובה",
            "POLYGON_ID": 220,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "זנוח",
            "POLYGON_ID": 413,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "זרועה",
            "POLYGON_ID": 232,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "זרזיר",
            "POLYGON_ID": 1205,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "זרחיה",
            "POLYGON_ID": 353,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "זרעית",
            "POLYGON_ID": 1603,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ח'וואלד",
            "POLYGON_ID": 1274,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חבצלת השרון וצוקי ים",
            "POLYGON_ID": 947,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חברון",
            "POLYGON_ID": 1736,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חג'אג'רה",
            "POLYGON_ID": 1246,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חגור",
            "POLYGON_ID": 815,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חגלה",
            "POLYGON_ID": 967,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חד נס",
            "POLYGON_ID": 1446,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חדיד",
            "POLYGON_ID": 1851,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חדרה - מרכז",
            "POLYGON_ID": 985,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חדרה - מערב",
            "POLYGON_ID": 984,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חדרה - מזרח",
            "POLYGON_ID": 983,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חדרה - נווה חיים",
            "POLYGON_ID": 989,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חוות גלעד",
            "POLYGON_ID": 1884,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חוות יאיר",
            "POLYGON_ID": 1723,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חוות עדן",
            "POLYGON_ID": 1026,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חוות ערנדל",
            "POLYGON_ID": 1873,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "חוות שדה בר",
            "POLYGON_ID": 1713,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חוות שיקמים",
            "POLYGON_ID": 253,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "חולדה",
            "POLYGON_ID": 535,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חולון",
            "POLYGON_ID": 701,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חולית",
            "POLYGON_ID": 128,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "חולתה",
            "POLYGON_ID": 1578,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חוסן",
            "POLYGON_ID": 1514,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חוסנייה",
            "POLYGON_ID": 1418,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חופית",
            "POLYGON_ID": 964,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חוקוק",
            "POLYGON_ID": 1403,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חורה",
            "POLYGON_ID": 156,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "חורפיש",
            "POLYGON_ID": 1536,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חורשים",
            "POLYGON_ID": 816,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חזון",
            "POLYGON_ID": 1419,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חי-בר יטבתה",
            "POLYGON_ID": 1872,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "חיבת ציון",
            "POLYGON_ID": 974,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חיננית",
            "POLYGON_ID": 1035,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חיפה-מפרץ",
            "POLYGON_ID": 1336,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חיפה - מערב",
            "POLYGON_ID": 1292,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חיפה - כרמל ועיר תחתית",
            "POLYGON_ID": 1302,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חיפה - נווה שאנן ורמות כרמל",
            "POLYGON_ID": 1270,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חיפה - קריית חיים ושמואל",
            "POLYGON_ID": 1878,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חירן",
            "POLYGON_ID": 1920,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "חלמיש",
            "POLYGON_ID": 705,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חלץ",
            "POLYGON_ID": 276,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "חמד",
            "POLYGON_ID": 711,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חמדיה",
            "POLYGON_ID": 1071,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חמדת",
            "POLYGON_ID": 897,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חמרה",
            "POLYGON_ID": 865,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חמת גדר",
            "POLYGON_ID": 1198,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חניאל",
            "POLYGON_ID": 930,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חניתה",
            "POLYGON_ID": 1591,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חנתון",
            "POLYGON_ID": 1308,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חספין",
            "POLYGON_ID": 1374,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חפץ חיים",
            "POLYGON_ID": 458,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "חצב",
            "POLYGON_ID": 437,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "חצבה",
            "POLYGON_ID": 46,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "חצור",
            "POLYGON_ID": 435,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "חצור הגלילית",
            "POLYGON_ID": 1506,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חצרים",
            "POLYGON_ID": 139,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "חרב לאת",
            "POLYGON_ID": 979,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חרוצים",
            "POLYGON_ID": 873,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חרות",
            "POLYGON_ID": 876,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חריש",
            "POLYGON_ID": 1008,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חרמש",
            "POLYGON_ID": 987,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חרשה",
            "POLYGON_ID": 1833,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "חרשים",
            "POLYGON_ID": 1473,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "חשמונאים",
            "POLYGON_ID": 1813,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "טבריה",
            "POLYGON_ID": 1298,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "טובא זנגריה",
            "POLYGON_ID": 1487,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "טורעאן",
            "POLYGON_ID": 1296,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "טייבה",
            "POLYGON_ID": 886,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "טייבה בגלבוע",
            "POLYGON_ID": 1122,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "טירה",
            "POLYGON_ID": 869,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "טירת יהודה",
            "POLYGON_ID": 703,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "טירת כרמל",
            "POLYGON_ID": 1259,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "טירת צבי",
            "POLYGON_ID": 991,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "טל-אל",
            "POLYGON_ID": 1433,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "טל מנשה",
            "POLYGON_ID": 1034,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "טל שחר",
            "POLYGON_ID": 486,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "טללים",
            "POLYGON_ID": 75,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "טלמון",
            "POLYGON_ID": 1832,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "טמרה",
            "POLYGON_ID": 1360,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "טמרה בגלבוע",
            "POLYGON_ID": 1142,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "טנא עומרים",
            "POLYGON_ID": 198,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "טפחות",
            "POLYGON_ID": 1387,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יבול",
            "POLYGON_ID": 105,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "יבנאל",
            "POLYGON_ID": 1210,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יבנה",
            "POLYGON_ID": 566,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "יגור",
            "POLYGON_ID": 1242,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יגל",
            "POLYGON_ID": 1853,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "יד בנימין",
            "POLYGON_ID": 472,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "יד השמונה",
            "POLYGON_ID": 509,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "יד חנה",
            "POLYGON_ID": 928,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "יד מרדכי",
            "POLYGON_ID": 281,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "יד נתן",
            "POLYGON_ID": 322,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "יד רמב''ם",
            "POLYGON_ID": 1784,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "יהוד-מונוסון",
            "POLYGON_ID": 717,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "יהל",
            "POLYGON_ID": 28,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "יובלים",
            "POLYGON_ID": 1391,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יודפת",
            "POLYGON_ID": 1355,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יונתן",
            "POLYGON_ID": 1467,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יושיביה",
            "POLYGON_ID": 223,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "יזרעאל",
            "POLYGON_ID": 1091,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יחיעם",
            "POLYGON_ID": 1512,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יטבתה",
            "POLYGON_ID": 18,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ייט''ב",
            "POLYGON_ID": 1837,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "יכיני",
            "POLYGON_ID": 240,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ינוב",
            "POLYGON_ID": 917,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ינוח-ג'ת",
            "POLYGON_ID": 1493,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ינון",
            "POLYGON_ID": 409,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "יסוד המעלה",
            "POLYGON_ID": 1577,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יסודות",
            "POLYGON_ID": 522,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "יסעור",
            "POLYGON_ID": 1405,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יעד",
            "POLYGON_ID": 1390,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יעף",
            "POLYGON_ID": 903,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "יערה",
            "POLYGON_ID": 1583,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יערות הכרמל",
            "POLYGON_ID": 1199,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יפיע",
            "POLYGON_ID": 1176,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יפית",
            "POLYGON_ID": 766,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "יפעת",
            "POLYGON_ID": 1165,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יפתח",
            "POLYGON_ID": 1617,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יצהר",
            "POLYGON_ID": 851,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "יציץ",
            "POLYGON_ID": 568,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "יקום",
            "POLYGON_ID": 878,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "יקיר",
            "POLYGON_ID": 831,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "יקנעם המושבה והזורע",
            "POLYGON_ID": 1138,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יקנעם עילית",
            "POLYGON_ID": 1137,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "יראון",
            "POLYGON_ID": 1598,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ירדנה",
            "POLYGON_ID": 1098,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ירוחם",
            "POLYGON_ID": 73,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ירושלים - כפר עקב",
            "POLYGON_ID": 1926,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ירושלים - מערב",
            "POLYGON_ID": 1922,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ירושלים - צפון",
            "POLYGON_ID": 527,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ירושלים - מזרח",
            "POLYGON_ID": 496,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ירושלים - מרכז",
            "POLYGON_ID": 391,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ירושלים - דרום",
            "POLYGON_ID": 415,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ירושלים - אזור תעשייה עטרות",
            "POLYGON_ID": 564,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ירחיב",
            "POLYGON_ID": 829,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ירכא",
            "POLYGON_ID": 1462,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ירקונה",
            "POLYGON_ID": 822,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ישובי אומן",
            "POLYGON_ID": 1090,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ישובי יעל",
            "POLYGON_ID": 1077,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ישעי",
            "POLYGON_ID": 427,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ישרש",
            "POLYGON_ID": 1790,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "יתד",
            "POLYGON_ID": 112,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כאבול",
            "POLYGON_ID": 1384,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כאוכב אבו אלהיג'א",
            "POLYGON_ID": 1354,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כברי",
            "POLYGON_ID": 1531,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כדורי",
            "POLYGON_ID": 1209,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כוכב השחר",
            "POLYGON_ID": 1847,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כוכב יאיר - צור יגאל",
            "POLYGON_ID": 870,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כוכב יעקב",
            "POLYGON_ID": 598,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כוכב מיכאל",
            "POLYGON_ID": 307,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כורזים ורד הגליל",
            "POLYGON_ID": 1431,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כושי רמון",
            "POLYGON_ID": 31,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כחל",
            "POLYGON_ID": 1410,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כינרת מושבה",
            "POLYGON_ID": 1238,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כינרת קבוצה",
            "POLYGON_ID": 1223,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כיסופים",
            "POLYGON_ID": 188,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כיסרא סמיע",
            "POLYGON_ID": 1472,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כישור",
            "POLYGON_ID": 1449,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כלא דמון",
            "POLYGON_ID": 1241,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כליל",
            "POLYGON_ID": 1492,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כלנית",
            "POLYGON_ID": 1394,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כמהין",
            "POLYGON_ID": 1768,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כמון",
            "POLYGON_ID": 1427,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כנות",
            "POLYGON_ID": 482,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כנף",
            "POLYGON_ID": 1395,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כסייפה",
            "POLYGON_ID": 126,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כסלון",
            "POLYGON_ID": 448,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כעביה",
            "POLYGON_ID": 1262,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כעביה טבאש",
            "POLYGON_ID": 1261,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר אביב",
            "POLYGON_ID": 531,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כפר אדומים",
            "POLYGON_ID": 540,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר אוריה",
            "POLYGON_ID": 473,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר אחים",
            "POLYGON_ID": 408,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כפר אלדד",
            "POLYGON_ID": 342,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר ביאליק",
            "POLYGON_ID": 1338,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר ביל''ו",
            "POLYGON_ID": 575,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר בלום",
            "POLYGON_ID": 1631,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר בן נון",
            "POLYGON_ID": 562,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר ברא",
            "POLYGON_ID": 817,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר ברוך",
            "POLYGON_ID": 1145,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר גדעון",
            "POLYGON_ID": 1146,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר גלים",
            "POLYGON_ID": 1269,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר גליקסון",
            "POLYGON_ID": 1045,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר גלעדי",
            "POLYGON_ID": 1657,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר גמילה מלכישוע",
            "POLYGON_ID": 1000,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר דניאל",
            "POLYGON_ID": 1819,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר האורנים",
            "POLYGON_ID": 1803,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר החורש",
            "POLYGON_ID": 1207,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר המכבי",
            "POLYGON_ID": 1305,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר הנגיד",
            "POLYGON_ID": 585,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כפר הנוער ימין אורד",
            "POLYGON_ID": 1191,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר הנשיא",
            "POLYGON_ID": 1509,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר הס",
            "POLYGON_ID": 879,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר הרא''ה",
            "POLYGON_ID": 966,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר הרי''ף וצומת ראם",
            "POLYGON_ID": 410,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כפר ויתקין",
            "POLYGON_ID": 960,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר ורבורג",
            "POLYGON_ID": 377,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כפר ורדים",
            "POLYGON_ID": 1513,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר זוהרים",
            "POLYGON_ID": 310,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר זיתים",
            "POLYGON_ID": 1341,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר חב''ד",
            "POLYGON_ID": 1861,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר חיטים",
            "POLYGON_ID": 1330,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר חיים",
            "POLYGON_ID": 942,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר חנניה",
            "POLYGON_ID": 1437,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר חסידים",
            "POLYGON_ID": 1243,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר חרוב",
            "POLYGON_ID": 1289,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר טבאש",
            "POLYGON_ID": 1260,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר טרומן",
            "POLYGON_ID": 1854,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר ידידיה",
            "POLYGON_ID": 934,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר יהושע",
            "POLYGON_ID": 1163,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר יובל",
            "POLYGON_ID": 1662,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר יונה",
            "POLYGON_ID": 922,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר יחזקאל",
            "POLYGON_ID": 1092,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר יסיף",
            "POLYGON_ID": 1461,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר יעבץ",
            "POLYGON_ID": 902,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר כמא",
            "POLYGON_ID": 1235,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר כנא",
            "POLYGON_ID": 1255,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר מונש",
            "POLYGON_ID": 936,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר מימון ותושיה",
            "POLYGON_ID": 213,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כפר מל''ל",
            "POLYGON_ID": 842,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר מנדא",
            "POLYGON_ID": 1320,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר מנחם",
            "POLYGON_ID": 397,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר מסריק",
            "POLYGON_ID": 1396,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר מצר",
            "POLYGON_ID": 1156,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר מרדכי",
            "POLYGON_ID": 533,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כפר נהר הירדן",
            "POLYGON_ID": 1287,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר נוער בן שמן",
            "POLYGON_ID": 1843,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר נטר",
            "POLYGON_ID": 899,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר סאלד",
            "POLYGON_ID": 1638,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר סבא",
            "POLYGON_ID": 840,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר סילבר",
            "POLYGON_ID": 352,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כפר סירקין",
            "POLYGON_ID": 761,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר עבודה",
            "POLYGON_ID": 894,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר עזה",
            "POLYGON_ID": 239,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כפר עציון",
            "POLYGON_ID": 326,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר פינס",
            "POLYGON_ID": 1031,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר קאסם",
            "POLYGON_ID": 793,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר קיש",
            "POLYGON_ID": 1166,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר קרע",
            "POLYGON_ID": 1039,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר רופין",
            "POLYGON_ID": 1019,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר רות",
            "POLYGON_ID": 1792,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר שמאי",
            "POLYGON_ID": 1475,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר שמואל",
            "POLYGON_ID": 593,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר שמריהו",
            "POLYGON_ID": 848,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר תבור",
            "POLYGON_ID": 1181,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כפר תפוח",
            "POLYGON_ID": 807,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כפר תקווה",
            "POLYGON_ID": 1202,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כרכום",
            "POLYGON_ID": 1457,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כרם ביבנה",
            "POLYGON_ID": 518,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כרם בן זמרה",
            "POLYGON_ID": 1560,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כרם מהר''ל",
            "POLYGON_ID": 1136,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כרם שלום",
            "POLYGON_ID": 127,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כרמי יוסף",
            "POLYGON_ID": 553,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כרמי צור",
            "POLYGON_ID": 302,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כרמי קטיף",
            "POLYGON_ID": 261,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "כרמיאל",
            "POLYGON_ID": 1417,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "כרמיה",
            "POLYGON_ID": 291,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כרמים",
            "POLYGON_ID": 176,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כרמית",
            "POLYGON_ID": 175,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "כרמל",
            "POLYGON_ID": 217,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "לבון",
            "POLYGON_ID": 1450,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "לביא",
            "POLYGON_ID": 1312,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "לבנים",
            "POLYGON_ID": 1388,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "להב",
            "POLYGON_ID": 197,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "להבות הבשן",
            "POLYGON_ID": 1625,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "להבות חביבה",
            "POLYGON_ID": 976,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "להבים",
            "POLYGON_ID": 185,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "לוד",
            "POLYGON_ID": 1830,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "לוזית",
            "POLYGON_ID": 358,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "לוחמי הגטאות",
            "POLYGON_ID": 1469,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "לוטם וחמדון",
            "POLYGON_ID": 1400,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "לוטן",
            "POLYGON_ID": 24,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "לטרון",
            "POLYGON_ID": 545,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "לימן",
            "POLYGON_ID": 1563,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "לכיש",
            "POLYGON_ID": 270,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "לפיד",
            "POLYGON_ID": 1802,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "לפידות",
            "POLYGON_ID": 1471,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "לקיה",
            "POLYGON_ID": 153,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מאור",
            "POLYGON_ID": 986,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מאיר שפיה",
            "POLYGON_ID": 1100,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מבוא ביתר",
            "POLYGON_ID": 401,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מבוא דותן",
            "POLYGON_ID": 988,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מבוא חורון",
            "POLYGON_ID": 554,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מבוא חמה",
            "POLYGON_ID": 1257,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מבוא מודיעים",
            "POLYGON_ID": 1820,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מבואות יריחו",
            "POLYGON_ID": 1804,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מבועים",
            "POLYGON_ID": 224,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מבטחים, עמיעוז, ישע",
            "POLYGON_ID": 135,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מבקיעים",
            "POLYGON_ID": 304,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מבשרת ציון",
            "POLYGON_ID": 494,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מג'דל כרום",
            "POLYGON_ID": 1425,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מג'דל שמס",
            "POLYGON_ID": 1665,
            "AREA_NAME": "גולן צפון",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מגדים",
            "POLYGON_ID": 1213,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מגדל",
            "POLYGON_ID": 1358,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מגדל העמק",
            "POLYGON_ID": 1158,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מגדל עוז",
            "POLYGON_ID": 328,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מגדלים",
            "POLYGON_ID": 789,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מגל",
            "POLYGON_ID": 971,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מגן",
            "POLYGON_ID": 154,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מגן שאול",
            "POLYGON_ID": 1061,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מגרון",
            "POLYGON_ID": 599,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מגשימים",
            "POLYGON_ID": 732,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מדרך עוז",
            "POLYGON_ID": 1104,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מדרשת בן גוריון",
            "POLYGON_ID": 53,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מודיעין",
            "POLYGON_ID": 1785,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מודיעין - ישפרו סנטר",
            "POLYGON_ID": 594,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מודיעין - ליגד סנטר",
            "POLYGON_ID": 1791,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מודיעין עילית",
            "POLYGON_ID": 1814,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מולדת",
            "POLYGON_ID": 1107,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מועאוויה",
            "POLYGON_ID": 1066,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מוצא עילית",
            "POLYGON_ID": 495,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מוקיבלה",
            "POLYGON_ID": 1060,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מורן",
            "POLYGON_ID": 1436,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מורשת",
            "POLYGON_ID": 1348,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מזור",
            "POLYGON_ID": 739,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מזכרת בתיה",
            "POLYGON_ID": 534,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מזרע",
            "POLYGON_ID": 1152,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מזרעה",
            "POLYGON_ID": 1490,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מחולה",
            "POLYGON_ID": 963,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מחניים",
            "POLYGON_ID": 1517,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מחסיה",
            "POLYGON_ID": 422,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מטווח ניר עם",
            "POLYGON_ID": 251,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מטולה",
            "POLYGON_ID": 1669,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מטע",
            "POLYGON_ID": 389,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מי עמי",
            "POLYGON_ID": 1048,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מייסר",
            "POLYGON_ID": 999,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מיצד",
            "POLYGON_ID": 288,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מיצר",
            "POLYGON_ID": 1290,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מירב",
            "POLYGON_ID": 1009,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מירון",
            "POLYGON_ID": 1502,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מישר",
            "POLYGON_ID": 503,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מיתר",
            "POLYGON_ID": 169,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מכון וינגייט",
            "POLYGON_ID": 888,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מכורה",
            "POLYGON_ID": 847,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מכמורת",
            "POLYGON_ID": 978,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מכמנים",
            "POLYGON_ID": 1426,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מלונות ים המלח מרכז",
            "POLYGON_ID": 1874,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מלכיה",
            "POLYGON_ID": 1608,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ממשית",
            "POLYGON_ID": 1897,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מנוחה",
            "POLYGON_ID": 324,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מנוף",
            "POLYGON_ID": 1366,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מנות",
            "POLYGON_ID": 1555,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מנחמיה",
            "POLYGON_ID": 1167,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מנחת מחניים",
            "POLYGON_ID": 1508,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מנרה",
            "POLYGON_ID": 1636,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מנשית זבדה",
            "POLYGON_ID": 1204,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מסד",
            "POLYGON_ID": 1371,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מסדה",
            "POLYGON_ID": 1189,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מסילות",
            "POLYGON_ID": 1049,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מסילת ציון",
            "POLYGON_ID": 489,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מסלול",
            "POLYGON_ID": 162,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מסעדה",
            "POLYGON_ID": 1655,
            "AREA_NAME": "גולן צפון",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מע'אר",
            "POLYGON_ID": 1393,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מעברות",
            "POLYGON_ID": 953,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מעגלים, גבעולים, מלילות",
            "POLYGON_ID": 200,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מעגן",
            "POLYGON_ID": 1226,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מעגן מיכאל",
            "POLYGON_ID": 1072,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מעוז חיים",
            "POLYGON_ID": 1052,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מעון",
            "POLYGON_ID": 211,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מעון צופיה",
            "POLYGON_ID": 1761,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מעונה",
            "POLYGON_ID": 1534,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מעיין ברוך",
            "POLYGON_ID": 1658,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מעיין צבי",
            "POLYGON_ID": 1088,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מעיליא",
            "POLYGON_ID": 1540,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מעלה אדומים",
            "POLYGON_ID": 454,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מעלה אפרים",
            "POLYGON_ID": 775,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מעלה גלבוע",
            "POLYGON_ID": 1024,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מעלה גמלא",
            "POLYGON_ID": 1411,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מעלה החמישה",
            "POLYGON_ID": 526,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מעלה חבר",
            "POLYGON_ID": 243,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מעלה לבונה",
            "POLYGON_ID": 750,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מעלה מכמש",
            "POLYGON_ID": 1776,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מעלה עירון",
            "POLYGON_ID": 1075,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מעלה עמוס",
            "POLYGON_ID": 294,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מעלה צביה",
            "POLYGON_ID": 1409,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מעלה רחבעם",
            "POLYGON_ID": 1923,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מעלה שומרון",
            "POLYGON_ID": 845,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מעלות תרשיחא",
            "POLYGON_ID": 1523,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מענית",
            "POLYGON_ID": 1007,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מעש",
            "POLYGON_ID": 747,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מפלסים",
            "POLYGON_ID": 244,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מצדה",
            "POLYGON_ID": 170,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מצובה",
            "POLYGON_ID": 1570,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מצוקי דרגות",
            "POLYGON_ID": 295,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מצליח",
            "POLYGON_ID": 1783,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מצפה",
            "POLYGON_ID": 1323,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מצפה אבי''ב",
            "POLYGON_ID": 1353,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מצפה אילן",
            "POLYGON_ID": 1016,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מצפה יריחו",
            "POLYGON_ID": 541,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מצפה נטופה",
            "POLYGON_ID": 1329,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מצפה רמון",
            "POLYGON_ID": 38,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מצפה שלם",
            "POLYGON_ID": 280,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מצר",
            "POLYGON_ID": 994,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מקווה ישראל",
            "POLYGON_ID": 715,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מרגליות",
            "POLYGON_ID": 1642,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מרום גולן",
            "POLYGON_ID": 1622,
            "AREA_NAME": "גולן צפון",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מרחב עם",
            "POLYGON_ID": 58,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מרחביה מושב",
            "POLYGON_ID": 1118,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מרחביה קיבוץ",
            "POLYGON_ID": 1119,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מרחצאות עין גדי",
            "POLYGON_ID": 218,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מרכז אזורי דרום השרון",
            "POLYGON_ID": 814,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מרכז אזורי מבואות חרמון",
            "POLYGON_ID": 1613,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מרכז אזורי מגילות",
            "POLYGON_ID": 1716,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מרכז אזורי מרום גליל",
            "POLYGON_ID": 1525,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מרכז אזורי משגב",
            "POLYGON_ID": 1378,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מרכז חבר",
            "POLYGON_ID": 1076,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מרכז ימי קיסריה",
            "POLYGON_ID": 1043,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מרכז מיר''ב",
            "POLYGON_ID": 1144,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מרכז שפירא",
            "POLYGON_ID": 366,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מרעית",
            "POLYGON_ID": 150,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "משאבי שדה",
            "POLYGON_ID": 77,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "משגב דב",
            "POLYGON_ID": 502,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "משגב עם",
            "POLYGON_ID": 1661,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "משהד",
            "POLYGON_ID": 1248,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "משואה",
            "POLYGON_ID": 799,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "משואות יצחק",
            "POLYGON_ID": 365,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "משכיות",
            "POLYGON_ID": 933,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "משמר איילון",
            "POLYGON_ID": 580,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "משמר דוד",
            "POLYGON_ID": 524,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "משמר הירדן",
            "POLYGON_ID": 1539,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "משמר הנגב",
            "POLYGON_ID": 184,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "משמר העמק",
            "POLYGON_ID": 1116,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "משמר השבעה",
            "POLYGON_ID": 702,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "משמר השרון",
            "POLYGON_ID": 952,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "משמרות",
            "POLYGON_ID": 1030,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "משמרת",
            "POLYGON_ID": 874,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "משען",
            "POLYGON_ID": 321,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מתחם בני דרום",
            "POLYGON_ID": 1714,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מתחם צומת שוקת",
            "POLYGON_ID": 165,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "מתן",
            "POLYGON_ID": 830,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "מתת",
            "POLYGON_ID": 1558,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "מתתיהו",
            "POLYGON_ID": 1821,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נאות גולן",
            "POLYGON_ID": 1324,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נאות הכיכר",
            "POLYGON_ID": 1772,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נאות מרדכי",
            "POLYGON_ID": 1626,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נאות סמדר",
            "POLYGON_ID": 27,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נבטים",
            "POLYGON_ID": 125,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נבי סמואל",
            "POLYGON_ID": 548,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נגבה",
            "POLYGON_ID": 334,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נגוהות",
            "POLYGON_ID": 246,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נהורה",
            "POLYGON_ID": 309,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נהלל",
            "POLYGON_ID": 1174,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נהריה",
            "POLYGON_ID": 1499,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נוב",
            "POLYGON_ID": 1364,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נוגה",
            "POLYGON_ID": 308,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נוה איתן",
            "POLYGON_ID": 1051,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נווה",
            "POLYGON_ID": 99,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נווה אור",
            "POLYGON_ID": 1108,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נווה אטי''ב",
            "POLYGON_ID": 1668,
            "AREA_NAME": "גולן צפון",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נווה אילן",
            "POLYGON_ID": 507,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נווה דניאל",
            "POLYGON_ID": 361,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נווה זוהר",
            "POLYGON_ID": 104,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נווה זיו",
            "POLYGON_ID": 1546,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נווה חריף",
            "POLYGON_ID": 26,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נווה ים",
            "POLYGON_ID": 1169,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נווה ימין",
            "POLYGON_ID": 843,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נווה ירק",
            "POLYGON_ID": 813,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נווה מבטח",
            "POLYGON_ID": 481,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נווה מיכאל - רוגלית",
            "POLYGON_ID": 355,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נווה שלום",
            "POLYGON_ID": 525,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נועם",
            "POLYGON_ID": 274,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נוף איילון",
            "POLYGON_ID": 581,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נוף הגליל",
            "POLYGON_ID": 1186,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נופי נחמיה",
            "POLYGON_ID": 796,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נופי פרת",
            "POLYGON_ID": 539,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נופים",
            "POLYGON_ID": 832,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נופית",
            "POLYGON_ID": 1273,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נופך",
            "POLYGON_ID": 733,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נוקדים",
            "POLYGON_ID": 331,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נורדיה",
            "POLYGON_ID": 921,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נורית",
            "POLYGON_ID": 1078,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נחושה",
            "POLYGON_ID": 316,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נחל עוז",
            "POLYGON_ID": 234,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נחלה",
            "POLYGON_ID": 337,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נחליאל",
            "POLYGON_ID": 1856,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נחלים",
            "POLYGON_ID": 738,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נחם",
            "POLYGON_ID": 442,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נחף",
            "POLYGON_ID": 1443,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נחשולים",
            "POLYGON_ID": 1114,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נחשון",
            "POLYGON_ID": 537,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נחשונים",
            "POLYGON_ID": 748,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נטועה",
            "POLYGON_ID": 1585,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נטור",
            "POLYGON_ID": 1383,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נטע",
            "POLYGON_ID": 242,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נטעים",
            "POLYGON_ID": 1818,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נטף",
            "POLYGON_ID": 546,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ניל''י",
            "POLYGON_ID": 1845,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נין",
            "POLYGON_ID": 1140,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ניצן",
            "POLYGON_ID": 404,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ניצנה",
            "POLYGON_ID": 55,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ניצני עוז",
            "POLYGON_ID": 919,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ניצנים",
            "POLYGON_ID": 376,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ניר אליהו",
            "POLYGON_ID": 859,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ניר בנים",
            "POLYGON_ID": 346,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ניר גלים",
            "POLYGON_ID": 517,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ניר דוד",
            "POLYGON_ID": 1055,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ניר ח''ן",
            "POLYGON_ID": 292,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ניר יצחק",
            "POLYGON_ID": 134,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ניר ישראל",
            "POLYGON_ID": 357,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ניר משה",
            "POLYGON_ID": 241,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ניר עוז",
            "POLYGON_ID": 159,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ניר עציון",
            "POLYGON_ID": 1192,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ניר עקיבא",
            "POLYGON_ID": 236,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ניר צבי",
            "POLYGON_ID": 1829,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נירים",
            "POLYGON_ID": 171,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נירית",
            "POLYGON_ID": 823,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נמרוד",
            "POLYGON_ID": 1664,
            "AREA_NAME": "גולן צפון",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נס הרים",
            "POLYGON_ID": 423,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נס עמים",
            "POLYGON_ID": 1480,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נס ציונה",
            "POLYGON_ID": 1795,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נעורה",
            "POLYGON_ID": 1121,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נעורים",
            "POLYGON_ID": 957,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נעלה",
            "POLYGON_ID": 1846,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נעמה",
            "POLYGON_ID": 1805,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נען",
            "POLYGON_ID": 590,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נערן",
            "POLYGON_ID": 1858,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נצר חזני",
            "POLYGON_ID": 523,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נצר סרני",
            "POLYGON_ID": 1796,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נצרת",
            "POLYGON_ID": 1177,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נריה",
            "POLYGON_ID": 1835,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נשר",
            "POLYGON_ID": 1271,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נתיב הגדוד",
            "POLYGON_ID": 700,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נתיב הל''ה",
            "POLYGON_ID": 370,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נתיב העשרה",
            "POLYGON_ID": 272,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נתיב השיירה",
            "POLYGON_ID": 1501,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "נתיבות",
            "POLYGON_ID": 206,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "נתניה - מזרח",
            "POLYGON_ID": 913,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "נתניה - מערב",
            "POLYGON_ID": 920,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "סאג'ור",
            "POLYGON_ID": 1451,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "סאסא",
            "POLYGON_ID": 1548,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "סביון",
            "POLYGON_ID": 726,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "סגולה",
            "POLYGON_ID": 347,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "סואעד חמירה",
            "POLYGON_ID": 1284,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "סולם",
            "POLYGON_ID": 1120,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "סוסיא",
            "POLYGON_ID": 205,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "סופה",
            "POLYGON_ID": 133,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "סינמה סיטי גלילות",
            "POLYGON_ID": 1927,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "סכנין",
            "POLYGON_ID": 1380,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "סלמה",
            "POLYGON_ID": 1401,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "סלעית",
            "POLYGON_ID": 882,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "סמר",
            "POLYGON_ID": 16,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "סנדלה",
            "POLYGON_ID": 1068,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "סנסנה",
            "POLYGON_ID": 192,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "סעד",
            "POLYGON_ID": 235,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "סעייה-מולדה",
            "POLYGON_ID": 137,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "סער",
            "POLYGON_ID": 1544,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ספיר",
            "POLYGON_ID": 39,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ספסופה - כפר חושן",
            "POLYGON_ID": 1537,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "סתריה",
            "POLYGON_ID": 591,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ע'ג'ר",
            "POLYGON_ID": 1667,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עבדון",
            "POLYGON_ID": 1564,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עבדת",
            "POLYGON_ID": 48,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עברון",
            "POLYGON_ID": 1500,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עגור",
            "POLYGON_ID": 369,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עדי",
            "POLYGON_ID": 1295,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עדי עד",
            "POLYGON_ID": 1724,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עדנים",
            "POLYGON_ID": 812,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עוזה",
            "POLYGON_ID": 283,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עוזייר",
            "POLYGON_ID": 1311,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עולש",
            "POLYGON_ID": 931,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עומר",
            "POLYGON_ID": 147,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עופר",
            "POLYGON_ID": 1123,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עופרים",
            "POLYGON_ID": 714,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עוצם",
            "POLYGON_ID": 312,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עזוז",
            "POLYGON_ID": 47,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עזר",
            "POLYGON_ID": 405,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עזריאל",
            "POLYGON_ID": 895,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עזריה",
            "POLYGON_ID": 592,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עזריקם",
            "POLYGON_ID": 417,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עטרת",
            "POLYGON_ID": 706,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עידן",
            "POLYGON_ID": 50,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עיינות",
            "POLYGON_ID": 1793,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עילבון",
            "POLYGON_ID": 1356,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עילוט",
            "POLYGON_ID": 1218,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין איילה",
            "POLYGON_ID": 1129,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין אל-סהלה",
            "POLYGON_ID": 1041,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין אל אסד",
            "POLYGON_ID": 1453,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין בוקק",
            "POLYGON_ID": 119,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עין גב",
            "POLYGON_ID": 1299,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין גדי",
            "POLYGON_ID": 233,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עין דור",
            "POLYGON_ID": 1160,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין הבשור",
            "POLYGON_ID": 151,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עין הוד",
            "POLYGON_ID": 1190,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין החורש",
            "POLYGON_ID": 969,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עין המפרץ",
            "POLYGON_ID": 1404,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין הנצי''ב",
            "POLYGON_ID": 1027,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין העמק",
            "POLYGON_ID": 1132,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין השופט",
            "POLYGON_ID": 1103,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין השלושה",
            "POLYGON_ID": 178,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עין ורד",
            "POLYGON_ID": 893,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עין זיוון",
            "POLYGON_ID": 1610,
            "AREA_NAME": "גולן צפון",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין חוד",
            "POLYGON_ID": 1182,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין חצבה",
            "POLYGON_ID": 49,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עין חרוד",
            "POLYGON_ID": 1093,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין יהב",
            "POLYGON_ID": 44,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עין יעקב",
            "POLYGON_ID": 1533,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין כמונים",
            "POLYGON_ID": 1438,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין כרמל",
            "POLYGON_ID": 1162,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין מאהל",
            "POLYGON_ID": 1221,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין נקובא",
            "POLYGON_ID": 493,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עין עירון",
            "POLYGON_ID": 1032,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין צורים",
            "POLYGON_ID": 367,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עין קנייא",
            "POLYGON_ID": 1654,
            "AREA_NAME": "גולן צפון",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין ראפה",
            "POLYGON_ID": 475,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עין שמר",
            "POLYGON_ID": 1005,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עין שריד",
            "POLYGON_ID": 906,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עין תמר",
            "POLYGON_ID": 1775,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עינבר",
            "POLYGON_ID": 1429,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עינת",
            "POLYGON_ID": 772,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עיר אובות",
            "POLYGON_ID": 51,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עכו - אזור תעשייה",
            "POLYGON_ID": 1397,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עכו",
            "POLYGON_ID": 1423,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עלומים",
            "POLYGON_ID": 219,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עלי",
            "POLYGON_ID": 764,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עלי זהב",
            "POLYGON_ID": 763,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עלמה",
            "POLYGON_ID": 1576,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עלמון",
            "POLYGON_ID": 549,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עמוקה",
            "POLYGON_ID": 1528,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עמיחי",
            "POLYGON_ID": 1894,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עמינדב",
            "POLYGON_ID": 428,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עמיעד",
            "POLYGON_ID": 1445,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עמיקם",
            "POLYGON_ID": 1089,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עמיר",
            "POLYGON_ID": 1633,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עמנואל",
            "POLYGON_ID": 841,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עמקה",
            "POLYGON_ID": 1491,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ענב",
            "POLYGON_ID": 912,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עספיא",
            "POLYGON_ID": 1200,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עפולה",
            "POLYGON_ID": 1112,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עפרה",
            "POLYGON_ID": 1836,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עץ אפרים",
            "POLYGON_ID": 800,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עצמון - שגב",
            "POLYGON_ID": 1385,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עראבה",
            "POLYGON_ID": 1362,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ערב אל-נעים",
            "POLYGON_ID": 1408,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ערב אל עראמשה",
            "POLYGON_ID": 1593,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ערד",
            "POLYGON_ID": 143,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ערוגות",
            "POLYGON_ID": 396,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "ערערה",
            "POLYGON_ID": 1040,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ערערה בנגב",
            "POLYGON_ID": 98,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עשאהל",
            "POLYGON_ID": 1880,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "עשרת",
            "POLYGON_ID": 520,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "עתלית",
            "POLYGON_ID": 1171,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "עתניאל",
            "POLYGON_ID": 229,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "פארן",
            "POLYGON_ID": 33,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "פארק תעשיות פלמחים",
            "POLYGON_ID": 1834,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "פארק תעשייה ראם",
            "POLYGON_ID": 436,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "פדואל",
            "POLYGON_ID": 749,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "פדויים",
            "POLYGON_ID": 166,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "פדיה",
            "POLYGON_ID": 561,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "פוריה כפר עבודה",
            "POLYGON_ID": 1237,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "פוריה נווה עובד",
            "POLYGON_ID": 1256,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "פוריה עילית",
            "POLYGON_ID": 1250,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "פוריידיס",
            "POLYGON_ID": 1099,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "פורת",
            "POLYGON_ID": 901,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "פטיש",
            "POLYGON_ID": 161,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "פלך",
            "POLYGON_ID": 1440,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "פלמחים",
            "POLYGON_ID": 1817,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "פני קדם",
            "POLYGON_ID": 289,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "פנימיית עין כרם",
            "POLYGON_ID": 465,
            "AREA_NAME": "ירושלים",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "פסגות",
            "POLYGON_ID": 1786,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "פסוטה",
            "POLYGON_ID": 1566,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "פעמי תש''ז",
            "POLYGON_ID": 215,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "פצאל",
            "POLYGON_ID": 741,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "פקיעין",
            "POLYGON_ID": 1484,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "פרדס חנה-כרכור",
            "POLYGON_ID": 1003,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "פרדסיה",
            "POLYGON_ID": 916,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "פרוד",
            "POLYGON_ID": 1455,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "פרי גן",
            "POLYGON_ID": 120,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "פתח תקווה",
            "POLYGON_ID": 785,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "פתחיה",
            "POLYGON_ID": 569,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "צאלים",
            "POLYGON_ID": 114,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "צבעון",
            "POLYGON_ID": 1549,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "צובה",
            "POLYGON_ID": 464,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "צוחר, אוהד",
            "POLYGON_ID": 136,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "צופים",
            "POLYGON_ID": 860,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "צופית",
            "POLYGON_ID": 854,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "צופר",
            "POLYGON_ID": 36,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "צוקים",
            "POLYGON_ID": 35,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "צור הדסה",
            "POLYGON_ID": 390,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "צור יצחק",
            "POLYGON_ID": 880,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "צור משה",
            "POLYGON_ID": 914,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "צור נתן",
            "POLYGON_ID": 881,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "צוריאל",
            "POLYGON_ID": 1535,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "צורית גילון",
            "POLYGON_ID": 1416,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ציפורי",
            "POLYGON_ID": 1254,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "צלפון",
            "POLYGON_ID": 487,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "צפריה",
            "POLYGON_ID": 1869,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "צפרירים",
            "POLYGON_ID": 338,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "צפת",
            "POLYGON_ID": 1477,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "צרופה",
            "POLYGON_ID": 1143,
            "AREA_NAME": "הכרמל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "צרעה",
            "POLYGON_ID": 440,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "קבוצת גבע",
            "POLYGON_ID": 1097,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קבוצת יבנה",
            "POLYGON_ID": 501,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "קדומים",
            "POLYGON_ID": 871,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "קדימה-צורן",
            "POLYGON_ID": 900,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "קדיתא",
            "POLYGON_ID": 1527,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קדמה",
            "POLYGON_ID": 374,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "קדמת צבי",
            "POLYGON_ID": 1553,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קדר",
            "POLYGON_ID": 431,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "קדרון",
            "POLYGON_ID": 504,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "קדרים",
            "POLYGON_ID": 1421,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קדש ברנע",
            "POLYGON_ID": 59,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "קוממיות",
            "POLYGON_ID": 335,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "קורנית",
            "POLYGON_ID": 1361,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קטורה",
            "POLYGON_ID": 23,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "קיבוץ דן",
            "POLYGON_ID": 1659,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קיבוץ מגידו",
            "POLYGON_ID": 1095,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קידה",
            "POLYGON_ID": 1725,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "קיסריה",
            "POLYGON_ID": 1029,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קלחים",
            "POLYGON_ID": 226,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "קליה",
            "POLYGON_ID": 444,
            "AREA_NAME": "ים המלח",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "קלנסווה",
            "POLYGON_ID": 907,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "קלע",
            "POLYGON_ID": 1621,
            "AREA_NAME": "גולן צפון",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קציר",
            "POLYGON_ID": 1033,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קצר-א-סיר",
            "POLYGON_ID": 90,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "קצרין",
            "POLYGON_ID": 1518,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קצרין - אזור תעשייה",
            "POLYGON_ID": 1875,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קריית אונו",
            "POLYGON_ID": 737,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "קריית אתא",
            "POLYGON_ID": 1304,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קריית ביאליק",
            "POLYGON_ID": 1337,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קריית גת, כרמי גת",
            "POLYGON_ID": 293,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "קריית חינוך מרחבים",
            "POLYGON_ID": 163,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "קריית טבעון-בית זייד",
            "POLYGON_ID": 1183,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קריית ים",
            "POLYGON_ID": 1351,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קריית יערים",
            "POLYGON_ID": 510,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "קריית מוצקין",
            "POLYGON_ID": 1347,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קריית מלאכי",
            "POLYGON_ID": 385,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "קריית נטפים",
            "POLYGON_ID": 801,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "קריית ענבים",
            "POLYGON_ID": 513,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "קריית עקרון",
            "POLYGON_ID": 560,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "קריית שמונה",
            "POLYGON_ID": 1637,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "קרית ארבע",
            "POLYGON_ID": 258,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "קרני שומרון",
            "POLYGON_ID": 846,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "קשת",
            "POLYGON_ID": 1510,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ראמה",
            "POLYGON_ID": 1452,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ראס אל-עין",
            "POLYGON_ID": 1428,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ראס עלי",
            "POLYGON_ID": 1283,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ראש הנקרה",
            "POLYGON_ID": 1590,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ראש העין",
            "POLYGON_ID": 781,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ראש פינה",
            "POLYGON_ID": 1486,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ראש צורים",
            "POLYGON_ID": 356,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ראשון לציון - מזרח",
            "POLYGON_ID": 1827,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ראשון לציון - מערב",
            "POLYGON_ID": 1838,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רבבה",
            "POLYGON_ID": 806,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רבדים",
            "POLYGON_ID": 439,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "רביבים",
            "POLYGON_ID": 83,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "רביד",
            "POLYGON_ID": 1382,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רגבה",
            "POLYGON_ID": 1479,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רגבים",
            "POLYGON_ID": 1057,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רהט",
            "POLYGON_ID": 191,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "רווחה",
            "POLYGON_ID": 319,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "רוויה",
            "POLYGON_ID": 1010,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רוחמה",
            "POLYGON_ID": 245,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "רומאנה",
            "POLYGON_ID": 1309,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רומת אל הייב",
            "POLYGON_ID": 1286,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רועי",
            "POLYGON_ID": 896,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רותם",
            "POLYGON_ID": 945,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רחוב",
            "POLYGON_ID": 1011,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רחובות",
            "POLYGON_ID": 587,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רחלים",
            "POLYGON_ID": 797,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רטורנו - גבעת שמש",
            "POLYGON_ID": 460,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ריחאנייה",
            "POLYGON_ID": 1567,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "ריחן",
            "POLYGON_ID": 1018,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "ריינה",
            "POLYGON_ID": 1219,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רימונים",
            "POLYGON_ID": 1823,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רינתיה",
            "POLYGON_ID": 734,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רכסים",
            "POLYGON_ID": 1253,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רם און",
            "POLYGON_ID": 1067,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רמות",
            "POLYGON_ID": 1373,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רמות השבים",
            "POLYGON_ID": 838,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רמות מאיר",
            "POLYGON_ID": 577,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רמות מנשה",
            "POLYGON_ID": 1101,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רמות נפתלי",
            "POLYGON_ID": 1605,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רמלה",
            "POLYGON_ID": 1797,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רמת גן - מזרח",
            "POLYGON_ID": 730,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רמת גן - מערב",
            "POLYGON_ID": 745,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רמת דוד",
            "POLYGON_ID": 1175,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רמת הכובש",
            "POLYGON_ID": 868,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רמת הנדיב",
            "POLYGON_ID": 1080,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רמת השופט",
            "POLYGON_ID": 1115,
            "AREA_NAME": "ואדי ערה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רמת השרון",
            "POLYGON_ID": 802,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רמת יוחנן",
            "POLYGON_ID": 1306,
            "AREA_NAME": "המפרץ",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רמת ישי",
            "POLYGON_ID": 1193,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רמת מגשימים",
            "POLYGON_ID": 1375,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רמת צבי",
            "POLYGON_ID": 1106,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רמת רזיאל",
            "POLYGON_ID": 449,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רנן",
            "POLYGON_ID": 172,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "רעים",
            "POLYGON_ID": 194,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "רעננה",
            "POLYGON_ID": 849,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רקפת",
            "POLYGON_ID": 1368,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רשפון",
            "POLYGON_ID": 855,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "רשפים",
            "POLYGON_ID": 1036,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "רתמים",
            "POLYGON_ID": 85,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שאנטי במדבר",
            "POLYGON_ID": 52,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שאר ישוב",
            "POLYGON_ID": 1650,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שבות רחל",
            "POLYGON_ID": 1729,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שבי דרום",
            "POLYGON_ID": 237,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שבי ציון",
            "POLYGON_ID": 1489,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שבי שומרון",
            "POLYGON_ID": 904,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שבלי",
            "POLYGON_ID": 1180,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שגב שלום",
            "POLYGON_ID": 106,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שדה אברהם",
            "POLYGON_ID": 117,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שדה אילן",
            "POLYGON_ID": 1267,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שדה אליהו",
            "POLYGON_ID": 1002,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שדה אליעזר",
            "POLYGON_ID": 1568,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שדה בוקר",
            "POLYGON_ID": 54,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שדה דוד",
            "POLYGON_ID": 277,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שדה ורבורג",
            "POLYGON_ID": 857,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שדה יואב",
            "POLYGON_ID": 318,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שדה יעקב",
            "POLYGON_ID": 1184,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שדה יצחק",
            "POLYGON_ID": 981,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שדה משה",
            "POLYGON_ID": 300,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שדה נחום",
            "POLYGON_ID": 1070,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שדה נחמיה",
            "POLYGON_ID": 1634,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שדה ניצן",
            "POLYGON_ID": 121,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שדה עוזיהו",
            "POLYGON_ID": 416,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שדה צבי",
            "POLYGON_ID": 231,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שדות ים",
            "POLYGON_ID": 1028,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שדות מיכה",
            "POLYGON_ID": 388,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שדי חמד",
            "POLYGON_ID": 839,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שדי תרומות",
            "POLYGON_ID": 995,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שדמה",
            "POLYGON_ID": 532,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שדמות דבורה",
            "POLYGON_ID": 1195,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שדמות מחולה",
            "POLYGON_ID": 946,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שדרות, איבים, ניר עם",
            "POLYGON_ID": 248,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שהם",
            "POLYGON_ID": 1865,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שואבה",
            "POLYGON_ID": 492,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שובל",
            "POLYGON_ID": 208,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שומרה",
            "POLYGON_ID": 1595,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שומריה",
            "POLYGON_ID": 216,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שומרת",
            "POLYGON_ID": 1459,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שוקדה",
            "POLYGON_ID": 209,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שורש",
            "POLYGON_ID": 491,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שורשים",
            "POLYGON_ID": 1407,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שושנת העמקים",
            "POLYGON_ID": 938,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שזור",
            "POLYGON_ID": 1444,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שחר",
            "POLYGON_ID": 298,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שחרות",
            "POLYGON_ID": 19,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שיבולים",
            "POLYGON_ID": 201,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שיטים",
            "POLYGON_ID": 30,
            "AREA_NAME": "ערבה",
            "SHIELD_TIME": "3 דקות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שייח' דנון",
            "POLYGON_ID": 1511,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שילה",
            "POLYGON_ID": 740,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שילת",
            "POLYGON_ID": 1801,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שכניה",
            "POLYGON_ID": 1367,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שלווה",
            "POLYGON_ID": 269,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שלוחות",
            "POLYGON_ID": 1025,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שלומי",
            "POLYGON_ID": 1582,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שלומית",
            "POLYGON_ID": 102,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שלפים",
            "POLYGON_ID": 1037,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שמיר",
            "POLYGON_ID": 1627,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שמעה",
            "POLYGON_ID": 204,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שמשית",
            "POLYGON_ID": 1247,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שני ליבנה",
            "POLYGON_ID": 186,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שניר",
            "POLYGON_ID": 1660,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שעב",
            "POLYGON_ID": 1398,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שעל",
            "POLYGON_ID": 1614,
            "AREA_NAME": "גולן צפון",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שעלבים",
            "POLYGON_ID": 582,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שער אפרים",
            "POLYGON_ID": 910,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שער הגולן",
            "POLYGON_ID": 1197,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שער העמקים",
            "POLYGON_ID": 1230,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שער מנשה",
            "POLYGON_ID": 998,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שערי תקווה",
            "POLYGON_ID": 805,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שפיים",
            "POLYGON_ID": 866,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שפיר",
            "POLYGON_ID": 368,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שפר",
            "POLYGON_ID": 1464,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שפרעם",
            "POLYGON_ID": 1307,
            "AREA_NAME": "מרכז הגליל",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שקד",
            "POLYGON_ID": 1023,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שקף",
            "POLYGON_ID": 255,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שרונה",
            "POLYGON_ID": 1236,
            "AREA_NAME": "גליל תחתון",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שריגים - ליאון",
            "POLYGON_ID": 354,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "שריד",
            "POLYGON_ID": 1157,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שרשרת",
            "POLYGON_ID": 202,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "שתולה",
            "POLYGON_ID": 1596,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "שתולים",
            "POLYGON_ID": 434,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תארבין",
            "POLYGON_ID": 179,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תאשור",
            "POLYGON_ID": 190,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תדהר",
            "POLYGON_ID": 195,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תובל",
            "POLYGON_ID": 1441,
            "AREA_NAME": "גליל עליון",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "תומר",
            "POLYGON_ID": 720,
            "AREA_NAME": "בקעה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תחנת רכבת כפר יהושוע",
            "POLYGON_ID": 1173,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "תחנת רכבת ראש העין",
            "POLYGON_ID": 1721,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תימורים",
            "POLYGON_ID": 378,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תירוש",
            "POLYGON_ID": 421,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תל אביב - עבר הירקון",
            "POLYGON_ID": 783,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תל אביב - מרכז העיר",
            "POLYGON_ID": 742,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תל אביב - מזרח",
            "POLYGON_ID": 724,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תל אביב - דרום העיר ויפו",
            "POLYGON_ID": 722,
            "AREA_NAME": "דן",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תל חי",
            "POLYGON_ID": 1652,
            "AREA_NAME": "קו העימות",
            "SHIELD_TIME": "מיידי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "תל יוסף",
            "POLYGON_ID": 1086,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "תל יצחק",
            "POLYGON_ID": 884,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תל מונד",
            "POLYGON_ID": 885,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תל עדשים",
            "POLYGON_ID": 1153,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "תל ערד",
            "POLYGON_ID": 1925,
            "AREA_NAME": "דרום הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תל ציון",
            "POLYGON_ID": 597,
            "AREA_NAME": "שומרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תל קציר",
            "POLYGON_ID": 1227,
            "AREA_NAME": "גולן דרום",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "תל שבע",
            "POLYGON_ID": 131,
            "AREA_NAME": "מרכז הנגב",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תל תאומים",
            "POLYGON_ID": 1001,
            "AREA_NAME": "בקעת בית שאן",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "תלם",
            "POLYGON_ID": 275,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תלמי אליהו",
            "POLYGON_ID": 129,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תלמי אלעזר",
            "POLYGON_ID": 993,
            "AREA_NAME": "מנשה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "תלמי ביל''ו",
            "POLYGON_ID": 214,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תלמי יוסף",
            "POLYGON_ID": 113,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תלמי יחיאל",
            "POLYGON_ID": 420,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תלמי יפה",
            "POLYGON_ID": 297,
            "AREA_NAME": "מערב לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תלמים",
            "POLYGON_ID": 268,
            "AREA_NAME": "לכיש",
            "SHIELD_TIME": "30 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תמרת",
            "POLYGON_ID": 1206,
            "AREA_NAME": "העמקים",
            "SHIELD_TIME": "דקה",
            "CHANNEL_ID": 3
        },
        {
            "CITY_NAME": "תנובות",
            "POLYGON_ID": 918,
            "AREA_NAME": "שרון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תעוז",
            "POLYGON_ID": 488,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תעשיון חצב",
            "POLYGON_ID": 762,
            "AREA_NAME": "ירקון",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תעשיון צריפין",
            "POLYGON_ID": 1840,
            "AREA_NAME": "השפלה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תפרח",
            "POLYGON_ID": 167,
            "AREA_NAME": "מערב הנגב",
            "SHIELD_TIME": "45 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תקומה",
            "POLYGON_ID": 222,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תקומה וחוות יזרעם",
            "POLYGON_ID": 221,
            "AREA_NAME": "עוטף עזה",
            "SHIELD_TIME": "15 שניות",
            "CHANNEL_ID": 1
        },
        {
            "CITY_NAME": "תקוע",
            "POLYGON_ID": 330,
            "AREA_NAME": "יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "תרום",
            "POLYGON_ID": 461,
            "AREA_NAME": "שפלת יהודה",
            "SHIELD_TIME": "דקה וחצי",
            "CHANNEL_ID": 2
        },
        {
            "CITY_NAME": "אזור לבדיקה",
            "POLYGON_ID": 3000,
            "AREA_NAME": "בדיקה",
            "SHIELD_TIME": "זמן בדיקה",
            "CHANNEL_ID": "TEST"
        },
        {
            "CITY_NAME": "ברחבי הארץ",
            "POLYGON_ID": 1,
            "AREA_NAME": "ארץ",
            "SHIELD_TIME": "",
            "CHANNEL_ID": 0
        },
        {
            "CITY_NAME": "בחלק מהאזורים בארץ",
            "POLYGON_ID": 4000,
            "AREA_NAME": "ארץ",
            "SHIELD_TIME": "",
            "CHANNEL_ID": 0
        }
    ];
    res.status(200).json(polygons);
});

setInterval(() => getIdsFromCap(), 1000);

ioServer.use(async (socket: typeof Socket, next: any) => {
    const clientId = socket.handshake.query.clientId;
    const clientSecret = socket.handshake.query.clientSecret;

    const body = JSON.stringify({ clientId, clientSecret });
/*    const response = await fetch(AuthUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body,
    });

    if (response.ok) {
        next();
    } else {
        next(new Error('token authentication failed'));
    }*/
    next()
});

ioServer.on('connection', (socket: typeof Socket) => {
    socket.on('join', (room: string) => {
        if (room === 'alerts') {
            socket.join(room);

            socket.on('ids-request', () => {
                setInterval(() => ioServer.to('alerts').emit('ids', currentIds), 1000);
            })
        }
    })
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});