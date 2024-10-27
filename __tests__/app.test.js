const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello, CI/CD Pipeline!');
});

describe('GET /', () => {
  it('should return Hello, CI/CD Pipeline!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, CI/CD Pipeline!');
    expect(response.statusCode).toBe(200);
  });
});
