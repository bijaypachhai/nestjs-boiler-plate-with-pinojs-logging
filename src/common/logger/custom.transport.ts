import pino, { destination } from "pino";

const streamTransport = pino.transport({
    target: 'pino/file',
    options: {
        destination: './app.log',
    },
});

const streamDestination = pino.destination({
    dest: './dest.log',
    sync: false,
}) as any;

export { streamTransport, streamDestination };