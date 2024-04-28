import config from '../../wbs.config';

const theme = config?.theme;

export const APP_ICON = config?.icon;
export const APP_NAME = config?.name;
export const APP_BASE_URL = config?.baseURL;
export const APP_CONTACT = config?.email;
export const APP_PATH = config?.path;
export const APP_EXT = config?.ext;
export const APP_DESCRIPTION = config?.metadata?.description;
export const APP_SOCIAL_LINK = config?.socialLinks;
export const APP_THEME_COLOR_PRIMARY = theme.colors?.primary;
export const APP_THEME_SCREENS_MAX_WIDTH = theme.screens?.maxWidth;
