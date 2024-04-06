const https = require('https');
const Standing = require('../models/fixture');
require("dotenv").config();
const mockData = require('../mock/fixturesData.json');

exports.createFixture = async (req, res) => {
    const { code } = req.params;
    return res.status(201).json({
        success: true,
        competition: code,
        result: 'work in progress'
    });
};

exports.findFixtureByCompetitionCode = async (req, res) => {
    const { code } = req.params;
    return res.status(201).json({
        success: true,
        competition: code,
        result: 'work in progress'
    });
};

exports.updateFixtureByCompetitionCode = async (req, res) => {
    const { code } = req.params;
    return res.status(201).json({
        success: true,
        competition: code,
        result: 'work in progress'
    });
};

exports.deleteFixtureByCompetitionCode = async (req, res) => {
    const { code } = req.params;
    return res.status(201).json({
        success: true,
        competition: code,
        result: 'work in progress'
    });
};