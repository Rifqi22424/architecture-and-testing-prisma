// const request = require('supertest');
// const app = require('../app'); // Import aplikasi Express

// describe('Auth Controller', () => {
//   describe('POST /auth/register', () => {
//     it('should register a new user successfully', async () => {
//       const response = await request(app)
//         .post('/auth/register')
//         .send({
//           name: 'JohnDoe123.',
//           email: 'johndoe@example.com',
//           password: 'password123',
//         });

//       expect(response.status).toBe(201);
//       expect(response.body.message).toBe('register success');
//       expect(response.body.data).toHaveProperty('user');
//       expect(response.body.data).toHaveProperty('token');
//     });

//     it('should return 400 if email is invalid', async () => {
//       const response = await request(app)
//         .post('/auth/register')
//         .send({
//           name: 'John Doe',
//           email: 'invalidemail',
//           password: 'password123',
//         });

//       expect(response.status).toBe(400);
//       expect(response.body.message).toBe('Invalid email');
//     });
//   });

//   describe('POST /auth/login', () => {
//     it('should log in an existing user successfully', async () => {
//       const response = await request(app)
//         .post('/auth/login')
//         .send({
//           email: 'johndoe@example.com',
//           password: 'password123',
//         });

//       expect(response.status).toBe(200);
//       expect(response.body.message).toBe('login success');
//       expect(response.body.data).toHaveProperty('user');
//       expect(response.body.data).toHaveProperty('token');
//     });

//     it('should return 401 if credentials are invalid', async () => {
//       const response = await request(app)
//         .post('/auth/login')
//         .send({
//           email: 'johndoe@example.com',
//           password: 'wrongpassword',
//         });

//       expect(response.status).toBe(401);
//       expect(response.body.message).toBe('Invalid credentials');
//     });
//   });
// });
