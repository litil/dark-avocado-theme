// @see https://code.visualstudio.com/api/references/theme-color

export enum PALETTE {
  BACKGROUND = '#011627',
  CURRENT_LINE = '',
  SELECTION = '',
  FOREGROUND = '#d6deeb',
  COMMENT = '',
  CYAN = '#21c7a8',
  CYAN_BRIGHT = '#7fdbca',
  BLUE = '#82AAFF',
  // GREEN = '#00b388',
  GREEN = '#22da6e',
  MAGENTA = '#C792EA',
  ORANGE = '',
  PINK = '',
  PURPLE = '#7e57c2',
  RED = '#EF5350',
  // YELLOW = '#addb67',
  YELLOW = '#a2e4b8',
  YELLOW_BRIGHT = '#ffeb95',
  BLACK = '#575656',
  WHITE = '#ffffff',
  BORDER = '#5f7e97'
}

// custom colors
export enum CUSTOM {
  SELECTION_BACKGROUND = '#4373c2',
  PURPLE_VARIANT_1 = '#7e57c2cc',
  FOREGROUND_VARIANT_1 = '#ffffffcc',
  DARK_BORDER = '#122d42',
  DARK_BORDER_2 = '#262a39',
  INPUT_BACKGROUND = '#0b253a',
  SCROLLBAR_BACKGROUND = '#084d8180',
  STATUS_BAR_BACKGROUND = '#202431',
  NULL_RED = '#FF5874',
  WARNING_ORANGE = '#FFCA28',
  INFO_BLUE = '#64B5F6'
}

export const contrastColors = {
  contrastBorder: CUSTOM.DARK_BORDER
};

export const baseColors = {
  focusBorder: CUSTOM.DARK_BORDER,
  foreground: PALETTE.FOREGROUND,
  'widget.shadow': PALETTE.BACKGROUND,
  'selection.background': CUSTOM.SELECTION_BACKGROUND,
  descriptionForeground: PALETTE.FOREGROUND,
  errorForeground: PALETTE.RED,
  'icon.foreground': PALETTE.FOREGROUND
};

export const windowBorderColors = {
  'window.activeBorder': PALETTE.BORDER
};

export const textColors = {
  'textBlockQuote.background': PALETTE.BACKGROUND,
  'textBlockQuote.border': PALETTE.BORDER,
  'textCodeBlock.background': PALETTE.BACKGROUND,
  'textLink.activeForeground': PALETTE.FOREGROUND,
  'textLink.foreground': PALETTE.FOREGROUND,
  'textPreformat.foreground': PALETTE.FOREGROUND,
  'textSeparator.foreground': PALETTE.FOREGROUND
};

export const buttonColors = {
  'button.background': CUSTOM.PURPLE_VARIANT_1,
  'button.foreground': CUSTOM.FOREGROUND_VARIANT_1,
  'button.hoverBackground': PALETTE.PURPLE
};

export const dropdownColors = {
  'dropdown.background': PALETTE.BACKGROUND,
  'dropdown.border': PALETTE.BORDER,
  'dropdown.foreground': CUSTOM.FOREGROUND_VARIANT_1
};

export const inputColors = {
  'input.background': CUSTOM.INPUT_BACKGROUND,
  'input.border': PALETTE.BORDER,
  'input.foreground': CUSTOM.FOREGROUND_VARIANT_1,
  'input.placeholderForeground': PALETTE.BORDER,
  'inputOption.activeBorder': CUSTOM.FOREGROUND_VARIANT_1,
  'punctuation.definition.generic.begin.html': '#ef5350f2',
  'inputValidation.errorBackground': '#AB0300F2',
  'inputValidation.errorBorder': PALETTE.RED,
  'inputValidation.infoBackground': '#00589EF2',
  'inputValidation.infoBorder': CUSTOM.INFO_BLUE,
  'inputValidation.warningBackground': '#675700F2',
  'inputValidation.warningBorder': CUSTOM.WARNING_ORANGE
};

export const scrollbarColors = {
  'scrollbar.shadow': '#010b14',
  'scrollbarSlider.activeBackground': CUSTOM.SCROLLBAR_BACKGROUND,
  'scrollbarSlider.background': CUSTOM.SCROLLBAR_BACKGROUND,
  'scrollbarSlider.hoverBackground': CUSTOM.SCROLLBAR_BACKGROUND
};

export const badgeColors = {
  'badge.background': PALETTE.BORDER,
  'badge.foreground': PALETTE.WHITE
};

export const progressColors = {
  'progress.background': PALETTE.PURPLE, // might be useless
  'progressBar.background': PALETTE.PURPLE
};

export const breadcrumbColors = {
  'breadcrumb.foreground': '#A599E9',
  'breadcrumb.focusForeground': PALETTE.WHITE,
  'breadcrumb.activeSelectionForeground': PALETTE.WHITE,
  'breadcrumbPicker.background': '#001122'
};

export const listColors = {
  'list.activeSelectionBackground': '#234d708c',
  'list.activeSelectionForeground': PALETTE.WHITE,
  'list.invalidItemForeground': '#975f94',
  'list.dropBackground': PALETTE.BACKGROUND,
  'list.focusBackground': '#010d18',
  'list.focusForeground': PALETTE.WHITE,
  'list.highlightForeground': PALETTE.WHITE,
  'list.hoverBackground': PALETTE.BACKGROUND,
  'list.hoverForeground': PALETTE.WHITE,
  'list.inactiveSelectionBackground': '#0e293f',
  'list.inactiveSelectionForeground': PALETTE.BORDER
};

