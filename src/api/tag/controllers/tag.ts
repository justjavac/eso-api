/**
 * tag controller
 */

import { factories } from '@strapi/strapi'
import { controller } from '../../../utils';

export default factories.createCoreController('api::tag.tag', ({ strapi }) => controller);
