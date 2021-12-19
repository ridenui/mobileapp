export function settingsTextBuilder(value: number, unit?: string) {
  if (value === 0) {
    return 'Disabled';
  }

  return value + (unit ? ` ${unit}` : '');
}
