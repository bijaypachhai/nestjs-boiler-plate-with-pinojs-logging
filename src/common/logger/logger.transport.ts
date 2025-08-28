import * as fs from 'node:fs';

export default function createWritableStream() {
    return fs.createWriteStream('./logs.txt');
}