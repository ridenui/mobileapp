import { Buffer } from 'buffer';

// @ts-ignore
(window || global).process = {};
// @ts-ignore
(window || global).process.versions = {};
// @ts-ignore
(window || global).process.versions.node = '8.0.0';
// @ts-ignore
(window || global).process.env = {};
// @ts-ignore
(window || global).Buffer = Buffer;
// @ts-ignore
(window || global).process.argv = [];
