/**
 * achievement-category controller
 */

import { factories } from '@strapi/strapi'
import { controller } from "../../../utils";

export default factories.createCoreController('api::achievement-category.achievement-category', ({ strapi }) => controller);
