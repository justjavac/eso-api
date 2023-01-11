/**
 * mundus-stone controller
 */

import { factories } from '@strapi/strapi'
import { controller } from '../../../utils';

export default factories.createCoreController('api::mundus-stone.mundus-stone', ({ strapi }) => controller);
