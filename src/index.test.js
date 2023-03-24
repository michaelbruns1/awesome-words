import awesomeWords from '.'

test('says hello world', () => (
  expect(awesomeWords()).toBe('hello universe')
))