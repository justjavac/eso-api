/**
 * server-status controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::server-status.server-status",
  ({ strapi }) => ({
    async update(ctx) {
      const { servers } = await strapi.entityService.findOne(
        "api::server-status.server-status",
        1,
      );

      const response = await super.update(ctx);

      let message = "服务器正常运行";
      if (isOnline(servers) && !isOnline(response.data.attributes.servers)) {
        message = "服务器正在维护中";
      } else if (
        !isOnline(servers) && isOnline(response.data.attributes.servers)
      ) {
        message = "服务器正常运行";
      } else {
        return response;
      }

      return await strapi.entityService.update(
        "api::server-status.server-status",
        1,
        { data: { message } },
      );
    },
  }),
);

function isOnline(servers: Record<string, boolean>) {
  return Object.values(servers).every((server) => server);
}