export const availabilityBarColors = {
  'activityBar.background': PALETTE.BACKGROUND,
  'activityBar.dropBackground': PALETTE.BORDER,
  'activityBar.foreground': PALETTE.BORDER,
  'activityBar.border': PALETTE.BACKGROUND,
  'activityBarBadge.background': '#44596b',
  'activityBarBadge.foreground': PALETTE.WHITE
};

export const sidebarColors = {
  'sideBar.background': PALETTE.BACKGROUND,
  'sideBar.foreground': '#89a4bb',
  'sideBar.border': PALETTE.BACKGROUND,
  'sideBarTitle.foreground': PALETTE.BORDER,
  'sideBarSectionHeader.background': PALETTE.BACKGROUND,
  'sideBarSectionHeader.foreground': PALETTE.BORDER
};

export const editorGroupAndTabsColors = {
  'editorGroup.emptyBackground': PALETTE.BACKGROUND,
  'editorGroup.border': PALETTE.BACKGROUND,
  'editorGroup.dropBackground': '#7e57c273',
  'editorGroupHeader.noTabsBackground': PALETTE.BACKGROUND,
  'editorGroupHeader.tabsBackground': PALETTE.BACKGROUND,
  'editorGroupHeader.tabsBorder': CUSTOM.DARK_BORDER_2,
  'tab.activeBackground': '#0b2942',
  'tab.activeForeground': '#d2dee7',
  'tab.border': '#272B3B',
  'tab.activeBorder': CUSTOM.DARK_BORDER_2,
  'tab.unfocusedActiveBorder': CUSTOM.DARK_BORDER_2,
  'tab.inactiveBackground': '#01111d',
  'tab.inactiveForeground': PALETTE.BORDER,
  'tab.unfocusedActiveForeground': PALETTE.BORDER,
  'tab.unfocusedInactiveForeground': PALETTE.BORDER
};

export const editorColors = {
  'editor.background': PALETTE.BACKGROUND,
  'editor.foreground': PALETTE.FOREGROUND,
  'editorLineNumber.foreground': '#4b6479',
  'editorLineNumber.activeForeground': '#C5E4FD',
  'editorCursor.foreground': '#80a4c2',
  'editor.selectionBackground': '#1d3b53',
  'editor.selectionHighlightBackground': '#5f7e9779',
  'editor.inactiveSelectionBackground': '#7e57c25a',
  'editor.wordHighlightBackground': '#f6bbe533',
  'editor.wordHighlightStrongBackground': '#e2a2f433',
  'editor.findMatchBackground': '#5f7e9779',
  'editor.findMatchHighlightBackground': '#1085bb5d',
  'editor.findRangeHighlightBackground': null,
  'editor.hoverHighlightBackground': '#7e57c25a',
  'editor.lineHighlightBackground': '#0003',
  'editor.lineHighlightBorder': null,
  'editorLink.activeForeground': null,
  'editor.rangeHighlightBackground': '#7e57c25a',
  'editorWhitespace.foreground': null,
  'editorIndentGuide.background': '#5e81ce52',
  'editorIndentGuide.activeBackground': '#7E97AC',
  'editorRuler.foreground': '#5e81ce52',
  'editorCodeLens.foreground': '#5e82ceb4',
  'editorBracketMatch.background': '#5f7e974d',
  'editorBracketMatch.border': null,
  'editorOverviewRuler.currentContentForeground': PALETTE.PURPLE,
  'editorOverviewRuler.incomingContentForeground': PALETTE.PURPLE,
  'editorOverviewRuler.commonContentForeground': PALETTE.PURPLE,
  'editorError.foreground': PALETTE.RED,
  'editorError.border': null,
  'editorWarning.foreground': '#b39554',
  'editorWarning.border': null,
  'editorGutter.background': PALETTE.BACKGROUND,
  'editorGutter.modifiedBackground': '#e2b93d',
  'editorGutter.addedBackground': '#9CCC65',
  'editorGutter.deletedBackground': PALETTE.RED
};

export const diffEditorColors = {
  'diffEditor.insertedTextBackground': '#99b76d23',
  'diffEditor.insertedTextBorder': '#addb6733',
  'diffEditor.removedTextBackground': '#ef535033',
  'diffEditor.removedTextBorder': '#ef53504d'
};

export const editorWidgetColors = {
  'editorWidget.background': '#31364a',
  'editorWidget.border': CUSTOM.DARK_BORDER_2,
  'editorSuggestWidget.background': '#2C3043',
  'editorSuggestWidget.border': '#2B2F40',
  'editorSuggestWidget.foreground': PALETTE.FOREGROUND,
  'editorSuggestWidget.highlightForeground': PALETTE.WHITE,
  'editorSuggestWidget.selectedBackground': PALETTE.BORDER,
  'editorHoverWidget.background': PALETTE.BACKGROUND,
  'editorHoverWidget.border': PALETTE.BORDER,
  'debugExceptionWidget.background': PALETTE.BACKGROUND,
  'debugExceptionWidget.border': PALETTE.BORDER,
  'editorMarkerNavigation.background': '#31364a',
  'editorMarkerNavigationError.background': PALETTE.RED,
  'editorMarkerNavigationWarning.background': CUSTOM.WARNING_ORANGE
};

