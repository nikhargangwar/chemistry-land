'use strict';

const fs = require('fs');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const filePath = path.join(__dirname, '..', 'chemicalCompounds.json');
    const { chemicalCompounds } = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    const compoundData = chemicalCompounds.map(compound => ({
      name: compound.compoundName,
      image: compound.compoundImage,
      description: compound.compoundDescription,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('chemical-compounds', compoundData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('chemical-compounds', null, {});
  }
};
