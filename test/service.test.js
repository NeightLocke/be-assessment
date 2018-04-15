const Service = require('../src/core/service');

// Service clients
test('Service should get all data from clients url', async () => {
  const service = new Service('http://www.mocky.io/v2/5808862710000087232b75ac', 'clients');
  const content = await service.getAll();
  expect(Array.isArray(content)).toBe(true);
  expect(content.length).toBeGreaterThan(0);
});

test('Service should filter by properties', async() => {
  const service = new Service('http://www.mocky.io/v2/5808862710000087232b75ac', 'clients');
  const content = await service.getFiltered('name', 'Britney');
  expect(content[0].name).toBe('Britney');
});

test('Service should get one filtered by properties', async() => {
  const service = new Service('http://www.mocky.io/v2/5808862710000087232b75ac', 'clients');
  const content = await service.getOneFiltered('name', 'Britney');
  expect(content.name).toBe('Britney');
});

// Service Policies
test('Service should get all data from policies url', async () => {
  const service = new Service('http://www.mocky.io/v2/580891a4100000e8242b75c5', 'policies');
  const content = await service.getAll();
  expect(Array.isArray(content)).toBe(true);
  expect(content.length).toBeGreaterThan(0);
});

test('Service should get one filtered by properties', async() => {
  const service = new Service('http://www.mocky.io/v2/580891a4100000e8242b75c5', 'policies');
  const content = await service.getOneFiltered('id', '0eba1179-6155-41b5-bdd8-f80e1ac94cab');
  expect(content.clientId).toBe('e8fd159b-57c4-4d36-9bd7-a59ca13057bb');
});
