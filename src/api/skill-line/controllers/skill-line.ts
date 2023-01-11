/**
 * skill-line controller
 */

import { factories } from '@strapi/strapi'
import { controller } from '../../../utils';

export default factories.createCoreController('api::skill-line.skill-line', ({ strapi }) => controller);
