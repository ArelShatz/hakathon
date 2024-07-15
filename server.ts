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
const ioServer = new Server(server);
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
    const polygonRepository = myDataSource.getRepository(Polygon);

    const polygons = await polygonRepository.find();
    res.status(200).json(polygons);
});

setInterval(() => getIdsFromCap(), 1000);

ioServer.use(async (socket: typeof Socket, next: any) => {
    const clientId = socket.handshake.query.clientId;
    const clientSecret = socket.handshake.query.clientSecret;

    const body = JSON.stringify({ clientId, clientSecret });
    const response = await fetch(AuthUrl, {
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
    }
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