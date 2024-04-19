import config from '../../wbs.config';

export const APP_NAME = config?.name;
export const APP_SITE = config?.site;
export const APP_PATH = config?.path;
export const APP_EXT = config?.ext;
export const APP_DESCRIPTION = config?.metadata?.description;
export const APP_SOCIAL_LINK = config?.socialLinks;
