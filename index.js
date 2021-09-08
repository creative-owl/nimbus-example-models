/**
 * Auth models
 */
const Roles = require('./dist/Auth/Roles');
const Users = require('./dist/Auth/Users');
const UserRoles = require('./dist/Auth/UsersRoles');
const UsersTokens = require('./dist/Auth/UserTokens');

/**
 * Contnet models
 */
const ContentCosts = require('./dist/Content/Costs');
const ContentItems = require('./dist/Content/Items');
const ContentProviders = require('./dist/Content/Providers');
const ContentCategories = require('./dist/Content/Categories');
const ContentCollections = require('./dist/Content/Collections');

/**
 * General models
 */
const GeneralConfig = require('./dist/General/GeneralConfig');
const GeneralMenuItems = require('./dist/General/Menus');
const GeneralMediaLibrary = require('./dist/General/MediaLibrary');

/**
 * Statistics models
 */
const StatsLikes = require('./dist/Stats/Likes');
const StatsViews = require('./dist/Stats/Views');
const StatsRatings = require('./dist/Stats/Ratings');
const StatsComments = require('./dist/Stats/Comments');
const StatsCounters = require('./dist/Stats/Counters');

/**
 * User models
 */
const UserProfile = require('./dist/User/Profile');

/**
 * Export all the models in one export.
 */
module.exports = {
  Roles,
  Users,
  UserRoles,
  StatsLikes,
  StatsViews,
  UsersTokens,
  UserProfile,
  ContentCosts,
  StatsRatings,
  ContentItems,
  StatsComments,
  GeneralConfig,
  StatsCounters,
  GeneralMenuItems,
  ContentProviders,
  ContentCategories,
  ContentCollections,
  GeneralMediaLibrary,
};
