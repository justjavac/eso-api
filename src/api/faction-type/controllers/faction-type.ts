/**
 * faction-type controller
 */

import { factories } from '@strapi/strapi'
import { controller } from '../../../utils';

export default factories.createCoreController('api::faction-type.faction-type', ({ strapi }) => controller);
