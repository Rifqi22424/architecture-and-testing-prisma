// const request = require('supertest');
// const app = require('../app'); // Import aplikasi Express
// const { generateToken } = require('../middlewares/jwtMiddleware'); // Helper untuk token

// // Simulasi token autentikasi
// const token = generateToken({ id: 1, email: 'johndoe@example.com' });

// describe('User Controller', () => {
//   describe('GET /users', () => {
//     it('should get all users', async () => {
//       const response = await request(app)
//         .get('/users')
//         .set('Authorization', `Bearer ${token}`);

//       expect(response.status).toBe(200);
//       expect(response.body.message).toBe('get all users success');
//       expect(response.body.data).toHaveProperty('users');
//     });
//   });

//   describe('GET /users/:uuid', () => {
//     it('should get user by uuid', async () => {
//       const response = await request(app)
//         .get('/users/12345-uuid')
//         .set('Authorization', `Bearer ${token}`);

//       expect(response.status).toBe(200);
//       expect(response.body.message).toBe('get user by uuid success');
//       expect(response.body.user).toHaveProperty('name');
//       expect(response.body.user).toHaveProperty('email');
//     });

//     it('should return 404 if user is not found', async () => {
//       const response = await request(app)
//         .get('/users/nonexistent-uuid')
//         .set('Authorization', `Bearer ${token}`);

//       expect(response.status).toBe(404);
//       expect(response.body.message).toBe('User not found');
//     });
//   });

//   describe('PUT /users/:uuid', () => {
//     it('should update user successfully', async () => {
//       const response = await request(app)
//         .put('/users/12345-uuid')
//         .set('Authorization', `Bearer ${token}`)
//         .send({ name: 'Updated Name', email: 'updated@example.com' });

//       expect(response.status).toBe(200);
//       expect(response.body.message).toBe('update user success');
//       expect(response.body.data.updatedUser).toHaveProperty('name', 'Updated Name');
//     });
//   });

//   describe('DELETE /users/:uuid', () => {
//     it('should soft delete a user successfully', async () => {
//       const response = await request(app)
//         .delete('/users/12345-uuid')
//         .set('Authorization', `Bearer ${token}`);

//       expect(response.status).toBe(200);
//       expect(response.body.message).toBe('soft delete success');
//     });

//     it('should hard delete a user successfully', async () => {
//       const response = await request(app)
//         .delete('/users/12345-uuid/hard')
//         .set('Authorization', `Bearer ${token}`);

//       expect(response.status).toBe(200);
//       expect(response.body.message).toBe('hard delete success');
//     });
//   });
// });
