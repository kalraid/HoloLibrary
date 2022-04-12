const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  addRouters: state => state.menu.addRouters,
  permissionRouters: (state) => state.menu.routers,
  sideLogo: state => state.settings.sidebarLogo,
  clipped: state => state.settings.sidebarClipped,
  horizon: state => state.settings.horizontal,
  fixedBread: state => state.settings.fixedBreadCrumb,
  darkTheme: state => state.settings.themeDark,
  semiDarkTheme: state => state.settings.themeSemiDark,
  dataStudent: state => state.settings.dataStudent,
  dataChild: state => state.settings.dataChild,
  locale: state => state.settings.locale
}
export default getters
