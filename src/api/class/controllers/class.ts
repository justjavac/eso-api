/**
 * class controller
 */

import { factories } from '@strapi/strapi'
import { controller } from '../../../utils';

export default factories.createCoreController('api::class.class', ({ strapi }) => controller);
