const UserService = require('../src/services/user.service');

test('Service should get all data from url', async () => {
  const service = new UserService();
  const content = await service.getAll();
  expect(Array.isArray(content)).toBe(true);
  expect(content.length).toBeGreaterThan(0);
});

test('Service should filter by properties', async() => {
  const service = new UserService();
  const content = await service.getFiltered('name', 'Britney');
  expect(content[0].name).toBe('Britney');
});

test('Service should get one filtered by properties', async() => {
  const service = new UserService();
  const content = await service.getOneFiltered('name', 'Britney');
  expect(content.name).toBe('Britney');
});
