import type { IconProps } from '@atoms/Icon/Icon';

export function caseModelToIconName(caseModel: string): IconProps['type'] {
  const parts = caseModel.split('-');
  const casedParts = parts.map((part, index) => {
    if (index === 0) {
      return part.toLowerCase();
    }
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  });
  const joined = casedParts.join('');
  let correctName = joined;
  if (!isNaN(Number.parseInt(joined.charAt(0), 10))) {
    correctName = 'Svg' + correctName.charAt(0) + correctName.charAt(1).toUpperCase() + correctName.slice(2);
  }
  console.log('Converting caseModel: ' + caseModel + ' => ' + correctName);
  return correctName as IconProps['type'];
}
