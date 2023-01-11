/**
 * set-summary controller
 */

import { factories } from '@strapi/strapi'
import { controller } from '../../../utils';

export default factories.createCoreController('api::set-summary.set-summary', ({ strapi }) => controller);
