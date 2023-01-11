/**
 * group-role controller
 */

import { factories } from '@strapi/strapi'
import { controller } from '../../../utils';

export default factories.createCoreController('api::group-role.group-role', ({ strapi }) => controller);
