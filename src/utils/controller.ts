import type { Context, Next } from "koa";

export const controller = {
  async findOne(ctx: Context) {
    const { id } = ctx.params;

    if (Number.isInteger(Number(id))) {
      // return await super.findOne(ctx);
    }

    ctx.query.filters = { ...(ctx.query.filters as any), slug: id };

    const list = await this.find(ctx);

    if (list.meta.pagination.total === 0) {
      return null;
    }

    const data = list.data[0] ?? null;
    const meta = {};

    return { data, meta };
  },
};
