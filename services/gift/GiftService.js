const { Gift, sequelize } = require('@models');

const mapDBToModel = ({
  id, name, stock, price, image, rating, description
}) => ({
  id, name, stock, price, image, description, rating: Math.round(rating * 2) / 2
})

class GiftService {
  async createGift(gift) {
    const create = await Gift.create(gift);
    if (!create) throw new Error('Failed to create gift');
    return create;
  }

  async getAllGift(limit = 10, offset = 0, sort = 'rating', order = 'ASC') {

    const sorting = sort === 'rating' ? 'avg(gr.rating)' : 'g.createdAt';
    const orderBy = order === 'ASC' ? 'ASC' : 'DESC';

    const query = `select g.id, g.name, g.description, g.price, g.stock, g.image, ifnull(avg(gr.rating),0) rating from gifts g left join gift_ratings gr on gr.gift_id = g.id GROUP BY g.id, g.name, g.description, g.price, g.stock, g.image order by :sorting :orderBy limit :limit offset :offset`;

    const rows = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
      replacements: {
        sorting,
        orderBy,
        limit,
        offset,
      },
    });

    const count = await Gift.count();

    return {
      rows: rows.map(mapDBToModel),
      count,
      limit,
      offset,
    };
  }

  async getGiftById(id) {
    const query = `select g.id, g.name, g.description, g.price, g.stock, g.image, ifnull(avg(gr.rating),0) rating from gifts g left join gift_ratings gr on gr.gift_id = g.id where g.id = :id GROUP BY g.id, g.name, g.description, g.price, g.stock, g.image`;

    const rows = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
      replacements: {
        id
      },
    });

    return mapDBToModel(rows[0]);
  }

  async updateGift(id, gift) {
    const giftUpdate = await Gift.findOne({
      where: {
        id,
      },
    });

    if (!giftUpdate) throw new Error('Gift not found');

    const update = await Gift.update(gift, {
      where: {
        id,
      },
    });

    if (!update) throw new Error('Failed to update gift');

    if (gift.image) {
      update.oldImage = giftUpdate.image;
    }

    return update;
  }

  async updateStockGift(id, stock) {
    const giftUpdate = await Gift.findOne({
      where: {
        id,
      },
    });

    if (!giftUpdate) throw new Error('Gift not found');

    const update = await Gift.update({
      stock,
    }, {
      where: {
        id,
      },
    });

    if (!update) throw new Error('Failed to update gift');

    return update;
  }

  async deleteGift(id) {
    return Gift.destroy({
      where: {
        id,
      },
    });
  }
}

module.exports = GiftService;