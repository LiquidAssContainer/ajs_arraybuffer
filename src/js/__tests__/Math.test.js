import { Character, Magician, Daemon, Peasant } from '../Math';

test('Demon attacks', () => {
	const daemon = new Daemon();

	expect(daemon.attack(1)).toBe(100);
	expect(daemon.attack(2)).toBe(90);
	expect(daemon.attack(4)).toBe(70);
});

test('Magician attacks', () => {
	const magician = new Magician();

	expect(magician.attack(1)).toBe(40);
	expect(magician.attack(2)).toBe(36);
	expect(magician.attack(4)).toBe(28);
});

test('Demon attacks when stoned', () => {
	const daemon = new Daemon();
	daemon.setStoned();

	expect(daemon.attack(2)).toBe(85);
});

test('Attack without distance', () => {
	const daemon = new Daemon();

	expect(() => daemon.attack()).toThrow(Error('Не указана дистация до цели'));
});

test('Other class', () => {
	const peasant = new Peasant();

	expect(peasant.attack()).toBe(1);
	expect(() => peasant.setStoned()).toThrow(Error('Данный класс не может быть одурманен'));
});
