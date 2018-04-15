const PolicyService = require('../src/services/policy.service');

test('PolicyService should get all data from url', async () => {
  const service = new PolicyService();
  const content = await service.getAll();
  expect(Array.isArray(content)).toBe(true);
  expect(content.length).toBeGreaterThan(0);
});

test('PolicyService should filter by properties', async() => {
  const service = new PolicyService();
  const content = await service.getFiltered('email', 'inesblankenship@quotezart.com');
  expect(content[0].id).toBe('64cceef9-3a01-49ae-a23b-3761b604800b');
  expect(content[1].id).toBe('7b624ed3-00d5-4c1b-9ab8-c265067ef58b');
  expect(content[2].id).toBe('56b415d6-53ee-4481-994f-4bffa47b5239');
});

test('PolicyService should get one filtered by properties', async() => {
  const service = new PolicyService();
  const content = await service.getOneFiltered('id', '0eba1179-6155-41b5-bdd8-f80e1ac94cab');
  expect(content.clientId).toBe('e8fd159b-57c4-4d36-9bd7-a59ca13057bb');
});