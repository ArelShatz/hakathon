import { Socket } from "socket.io";

const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');
const { generateAlert } = require('./alertGenerator');
const postgres = require('./postgres-config');
const { getIdsXml } = require('./xml-parser');
const cors = require('cors');

let currentIds: Number[] = [];

const getIdsFromCap = () => {
    currentIds = getIdsXml();
}

const app = express();
const server = createServer(app);
const ioServer = new Server(server);
app.use(cors());
app.use(express.json());

app.get('/poligon', async (req: Request, res: Response) => {
    await postgres.query('SELECT * FROM ');
})

//setInterval(() => getIdsFromCap(), 1000);

ioServer.use((socket: Socket, next: any) => {
    const clientId = socket.handshake.query.clientId;
    const clientSecret = socket.handshake.query.clientSecret;
    next();
});

const sendAlert = (socket: Socket) => {
    socket.to('alerts').emit('alert', generateAlert());
}

ioServer.on('connection', (socket: Socket) => {
    console.log('here');
    socket.on('join', (room: string) => {
        if (room === 'alerts') {
            socket.join(room);

            setInterval(() => sendAlert(socket), 3000);

            socket.on('ids-request', () => {
                socket.to('alerts').emit('ids', currentIds);
            })
        }
    })
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});