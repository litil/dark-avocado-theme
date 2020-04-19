import * as configColors from './colors';
import * as config from './config';
const fs = require('fs');

const template = {
  name: config.themeName,
  type: config.themeName,
  colors: {
    ...configColors.contrastColors,
    ...configColors.baseColors,
    ...configColors.windowBorderColors,
    ...configColors.textColors,
    ...configColors.buttonColors,
    ...configColors.dropdownColors,
    ...configColors.inputColors,
    ...configColors.scrollbarColors,
    ...configColors.badgeColors,
    ...configColors.progressColors,
    ...configColors.breadcrumbColors,
    ...configColors.listColors,
    ...configColors.availabilityBarColors,
    ...configColors.sidebarColors,
    ...configColors.editorGroupAndTabsColors,
    ...configColors.editorColors,
    ...configColors.diffEditorColors,
    ...configColors.editorWidgetColors,
    ...configColors.peekViewColors,
    ...configColors.mergeColors,
    ...configColors.panelColors,
    ...configColors.statusBarColors,
    ...configColors.titleBarColors,
    ...configColors.notificationsColors,
    ...configColors.extensionColors,
    ...configColors.quickPickerColors,
    ...configColors.integratedTerminalColors,
    ...configColors.debugColors,
    ...configColors.welcomePageColors,
    ...configColors.gitColors,
    ...configColors.undocumentedColors
  },
  tokenColors: configColors.tokenColors
};

fs.writeFile(
  './themes/Dark Avocado VSCode Theme-color-theme.json',
  JSON.stringify(template, null, 2),
  function (err: Error) {
    if (err) {
      console.log('❌ An error has occurred');
      return console.log(err);
    }
    console.log('✅ The theme has been successfully generated!');
    console.log(`👉 Check themes/Dark Avocado VSCode Theme-color-theme.json`);
  }
);
