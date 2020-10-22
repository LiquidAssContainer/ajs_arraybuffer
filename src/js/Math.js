export class ShootingCharacter {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	attack(distance) { // сделал так, потому что передавать дистанцию аргументом кажется логичным
		if (!distance) {
			throw new Error('Не указана дистация до цели');
		}

		if (this.hasMagic) {
			let damage = (this.attackDamage * (11 - distance)) / 10; // может, не самая понятная формула
			if (this.stoned) {
				damage -= Math.log2(distance) * 5; // без округлений возможных дробных значений
			}
			return (damage > 0) ? damage : 0;
		}

		return (this.attackRange >= distance) ? this.attackDamage : 0; // ну это уже отсебятина с Bowman
	}
}

export class MagicianCharacter extends ShootingCharacter {
	constructor(name, type) {
		super(name, type);
		this.hasMagic = true;
	}

	get stoned() {
		return this._stoned;
	}

	set stoned(bool) {
		if (typeof bool !== 'boolean') {
			throw new Error('Аргумент должен быть булевым значением');
		}
		this._stoned = bool;
	}
}

export class Magician extends MagicianCharacter {
	constructor(name, type) {
		super(name, 'Magician');
		this.attackDamage = 40;
		this.health = 10;
	}
}

export class Daemon extends MagicianCharacter {
	constructor(name, type) {
		super(name, 'Daemon');
		this.attackDamage = 100;
		this.health = 10;
	}
}

export class Bowman extends ShootingCharacter {
	constructor(name, type) {
		super(name, 'Bowman');
		this.attackDamage = 10;
		this.health = 20;
		this.attackRange = 8;
	}
}
