const mockData = require('../mock/fixturesData.json');

exports.createFixture = async (req, res) => {
    const { code } = req.params;

    if (mockData.resultSet.competitions === code) {
        return res.status(201).json({
            success: true,
            data: mockData
        });
    } else {
        return res.status(404).json({
            success: false,
            message: 'The requested competition code does not exist.'
        });
    }
};

exports.findFixtureByCompetitionCode = async (req, res) => {
    const { code } = req.params;

    if (mockData.resultSet.competitions === code) {
        return res.status(200).json({
            success: true,
            data: mockData
        });
    } else {
        return res.status(404).json({
            success: false,
            message: 'Fixtures not found for the provided competition code.'
        });
    }
};

exports.updateFixtureByCompetitionCode = async (req, res) => {
    const { code } = req.params;

    if (mockData.resultSet.competitions === code) {
        return res.status(200).json({
            success: true,
            message: 'Fixtures update successful.',
            data: mockData
        });
    } else {
        return res.status(404).json({
            success: false,
            message: 'Fixtures not found for the provided competition code.'
        });
    }
};

exports.deleteFixtureByCompetitionCode = async (req, res) => {
    const { code } = req.params;

    if (mockData.resultSet.competitions === code) {
        return res.status(200).json({
            success: true,
            message: 'Fixtures successfully deleted.'
        });
    } else {
        return res.status(404).json({
            success: false,
            message: 'Fixtures not found for the provided competition code.'
        });
    }
};
