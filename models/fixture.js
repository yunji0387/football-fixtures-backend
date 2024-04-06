const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const refereeSchema = new Schema({
    id: Number,
    name: String,
    type: String,
    nationality: String
});

const teamSchema = new Schema({
    id: Number,
    name: String,
    shortName: String,
    tla: String,
    crest: String
});

const scoreSchema = new Schema({
    winner: String,
    duration: String,
    fullTime: {
        home: Number,
        away: Number
    },
    halfTime: {
        home: Number,
        away: Number
    }
});

const fixtureSchema = new Schema({
    area: {
        id: Number,
        name: String,
        code: String,
        flag: String
    },
    competition: {
        id: Number,
        name: String,
        code: String,
        type: String,
        emblem: String
    },
    season: {
        id: { type: Number, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        currentMatchday: Number,
        winner: { type: String }
    },
    id: { type: Number, required: true, unique: true },
    utcDate: Date,
    status: String,
    matchday: Number,
    stage: String,
    group: String,
    lastUpdated: Date,
    homeTeam: teamSchema,
    awayTeam: teamSchema,
    score: scoreSchema,
    odds: {
        msg: String
    },
    referees: [refereeSchema]
}, { timestamps: true });

const Fixture = mongoose.model('Fixture', fixtureSchema);

module.exports = Fixture;
