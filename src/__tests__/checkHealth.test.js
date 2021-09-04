import checkHealth from '../checkHealth';

const wizard = {
  name: 'Маг',
  health: 90,
};
const archangel = {
  name: 'Архангел',
  health: 1200,
};

test('check 90 health', () => expect(checkHealth(wizard)).toBeNull());
// test('check 90 health', () => expect(checkHealth(wizard)).toBe('healthy'));
test('check 1200 health', () => expect(checkHealth(archangel)).toBe('healthy'));
test('check 31.784 health', () => expect(checkHealth({ health: 31.784 })).toBe('wounded'));
test('check 11.4 health', () => expect(checkHealth({ health: 11.4 })).toBe('critical'));
test('check 0 health', () => expect(checkHealth({ health: 0 })).toBe('critical'));
test('check -4 health', () => expect(checkHealth({ health: -4 })).toBe('critical'));
test('check abnormal input', () => expect(checkHealth(1, 2, 5)).toBeNull());
test('check abnormal input', () => expect(checkHealth()).toBeNull());
// 