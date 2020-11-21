/*
Main Author: Michael Caldwell
Created: 2020/11/11
Purpose: Creation and validation of objects.
 */

class Character {
    //General descriptions
    _name; _race; _charClass; _background; _level;

    _strength; _dexterity; _constitution; _intelligence; _wisdom; _charisma; //Traits
    _skills;
    _equipment; //Equipment string for Light, Medium, Heavy option
    _senses; _languages; _spells;

    constructor(name, race, charClass, background, level, strength, dexterity, constitution, intelligence, wisdom, charisma, skills, equipment, senses, languages, spells) {
        this._name = name;
        this._race = race;
        this._charClass = charClass;
        this._background = background;
        this._level = level;

        //Traits
        this._strength = strength;
        this._dexterity = dexterity;
        this._constitution = constitution;
        this._intelligence = intelligence;
        this._wisdom = wisdom;
        this._charisma = charisma;
        this._skills = skills;

        //Equipment string for Light, Medium, Heavy option
        this._equipment = equipment;

        this._senses = senses;
        this._languages = languages;
        this._spells = spells;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get race() {
        return this._race;
    }

    set race(value) {
        this._race = value;
    }

    get charClass() {
        return this._charClass;
    }

    set charClass(value) {
        this._charClass = value;
    }

    get background() {
        return this._background;
    }

    set background(value) {
        this._background = value;
    }

    get level() {
        return this._level;
    }

    set level(value) {
        this._level = value;
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

    get skills() {
        return this._skills;
    }

    set skills(value) {
        this._skills = value;
    }

    get equipment() {
        return this._equipment;
    }

    set equipment(value) {
        this._equipment = value;
    }

    get senses() {
        return this._senses;
    }

    set senses(value) {
        this._senses = value;
    }

    get languages() {
        return this._languages;
    }

    set languages(value) {
        this._languages = value;
    }

    get spells() {
        return this._spells;
    }

    set spells(value) {
        this._spells = value;
    }
}



