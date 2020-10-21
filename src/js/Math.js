export class Character {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	attack(distance) {
		if (this.hasMagic) {
			if (!distance) {
				throw new Error('Не указана дистация до цели');
			}

			let attack = (this._attack * (11 - distance)) / 10;
			return (this.isStoned) ? (attack - Math.log2(distance) * 5) : attack; // без округлений возможных дробных значений
		}

		return this._attack;
	}

	setStoned() {
		if (this.hasMagic) {
			this.isStoned = true;
		} else {
			throw new Error('Данный класс не может быть одурманен');
		}
	}
}

export class Magician extends Character {
	constructor(name, type) {
		super(name, 'Magician');
		this._attack = 40;
		this.health = 10;
		this.hasMagic = true;
	}
}

export class Daemon extends Character {
	constructor(name, type) {
		super(name, 'Daemon');
		this._attack = 100;
		this.health = 10;
		this.hasMagic = true;
	}
}

export class Peasant extends Character {
	constructor(name, type) {
		super(name, 'Peasant');
		this._attack = 1;
		this.health = 1;
	}
}
