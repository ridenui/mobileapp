const path = require('path');

function indexTemplate(filePaths) {
  const iconNames = [];
  const exportEntries = [];

  exportEntries.push(
    ...filePaths.map((filePath) => {
      const basename = path.basename(filePath, path.extname(filePath));
      console.log(basename);
      const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
      iconNames.push(exportName);

      return `import ${exportName} from './${basename.charAt(0).toUpperCase() + basename.slice(1)}';`;
    }),
  );

  exportEntries.push('');

  exportEntries.push(`export default {
      ${iconNames.join(',\n  ')},
       };`);
  exportEntries.push('');

  exportEntries.push(`export {
  ${iconNames.join(',\n  ')},
};`);
  exportEntries.push('');

  const iconTypesStringList = iconNames.map((iconName) => `'${iconName}'`).join(',\n  ');
  exportEntries.push(`export const IconTypes = [
  ${iconTypesStringList},
];`);
  exportEntries.push('');

  return exportEntries.join('\n');
}

module.exports = indexTemplate;
