import { ShootingCharacter, MagicianCharacter, Magician, Daemon, Bowman } from '../Math';

test('Demon attacks', () => {
	const daemon = new Daemon();

	expect(daemon.attack(1)).toBe(100);
	expect(daemon.attack(2)).toBe(90);
	expect(daemon.attack(4)).toBe(70);
	expect(daemon.attack(666)).toBe(0);
});

test('Magician attacks', () => {
	const magician = new Magician();

	expect(magician.attack(1)).toBe(40);
	expect(magician.attack(2)).toBe(36);
	expect(magician.attack(4)).toBe(28);
	expect(magician.attack(14)).toBe(0);
});

test('Demon attacks when stoned', () => {
	const daemon = new Daemon();
	daemon.stoned = true;

	expect(daemon.attack(2)).toBe(85);
});

test('Attack without distance', () => {
	const daemon = new Daemon();

	expect(() => daemon.attack()).toThrow(Error('Не указана дистация до цели'));
});

test('Bowman', () => {
	const bowman = new Bowman();

	expect(bowman.attack(8)).toBe(10);
	expect(bowman.attack(9)).toBe(0);
});

test('Wrong stoned parameter', () => {
	const daemon = new Daemon();

	expect(() => {
		daemon.stoned = 'стоунд';
	}).toThrow(Error('Аргумент должен быть булевым значением'));
});
