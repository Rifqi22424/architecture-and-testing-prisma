const request = require('supertest');
const app = require('../index');
const prisma = require('../prisma/client');

beforeAll(async () => {
  await prisma.user.deleteMany(); // Clear the user table before testing
});

afterAll(async () => {
  await prisma.$disconnect(); // Close Prisma connection
});

describe('User API Endpoints', () => {
  let userId;

  test('POST /users - Create a new user', async () => {
    const response = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'john.doe@example.com',
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    userId = response.body.id;
  });

  test('GET /users - Get all users', async () => {
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('GET /users/:id - Get a user by ID', async () => {
    const response = await request(app).get(`/users/${userId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', userId);
  });

  test('PUT /users/:id - Update a user', async () => {
    const response = await request(app).put(`/users/${userId}`).send({
      name: 'John Updated',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('John Updated');
  });

  test('DELETE /users/:id - Delete a user', async () => {
    const response = await request(app).delete(`/users/${userId}`);
    expect(response.statusCode).toBe(204);
  });
});
