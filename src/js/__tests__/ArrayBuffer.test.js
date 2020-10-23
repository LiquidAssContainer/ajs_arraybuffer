import { getBuffer, ArrayBufferConverter } from '../ArrayBuffer';

test('Test toString()', () => {
	const string = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
	const arrayBufferConverter = new ArrayBufferConverter();
	const buffer = getBuffer(string);
	arrayBufferConverter.load(buffer);

	expect(arrayBufferConverter.toString()).toBe(string);
});
