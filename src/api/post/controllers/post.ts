/**
 * post controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::post.post', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    if (Number.isInteger(Number(id))) {
      return await super.findOne(ctx);
    }

    ctx.query.filters = { ...(ctx.query.filters as any), name: id };

    const list = await super.find(ctx);

    if (list.meta.pagination.total === 0) {
      return null;
    }

    const data = list.data[0]!;
    const meta = {};

    await strapi.query("api::post.post")
      .update({
        where: { id: data.id },
        data: { views: parseInt(data.attributes.views) + 1 }
      });

    return { data, meta };
  }
}));