export const peekViewColors = {
  'peekView.border': PALETTE.BORDER,
  'peekViewEditor.background': PALETTE.BACKGROUND,
  'peekViewEditor.matchHighlightBackground': '#7e57c25a',
  'peekViewResult.background': PALETTE.BACKGROUND,
  'peekViewResult.fileForeground': PALETTE.BORDER,
  'peekViewResult.lineForeground': PALETTE.BORDER,
  'peekViewResult.matchHighlightBackground': CUSTOM.FOREGROUND_VARIANT_1,
  'peekViewResult.selectionBackground': '#2E3250',
  'peekViewResult.selectionForeground': PALETTE.BORDER,
  'peekViewTitle.background': PALETTE.BACKGROUND,
  'peekViewTitleDescription.foreground': '#697098',
  'peekViewTitleLabel.foreground': PALETTE.BORDER
};

export const mergeColors = {
  'merge.currentHeaderBackground': PALETTE.BORDER,
  'merge.currentContentBackground': null,
  'merge.incomingHeaderBackground': '#7e57c25a',
  'merge.incomingContentBackground': null,
  'merge.border': null
};

export const panelColors = {
  'panel.background': PALETTE.BACKGROUND,
  'panel.border': PALETTE.BORDER,
  'panelTitle.activeBorder': PALETTE.BORDER,
  'panelTitle.activeForeground': CUSTOM.FOREGROUND_VARIANT_1,
  'panelTitle.inactiveForeground': '#d6deeb80'
};

export const statusBarColors = {
  'statusBar.background': PALETTE.BACKGROUND,
  'statusBar.foreground': PALETTE.BORDER,
  'statusBar.border': CUSTOM.DARK_BORDER_2,
  'statusBar.debuggingBackground': CUSTOM.SCROLLBAR_BACKGROUND,
  'statusBar.debuggingForeground': null,
  'statusBar.debuggingBorder': '#1F2330',
  'statusBar.noFolderForeground': null,
  'statusBar.noFolderBackground': PALETTE.BACKGROUND,
  'statusBar.noFolderBorder': '#25293A',
  'statusBarItem.activeBackground': CUSTOM.SCROLLBAR_BACKGROUND,
  'statusBarItem.hoverBackground': CUSTOM.SCROLLBAR_BACKGROUND,
  'statusBarItem.prominentBackground': CUSTOM.SCROLLBAR_BACKGROUND,
  'statusBarItem.prominentHoverBackground': CUSTOM.SCROLLBAR_BACKGROUND
};

export const titleBarColors = {
  'titleBar.activeBackground': PALETTE.BACKGROUND,
  'titleBar.activeForeground': '#eeefff',
  'titleBar.inactiveBackground': '#010e1a',
  'titleBar.inactiveForeground': null
};

export const notificationsColors = {
  'notifications.background': '#021f35',
  'notifications.border': CUSTOM.DARK_BORDER_2,
  'notificationCenter.border': CUSTOM.DARK_BORDER_2,
  'notificationToast.border': CUSTOM.DARK_BORDER_2,
  'notifications.foreground': CUSTOM.FOREGROUND_VARIANT_1,
  'notificationLink.foreground': '#80CBC4'
};

export const extensionColors = {
  'extensionButton.prominentForeground': CUSTOM.FOREGROUND_VARIANT_1,
  'extensionButton.prominentBackground': '#7e57c2cc',
  'extensionButton.prominentHoverBackground': PALETTE.PURPLE
};

export const quickPickerColors = {
  'pickerGroup.foreground': '#d1aaff',
  'pickerGroup.border': PALETTE.BACKGROUND
};

export const integratedTerminalColors = {
  'terminal.ansiWhite': PALETTE.WHITE,
  'terminal.ansiBlack': PALETTE.BACKGROUND,
  'terminal.ansiBlue': PALETTE.BLUE,
  'terminal.ansiCyan': PALETTE.CYAN,
  'terminal.ansiGreen': PALETTE.GREEN,
  'terminal.ansiMagenta': PALETTE.MAGENTA,
  'terminal.ansiRed': PALETTE.RED,
  'terminal.ansiYellow': PALETTE.YELLOW,
  'terminal.ansiBrightWhite': PALETTE.WHITE,
  'terminal.ansiBrightBlack': PALETTE.BLACK,
  'terminal.ansiBrightBlue': PALETTE.BLUE,
  'terminal.ansiBrightCyan': PALETTE.CYAN_BRIGHT,
  'terminal.ansiBrightGreen': PALETTE.GREEN,
  'terminal.ansiBrightMagenta': PALETTE.MAGENTA,
  'terminal.ansiBrightRed': PALETTE.RED,
  'terminal.ansiBrightYellow': PALETTE.YELLOW_BRIGHT,
  'terminal.selectionBackground': '#1b90dd4d',
  'terminalCursor.background': '#234d70'
};

export const debugColors = {
  'debugToolBar.background': PALETTE.BACKGROUND
};

export const welcomePageColors = {
  'welcomePage.buttonBackground': PALETTE.BACKGROUND,
  'welcomePage.buttonHoverBackground': PALETTE.BACKGROUND,
  'walkThrough.embeddedEditorBackground': PALETTE.BACKGROUND
};

export const gitColors = {
  'gitDecoration.modifiedResourceForeground': '#a2bffc',
  'gitDecoration.deletedResourceForeground': '#EF535090',
  'gitDecoration.untrackedResourceForeground': '#addb67ff',
  'gitDecoration.ignoredResourceForeground': '#395a75',
  'gitDecoration.conflictingResourceForeground': '#ffeb95cc'
};

export const undocumentedColors = {
  'source.elm': PALETTE.BORDER,
  'string.quoted.single.js': PALETTE.WHITE,
  'meta.objectliteral.js': PALETTE.BLUE
};

