/**
 * antiquity-lead controller
 */

import { factories } from '@strapi/strapi'
import { controller } from '../../../utils';

export default factories.createCoreController('api::antiquity-lead.antiquity-lead', ({ strapi }) => controller);
