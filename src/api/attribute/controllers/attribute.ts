/**
 * attribute controller
 */

import { factories } from '@strapi/strapi'
import { controller } from '../../../utils';

export default factories.createCoreController('api::attribute.attribute', ({ strapi }) => controller);
