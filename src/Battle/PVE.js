"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(player, monster) {
        super(player);
        this._player = player;
        this._monster = monster;
    }
}
exports.default = PVE;
