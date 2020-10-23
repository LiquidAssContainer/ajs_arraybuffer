export class ArrayBufferConverter {
	constructor() {
		this.buffer = null;
	}

	load(buffer) { // насколько я понимаю, здесь надо просто записать уже готовый буфер
		this.buffer = buffer;
	}

	toString() {
		let uint16buffer = new Uint16Array(this.buffer);
		return String.fromCharCode(...uint16buffer);
	}
}

export function getBuffer(data) {
	return ((input) => {
		const buffer = new ArrayBuffer(data.length * 2);
		const bufferView = new Uint16Array(buffer);
		for (let i = 0; i < input.length; i += 1) {
			bufferView[i] = input.charCodeAt(i);
		}
		return buffer;
	})(data);
}