export const tokenColors = [
  {
    name: 'Changed',
    scope: [
      'markup.changed',
      'meta.diff.header.git',
      'meta.diff.header.from-file',
      'meta.diff.header.to-file'
    ],
    settings: {
      foreground: '#a2bffc'
    }
  },
  {
    name: 'Deleted',
    scope: 'markup.deleted.diff',
    settings: {
      foreground: '#EF535090'
    }
  },
  {
    name: 'Inserted',
    scope: 'markup.inserted.diff',
    settings: {
      foreground: '#addb67ff'
    }
  },
  {
    name: 'Global settings',
    settings: {
      background: '#011627',
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'Comment',
    scope: 'comment',
    settings: {
      foreground: '#637777',
      fontStyle: ''
    }
  },
  {
    name: 'String',
    scope: 'string',
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'String Quoted',
    scope: ['string.quoted', 'variable.other.readwrite.js'],
    settings: {
      foreground: '#ecc48d'
    }
  },
  {
    name: 'Support Constant Math',
    scope: 'support.constant.math',
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'Number',
    scope: ['constant.numeric', 'constant.character.numeric'],
    settings: {
      foreground: '#F78C6C',
      fontStyle: ''
    }
  },
  {
    name: 'Built-in constant',
    scope: ['constant.language', 'punctuation.definition.constant', 'variable.other.constant'],
    settings: {
      foreground: PALETTE.BLUE
    }
  },
  {
    name: 'User-defined constant',
    scope: ['constant.character', 'constant.other'],
    settings: {
      foreground: PALETTE.BLUE
    }
  },
  {
    name: 'Constant Character Escape',
    scope: 'constant.character.escape',
    settings: {
      foreground: '#F78C6C'
    }
  },
  {
    name: 'RegExp String',
    scope: ['string.regexp', 'string.regexp keyword.other'],
    settings: {
      foreground: '#5ca7e4'
    }
  },
  {
    name: 'Comma in functions',
    scope: 'meta.function punctuation.separator.comma',
    settings: {
      foreground: '#5f7e97'
    }
  },
  {
    name: 'Variable',
    scope: 'variable',
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'Keyword',
    scope: ['punctuation.accessor', 'keyword'],
    settings: {
      foreground: PALETTE.MAGENTA,
      fontStyle: ''
    }
  },
  {
    name: 'Storage',
    scope: [
      'storage',
      'meta.var.expr',
      'meta.class meta.method.declaration meta.var.expr storage.type.js',
      'storage.type.property.js',
      'storage.type.property.ts',
      'storage.type.property.tsx'
    ],
    settings: {
      foreground: PALETTE.MAGENTA,
      fontStyle: ''
    }
  },
  {
    name: 'Storage type',
    scope: 'storage.type',
    settings: {
      foreground: PALETTE.MAGENTA
    }
  },
  {
    name: 'Storage type',
    scope: 'storage.type.function.arrow.js',
    settings: {
      fontStyle: ''
    }
  },
  {
    name: 'Class name',
    scope: ['entity.name.class', 'meta.class entity.name.type.class'],
    settings: {
      foreground: '#ffcb8b'
    }
  },
  {
    name: 'Inherited class',
    scope: 'entity.other.inherited-class',
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'Function name',
    scope: 'entity.name.function',
    settings: {
      foreground: PALETTE.MAGENTA,
      fontStyle: ''
    }
  },
  {
    name: 'Meta Tag',
    scope: ['punctuation.definition.tag', 'meta.tag'],
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'HTML Tag names',
    scope: [
      'entity.name.tag',
      'meta.tag.other.html',
      'meta.tag.other.js',
      'meta.tag.other.tsx',
      'entity.name.tag.tsx',
      'entity.name.tag.js',
      'entity.name.tag',
      'meta.tag.js',
      'meta.tag.tsx',
      'meta.tag.html'
    ],
    settings: {
      foreground: PALETTE.CYAN_BRIGHT,
      fontStyle: ''
    }
  },
  {
    name: 'Tag attribute',
    scope: 'entity.other.attribute-name',
    settings: {
      fontStyle: '',
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'Entity Name Tag Custom',
    scope: 'entity.name.tag.custom',
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'Library (function & constant)',
    scope: ['support.function', 'support.constant'],
    settings: {
      foreground: PALETTE.BLUE
    }
  },
  {
    name: 'Support Constant Property Value meta',
    scope: 'support.constant.meta.property-value',
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'Library class/type',
    scope: ['support.type', 'support.class'],
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'Support Variable DOM',
    scope: 'support.variable.dom',
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'Invalid',
    scope: 'invalid',
    settings: {
      background: '#ff2c83',
      foreground: PALETTE.WHITE
    }
  },
  {
    name: 'Invalid deprecated',
    scope: 'invalid.deprecated',
    settings: {
      foreground: PALETTE.WHITE,
      background: '#d3423e'
    }
  },
  {
    name: 'Keyword Operator',
    scope: 'keyword.operator',
    settings: {
      foreground: PALETTE.CYAN_BRIGHT,
      fontStyle: ''
    }
  },
  {
    name: 'Keyword Operator Relational',
    scope: 'keyword.operator.relational',
    settings: {
      foreground: PALETTE.MAGENTA,
      fontStyle: ''
    }
  },
  {
    name: 'Keyword Operator Assignment',
    scope: 'keyword.operator.assignment',
    settings: {
      foreground: PALETTE.MAGENTA
    }
  },
  {
    name: 'Keyword Operator Arithmetic',
    scope: 'keyword.operator.arithmetic',
    settings: {
      foreground: PALETTE.MAGENTA
    }
  },
  {
    name: 'Keyword Operator Bitwise',
    scope: 'keyword.operator.bitwise',
    settings: {
      foreground: PALETTE.MAGENTA
    }
  },
  {
    name: 'Keyword Operator Increment',
    scope: 'keyword.operator.increment',
    settings: {
      foreground: PALETTE.MAGENTA
    }
  },
  {
    name: 'Keyword Operator Ternary',
    scope: 'keyword.operator.ternary',
    settings: {
      foreground: PALETTE.MAGENTA
    }
  },
  {
    name: 'Double-Slashed Comment',
    scope: 'comment.line.double-slash',
    settings: {
      foreground: '#637777'
    }
  },
  {
    name: 'Object',
    scope: 'object',
    settings: {
      foreground: '#cdebf7'
    }
  },
  {
    name: 'Null',
    scope: 'constant.language.null',
    settings: {
      foreground: CUSTOM.NULL_RED
    }
  },
  {
    name: 'Meta Brace',
    scope: 'meta.brace',
    settings: {
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'Meta Delimiter Period',
    scope: 'meta.delimiter.period',
    settings: {
      foreground: PALETTE.MAGENTA,
      fontStyle: ''
    }
  },
  {
    name: 'Punctuation Definition String',
    scope: 'punctuation.definition.string',
    settings: {
      foreground: '#d9f5dd'
    }
  },
  {
    name: 'Punctuation Definition String Markdown',
    scope: 'punctuation.definition.string.begin.markdown',
    settings: {
      foreground: CUSTOM.NULL_RED
    }
  },
  {
    name: 'Boolean',
    scope: 'constant.language.boolean',
    settings: {
      foreground: CUSTOM.NULL_RED
    }
  },
  {
    name: 'Object Comma',
    scope: 'object.comma',
    settings: {
      foreground: PALETTE.WHITE
    }
  },
  {
    name: 'Variable Parameter Function',
    scope: 'variable.parameter.function',
    settings: {
      foreground: PALETTE.CYAN_BRIGHT,
      fontStyle: ''
    }
  },
  {
    name: 'Support Type Property Name & entity name tags',
    scope: [
      'support.type.vendor.property-name',
      'support.constant.vendor.property-value',
      'support.type.property-name',
      'meta.property-list entity.name.tag'
    ],
    settings: {
      foreground: '#80CBC4',
      fontStyle: ''
    }
  },
  {
    name: 'Entity Name tag reference in stylesheets',
    scope: 'meta.property-list entity.name.tag.reference',
    settings: {
      foreground: '#57eaf1'
    }
  },
  {
    name: 'Constant Other Color RGB Value Punctuation Definition Constant',
    scope: 'constant.other.color.rgb-value punctuation.definition.constant',
    settings: {
      foreground: '#F78C6C'
    }
  },
  {
    name: 'Constant Other Color',
    scope: 'constant.other.color',
    settings: {
      foreground: PALETTE.YELLOW_BRIGHT
    }
  },
  {
    name: 'Keyword Other Unit',
    scope: 'keyword.other.unit',
    settings: {
      foreground: PALETTE.YELLOW_BRIGHT
    }
  },
  {
    name: 'Meta Selector',
    scope: 'meta.selector',
    settings: {
      foreground: PALETTE.MAGENTA,
      fontStyle: ''
    }
  },
  {
    name: 'Entity Other Attribute Name Id',
    scope: 'entity.other.attribute-name.id',
    settings: {
      foreground: '#FAD430'
    }
  },
  {
    name: 'Meta Property Name',
    scope: 'meta.property-name',
    settings: {
      foreground: '#80CBC4'
    }
  },
  {
    name: 'Doctypes',
    scope: ['entity.name.tag.doctype', 'meta.tag.sgml.doctype'],
    settings: {
      foreground: PALETTE.MAGENTA,
      fontStyle: ''
    }
  },
  {
    name: 'Punctuation Definition Parameters',
    scope: 'punctuation.definition.parameters',
    settings: {
      foreground: '#d9f5dd'
    }
  },
  {
    name: 'Keyword Control Operator',
    scope: 'keyword.control.operator',
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'Keyword Operator Logical',
    scope: 'keyword.operator.logical',
    settings: {
      foreground: PALETTE.MAGENTA,
      fontStyle: ''
    }
  },
  {
    name: 'Variable Instances',
    scope: [
      'variable.instance',
      'variable.other.instance',
      'variable.readwrite.instance',
      'variable.other.readwrite.instance',
      'variable.other.property'
    ],
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'Variable Property Other object property',
    scope: ['variable.other.object.property'],
    settings: {
      foreground: '#faf39f',
      fontStyle: ''
    }
  },
  {
    name: 'Variable Property Other object',
    scope: ['variable.other.object.js'],
    settings: {
      fontStyle: ''
    }
  },
  {
    name: 'Entity Name Function',
    scope: ['entity.name.function'],
    settings: {
      foreground: PALETTE.BLUE,
      fontStyle: ''
    }
  },
  {
    name: 'Keyword Operator Comparison, returns, imports, and Keyword Operator Ruby',
    scope: [
      'keyword.control.conditional.js',
      'keyword.operator.comparison',
      'keyword.control.flow.js',
      'keyword.control.flow.ts',
      'keyword.control.flow.tsx',
      'keyword.control.ruby',
      'keyword.control.def.ruby',
      'keyword.control.loop.js',
      'keyword.control.loop.ts',
      'keyword.control.import.js',
      'keyword.control.import.ts',
      'keyword.control.import.tsx',
      'keyword.control.from.js',
      'keyword.control.from.ts',
      'keyword.control.from.tsx',
      'keyword.control.conditional.js',
      'keyword.control.conditional.ts',
      'keyword.control.switch.js',
      'keyword.control.switch.ts',
      'keyword.operator.instanceof.js',
      'keyword.operator.expression.instanceof.ts',
      'keyword.operator.expression.instanceof.tsx'
    ],
    settings: {
      foreground: PALETTE.MAGENTA,
      fontStyle: ''
    }
  },
  {
    name: 'Support Constant, `new` keyword, Special Method Keyword, `debugger`, other keywords',
    scope: [
      'support.constant',
      'keyword.other.special-method',
      'keyword.other.new',
      'keyword.other.debugger',
      'keyword.control'
    ],
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'Support Function',
    scope: 'support.function',
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'Invalid Broken',
    scope: 'invalid.broken',
    settings: {
      foreground: '#020e14',
      background: '#F78C6C'
    }
  },
  {
    name: 'Invalid Unimplemented',
    scope: 'invalid.unimplemented',
    settings: {
      background: '#8BD649',
      foreground: PALETTE.WHITE
    }
  },
  {
    name: 'Invalid Illegal',
    scope: 'invalid.illegal',
    settings: {
      foreground: PALETTE.WHITE,
      background: '#ec5f67'
    }
  },
  {
    name: 'Language Variable',
    scope: 'variable.language',
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'Support Variable Property',
    scope: 'support.variable.property',
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'Variable Function',
    scope: 'variable.function',
    settings: {
      foreground: PALETTE.BLUE
    }
  },
  {
    name: 'Variable Interpolation',
    scope: 'variable.interpolation',
    settings: {
      foreground: '#ec5f67'
    }
  },
  {
    name: 'Meta Function Call',
    scope: 'meta.function-call',
    settings: {
      foreground: PALETTE.BLUE
    }
  },
  {
    name: 'Punctuation Section Embedded',
    scope: 'punctuation.section.embedded',
    settings: {
      foreground: '#d3423e'
    }
  },
  {
    name: 'Punctuation Tweaks',
    scope: [
      'punctuation.terminator.expression',
      'punctuation.definition.arguments',
      'punctuation.definition.array',
      'punctuation.section.array',
      'meta.array'
    ],
    settings: {
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'More Punctuation Tweaks',
    scope: [
      'punctuation.definition.list.begin',
      'punctuation.definition.list.end',
      'punctuation.separator.arguments',
      'punctuation.definition.list'
    ],
    settings: {
      foreground: '#d9f5dd'
    }
  },
  {
    name: 'Template Strings',
    scope: 'string.template meta.template.expression',
    settings: {
      foreground: '#d3423e'
    }
  },
  {
    name: 'Backtics(``) in Template Strings',
    scope: 'string.template punctuation.definition.string',
    settings: {
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'Italics',
    scope: 'italic',
    settings: {
      foreground: PALETTE.MAGENTA,
      fontStyle: 'italic'
    }
  },
  {
    name: 'Bold',
    scope: 'bold',
    settings: {
      foreground: PALETTE.YELLOW,
      fontStyle: 'bold'
    }
  },
  {
    name: 'Quote',
    scope: 'quote',
    settings: {
      foreground: '#697098',
      fontStyle: ''
    }
  },
  {
    name: 'Raw Code',
    scope: 'raw',
    settings: {
      foreground: '#80CBC4'
    }
  },
  {
    name: 'CoffeScript Variable Assignment',
    scope: 'variable.assignment.coffee',
    settings: {
      foreground: '#31e1eb'
    }
  },
  {
    name: 'CoffeScript Parameter Function',
    scope: 'variable.parameter.function.coffee',
    settings: {
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'CoffeeScript Assignments',
    scope: 'variable.assignment.coffee',
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'Tag names in Stylesheets',
    scope: [
      'entity.name.tag.css',
      'entity.name.tag.less',
      'entity.name.tag.custom.css',
      'support.constant.property-value.css'
    ],
    settings: {
      foreground: '#ff6363',
      fontStyle: ''
    }
  },
  {
    name: 'Wildcard(*) selector in Stylesheets',
    scope: [
      'entity.name.tag.wildcard.css',
      'entity.name.tag.wildcard.less',
      'entity.name.tag.wildcard.scss',
      'entity.name.tag.wildcard.sass'
    ],
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'CSS Keyword Other Unit',
    scope: 'keyword.other.unit.css',
    settings: {
      foreground: PALETTE.YELLOW_BRIGHT
    }
  },
  {
    name: 'Attribute Name for CSS',
    scope: [
      'meta.attribute-selector.css entity.other.attribute-name.attribute',
      'variable.other.readwrite.js'
    ],
    settings: {
      foreground: '#F78C6C'
    }
  },
  {
    name: 'Elixir Classes',
    scope: [
      'source.elixir support.type.elixir',
      'source.elixir meta.module.elixir entity.name.class.elixir'
    ],
    settings: {
      foreground: PALETTE.BLUE
    }
  },
  {
    name: 'Elixir Functions',
    scope: 'source.elixir entity.name.function',
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'Elixir Constants',
    scope: [
      'source.elixir constant.other.symbol.elixir',
      'source.elixir constant.other.keywords.elixir'
    ],
    settings: {
      foreground: PALETTE.BLUE
    }
  },
  {
    name: 'Elixir String Punctuations',
    scope: 'source.elixir punctuation.definition.string',
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'Elixir',
    scope: [
      'source.elixir variable.other.readwrite.module.elixir',
      'source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir'
    ],
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'Elixir Binary Punctuations',
    scope: 'source.elixir .punctuation.binary.elixir',
    settings: {
      foreground: PALETTE.MAGENTA,
      fontStyle: ''
    }
  },
  {
    name: 'Closure Constant Keyword',
    scope: 'constant.keyword.clojure',
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'ID Attribute Name in HTML',
    scope: 'entity.other.attribute-name.id.html',
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'HTML Punctuation Definition Tag',
    scope: 'punctuation.definition.tag.html',
    settings: {
      foreground: '#6ae9f0'
    }
  },
  {
    name: 'HTML Doctype',
    scope: 'meta.tag.sgml.doctype.html',
    settings: {
      foreground: PALETTE.MAGENTA,
      fontStyle: ''
    }
  },
  {
    name: 'JavaScript Classes',
    scope: 'meta.class entity.name.type.class.js',
    settings: {
      foreground: '#ffcb8b'
    }
  },
  {
    name: 'JavaScript Method Declaration e.g. `constructor`',
    scope: 'meta.method.declaration storage.type.js',
    settings: {
      foreground: PALETTE.BLUE
    }
  },
  {
    name: 'JavaScript Terminator',
    scope: 'terminator.js',
    settings: {
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'JavaScript Meta Punctuation Definition',
    scope: 'meta.js punctuation.definition.js',
    settings: {
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'Entity Names in Code Documentations',
    scope: ['entity.name.type.instance.jsdoc', 'entity.name.type.instance.phpdoc'],
    settings: {
      foreground: '#5f7e97'
    }
  },
  {
    name: 'Other Variables in Code Documentations',
    scope: ['variable.other.jsdoc', 'variable.other.phpdoc'],
    settings: {
      foreground: '#78ccf0'
    }
  },
  {
    name: 'JavaScript module imports and exports',
    scope: [
      'variable.other.meta.import.js',
      'meta.import.js variable.other',
      'variable.other.meta.export.js',
      'meta.export.js variable.other'
    ],
    settings: {
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'JavaScript Variable Parameter Function',
    scope: 'variable.parameter.function.js',
    settings: {
      foreground: '#7986E7'
    }
  },
  {
    name: 'JavaScript[React] Variable Other Object',
    scope: [
      'variable.other.object.js',
      'variable.other.object.jsx',
      'variable.object.property.js',
      'variable.object.property.jsx'
    ],
    settings: {
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'JavaScript Variables',
    scope: ['variable.js', 'variable.other.js'],
    settings: {
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'JavaScript Entity Name Type',
    scope: ['entity.name.type.js', 'entity.name.type.module.js'],
    settings: {
      foreground: '#ffcb8b',
      fontStyle: ''
    }
  },
  {
    name: 'JavaScript Support Classes',
    scope: 'support.class.js',
    settings: {
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'JSON Property Names',
    scope: 'support.type.property-name.json',
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'JSON Support Constants',
    scope: 'support.constant.json',
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'JSON Property values (string)',
    scope: 'meta.structure.dictionary.value.json string.quoted.double',
    settings: {
      foreground: '#c789d6'
    }
  },
  {
    name: 'Strings in JSON values',
    scope: 'string.quoted.double.json punctuation.definition.string.json',
    settings: {
      foreground: '#80CBC4'
    }
  },
  {
    name: 'Specific JSON Property values like null',
    scope: 'meta.structure.dictionary.json meta.structure.dictionary.value constant.language',
    settings: {
      foreground: CUSTOM.NULL_RED
    }
  },
  {
    name: 'JavaScript Other Variable',
    scope: 'variable.other.object.js',
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'Markdown Headings',
    scope: [
      'markup.heading.markdown',
      'markup.heading.setext.1.markdown',
      'markup.heading.setext.2.markdown'
    ],
    settings: {
      foreground: '#82b1ff'
    }
  },
  {
    name: 'Markdown Italics',
    scope: 'markup.italic.markdown',
    settings: {
      foreground: PALETTE.MAGENTA,
      fontStyle: 'italic'
    }
  },
  {
    name: 'Markdown Bold',
    scope: 'markup.bold.markdown',
    settings: {
      foreground: PALETTE.YELLOW,
      fontStyle: 'bold'
    }
  },
  {
    name: 'Markdown Quote + others',
    scope: 'markup.quote.markdown',
    settings: {
      foreground: '#697098',
      fontStyle: ''
    }
  },
  {
    name: 'Markdown Raw Code + others',
    scope: 'markup.inline.raw.markdown',
    settings: {
      foreground: '#80CBC4'
    }
  },
  {
    name: 'Markdown Links',
    scope: ['markup.underline.link.markdown', 'markup.underline.link.image.markdown'],
    settings: {
      foreground: '#ff869a'
    }
  },
  {
    name: 'Markdown Link Title and Description',
    scope: ['string.other.link.title.markdown', 'string.other.link.description.markdown'],
    settings: {
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'Markdown Punctuation',
    scope: [
      'punctuation.definition.string.markdown',
      'punctuation.definition.string.begin.markdown',
      'punctuation.definition.string.end.markdown',
      'meta.link.inline.markdown punctuation.definition.string'
    ],
    settings: {
      foreground: '#82b1ff'
    }
  },
  {
    name: 'Markdown MetaData Punctuation',
    scope: ['punctuation.definition.metadata.markdown'],
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'Markdown List Punctuation',
    scope: ['beginning.punctuation.definition.list.markdown'],
    settings: {
      foreground: '#82b1ff'
    }
  },
  {
    name: 'Markdown Inline Raw String',
    scope: 'markup.inline.raw.string.markdown',
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'SCSS Variable',
    scope: [
      'variable.scss',
      'variable.sass',
      'variable.parameter.url.scss',
      'variable.parameter.url.sass'
    ],
    settings: {
      foreground: PALETTE.YELLOW
    }
  },
  {
    name: 'Variables in SASS At-Rules',
    scope: ['source.css.scss meta.at-rule variable', 'source.css.sass meta.at-rule variable'],
    settings: {
      foreground: PALETTE.BLUE
    }
  },
  {
    name: 'Variables in SASS At-Rules',
    scope: ['source.css.scss meta.at-rule variable', 'source.css.sass meta.at-rule variable'],
    settings: {
      foreground: '#bec5d4'
    }
  },
  {
    name: 'Attribute Name for SASS',
    scope: [
      'meta.attribute-selector.scss entity.other.attribute-name.attribute',
      'meta.attribute-selector.sass entity.other.attribute-name.attribute'
    ],
    settings: {
      foreground: '#F78C6C'
    }
  },
  {
    name: 'Tag names in SASS',
    scope: ['entity.name.tag.scss', 'entity.name.tag.sass'],
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'SASS Keyword Other Unit',
    scope: ['keyword.other.unit.scss', 'keyword.other.unit.sass'],
    settings: {
      foreground: PALETTE.YELLOW_BRIGHT
    }
  },
  {
    name: 'TypeScript[React] Variables and Object Properties',
    scope: [
      'variable.other.readwrite.alias.ts',
      'variable.other.readwrite.alias.tsx',
      'variable.other.readwrite.ts',
      'variable.other.readwrite.tsx',
      'variable.other.object.ts',
      'variable.other.object.tsx',
      'variable.object.property.ts',
      'variable.object.property.tsx',
      'variable.other.ts',
      'variable.other.tsx',
      'variable.tsx',
      'variable.ts'
    ],
    settings: {
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'TypeScript[React] Entity Name Types',
    scope: ['entity.name.type.ts', 'entity.name.type.tsx'],
    settings: {
      foreground: '#ffcb8b'
    }
  },
  {
    name: 'TypeScript[React] Node Classes',
    scope: ['support.class.node.ts', 'support.class.node.tsx'],
    settings: {
      foreground: PALETTE.BLUE
    }
  },
  {
    name: 'TypeScript[React] Entity Name Types as Parameters',
    scope: [
      'meta.type.parameters.ts entity.name.type',
      'meta.type.parameters.tsx entity.name.type'
    ],
    settings: {
      foreground: '#5f7e97'
    }
  },
  {
    name: 'TypeScript[React] Import/Export Punctuations',
    scope: [
      'meta.import.ts punctuation.definition.block',
      'meta.import.tsx punctuation.definition.block',
      'meta.export.ts punctuation.definition.block',
      'meta.export.tsx punctuation.definition.block'
    ],
    settings: {
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'TypeScript[React] Punctuation Decorators',
    scope: ['meta.decorator punctuation.decorator.ts', 'meta.decorator punctuation.decorator.tsx'],
    settings: {
      foreground: PALETTE.BLUE
    }
  },
  {
    name: 'TypeScript[React] Punctuation Decorators',
    scope: 'meta.tag.js meta.jsx.children.tsx',
    settings: {
      foreground: PALETTE.BLUE
    }
  },
  {
    name: 'YAML Entity Name Tags',
    scope: 'entity.name.tag.yaml',
    settings: {
      foreground: PALETTE.CYAN_BRIGHT
    }
  },
  {
    name: 'JavaScript Variable Other ReadWrite',
    scope: ['variable.other.readwrite.js', 'variable.parameter'],
    settings: {
      foreground: '#d7dbe0'
    }
  },
  {
    name: 'Support Class Component',
    scope: ['support.class.component.js', 'support.class.component.tsx'],
    settings: {
      foreground: '#f78c6c',
      fontStyle: ''
    }
  },
  {
    name: 'Text nested in React tags',
    scope: ['meta.jsx.children', 'meta.jsx.children.js', 'meta.jsx.children.tsx'],
    settings: {
      foreground: PALETTE.FOREGROUND
    }
  },
  {
    name: 'TypeScript Classes',
    scope: 'meta.class entity.name.type.class.tsx',
    settings: {
      foreground: '#ffcb8b'
    }
  },
  {
    name: 'TypeScript Entity Name Type',
    scope: ['entity.name.type.tsx', 'entity.name.type.module.tsx'],
    settings: {
      foreground: '#ffcb8b'
    }
  },
  {
    name: 'TypeScript Method Declaration e.g. `constructor`',
    scope: ['meta.method.declaration storage.type.ts', 'meta.method.declaration storage.type.tsx'],
    settings: {
      foreground: PALETTE.BLUE
    }
  },
  {
    name: 'normalize font style of certain components',
    scope: [
      'meta.property-list.css meta.property-value.css variable.other.less',
      'meta.property-list.scss variable.scss',
      'meta.property-list.sass variable.sass',
      'meta.brace',
      'keyword.operator.operator',
      'keyword.operator.or.regexp',
      'keyword.operator.expression.in',
      'keyword.operator.relational',
      'keyword.operator.assignment',
      'keyword.operator.comparison',
      'keyword.operator.type',
      'keyword.operator',
      'keyword',
      'punctuation.definintion.string',
      'punctuation',
      'variable.other.readwrite.js',
      'storage.type',
      'source.css',
      'string.quoted'
    ],
    settings: {
      fontStyle: ''
    }
  }
];
