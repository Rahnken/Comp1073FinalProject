/*
Main Author: Michael Caldwell
Created: 2020/11/11
Purpose: Creation and validation of objects.
 */

class Character {
    constructor(name, race, charClass, background, level, traits, skills, equipment, senses, languages, spells) {
        this._name = name;
        this._race = race;
        this._charClass = charClass;
        this._background = background;
        this._level = level;
        this._traits = traits;
        this._skills = skills;
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

    get traits() {
        return this._traits;
    }

    set traits(value) {
        this._traits = value;
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