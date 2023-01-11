/**
 * dlc-bundle controller
 */

import { factories } from '@strapi/strapi'
import { controller } from '../../../utils';

export default factories.createCoreController('api::dlc-bundle.dlc-bundle', ({ strapi }) => controller);
