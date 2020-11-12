class Equipment{
    _head; _shoulder; _chest; _wrist; _hands; _waist; _legs; _feet; _ring1; _ring2; _necklace; _cape; _trinket1; _trinket2; _mainHand; _offHand;

    constructor(head, shoulder, chest, wrist, hands, waist, legs, feet, ring1, ring2, necklace, cape, trinket1, trinket2, mainHand, offHand) {
        this._head = head;
        this._shoulder = shoulder;
        this._chest = chest;
        this._wrist = wrist;
        this._hands = hands;
        this._waist = waist;
        this._legs = legs;
        this._feet = feet;
        this._ring1 = ring1;
        this._ring2 = ring2;
        this._necklace = necklace;
        this._cape = cape;
        this._trinket1 = trinket1;
        this._trinket2 = trinket2;
        this._mainHand = mainHand;
        this._offHand = offHand;
    }

    get head() {
        return this._head;
    }

    set head(value) {
        this._head = value;
    }

    get shoulder() {
        return this._shoulder;
    }

    set shoulder(value) {
        this._shoulder = value;
    }

    get chest() {
        return this._chest;
    }

    set chest(value) {
        this._chest = value;
    }

    get wrist() {
        return this._wrist;
    }

    set wrist(value) {
        this._wrist = value;
    }

    get hands() {
        return this._hands;
    }

    set hands(value) {
        this._hands = value;
    }

    get waist() {
        return this._waist;
    }

    set waist(value) {
        this._waist = value;
    }

    get legs() {
        return this._legs;
    }

    set legs(value) {
        this._legs = value;
    }

    get feet() {
        return this._feet;
    }

    set feet(value) {
        this._feet = value;
    }

    get ring1() {
        return this._ring1;
    }

    set ring1(value) {
        this._ring1 = value;
    }

    get ring2() {
        return this._ring2;
    }

    set ring2(value) {
        this._ring2 = value;
    }

    get necklace() {
        return this._necklace;
    }

    set necklace(value) {
        this._necklace = value;
    }

    get cape() {
        return this._cape;
    }

    set cape(value) {
        this._cape = value;
    }

    get trinket1() {
        return this._trinket1;
    }

    set trinket1(value) {
        this._trinket1 = value;
    }

    get trinket2() {
        return this._trinket2;
    }

    set trinket2(value) {
        this._trinket2 = value;
    }

    get mainHand() {
        return this._mainHand;
    }

    set mainHand(value) {
        this._mainHand = value;
    }

    get offHand() {
        return this._offHand;
    }

    set offHand(value) {
        this._offHand = value;
    }
}