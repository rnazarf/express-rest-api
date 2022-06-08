'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('gifts', [{
      name: 'Samsung Galaxy S9 - Midnight Black 4/64 GB',
      description: 'Ukuran layar: 6.2 inci, Dual Edge Super AMOLED 2960 x 1440 (Quad HD+) 529 ppi, 18.5:9 Memori: RAM 6 GB (LPDDR4), ROM 64 GB, MicroSD up to 400GB Sistem operasi: Android 8.0 (Oreo)',
      price: 10000,
      image: '8cec16d17020b375d61354ed5793e684.png',
      stock: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Samsung Galaxy S10 - Midnight Black 4/64 GB',
      description: 'Ukuran layar: 6.2 inci, Dual Edge Super AMOLED 2960 x 1440 (Quad HD+) 529 ppi, 18.5:9 Memori: RAM 6 GB (LPDDR4), ROM 64 GB, MicroSD up to 400GB Sistem operasi: Android 8.0 (Oreo)',
      price: 20000,
      image: '8cec16d17020b375d61354ed5793e684.png',
      stock: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Samsung Galaxy S11 - Midnight Black 4/64 GB',
      description: 'Ukuran layar: 6.2 inci, Dual Edge Super AMOLED 2960 x 1440 (Quad HD+) 529 ppi, 18.5:9 Memori: RAM 6 GB (LPDDR4), ROM 64 GB, MicroSD up to 400GB Sistem operasi: Android 8.0 (Oreo)',
      price: 30000,
      image: '8cec16d17020b375d61354ed5793e684.png',
      stock: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Samsung Galaxy S12 - Midnight Black 4/64 GB',
      description: 'Ukuran layar: 6.2 inci, Dual Edge Super AMOLED 2960 x 1440 (Quad HD+) 529 ppi, 18.5:9 Memori: RAM 6 GB (LPDDR4), ROM 64 GB, MicroSD up to 400GB Sistem operasi: Android 8.0 (Oreo)',
      price: 40000,
      image: '8cec16d17020b375d61354ed5793e684.png',
      stock: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Samsung Galaxy S13 - Midnight Black 4/64 GB',
      description: 'Ukuran layar: 6.2 inci, Dual Edge Super AMOLED 2960 x 1440 (Quad HD+) 529 ppi, 18.5:9 Memori: RAM 6 GB (LPDDR4), ROM 64 GB, MicroSD up to 400GB Sistem operasi: Android 8.0 (Oreo)',
      price: 50000,
      image: '8cec16d17020b375d61354ed5793e684.png',
      stock: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('gifts', null, {});
  }
};
