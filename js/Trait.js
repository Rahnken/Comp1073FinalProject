class Trait {
    _strength; _dexterity; _constitution; _intelligence; _wisdom; _charisma;

    constructor(strength, dexterity, constitution, intelligence, wisdom, charisma) {
        this._strength = strength;
        this._dexterity = dexterity;
        this._constitution = constitution;
        this._intelligence = intelligence;
        this._wisdom = wisdom;
        this._charisma = charisma;
    }

    get strength() {
        return this._strength;
    }

    set strength(value) {
        this._strength = value;
    }

    get dexterity() {
        return this._dexterity;
    }

    set dexterity(value) {
        this._dexterity = value;
    }

    get constitution() {
        return this._constitution;
    }

    set constitution(value) {
        this._constitution = value;
    }

    get intelligence() {
        return this._intelligence;
    }

    set intelligence(value) {
        this._intelligence = value;
    }

    get wisdom() {
        return this._wisdom;
    }

    set wisdom(value) {
        this._wisdom = value;
    }

    get charisma() {
        return this._charisma;
    }

    set charisma(value) {
        this._charisma = value;
    }
}