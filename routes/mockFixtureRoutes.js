const express = require('express');

const router = express.Router();

const {
    createFixture,
    findFixtureByCompetitionCode,
    updateFixtureByCompetitionCode,
    deleteFixtureByCompetitionCode
} = require('../controllers/mockFixtureController');

router.post('/:code', createFixture);
router.get('/:code', findFixtureByCompetitionCode);
router.put('/:code', updateFixtureByCompetitionCode);
router.delete('/:code', deleteFixtureByCompetitionCode);

module.exports = router;