// src/mocks/handlers.js
import { http, HttpResponse } from 'msw';
import CryptoJS from 'crypto-js';

const secretKey = 'aespa'; //Must match the frontend key

export const handlers = [
  http.post('http://localhost:3000/login', async ({ request }) => {
    const { data } = await request.json();

    // Decrypt the data
    const bytes = CryptoJS.AES.decrypt(data, secretKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    const { username, password } = decryptedData;

    // Define valid users
    const validUsers = [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'doctor', password: 'doctor123', role: 'doctor' },
      { username: 'patient', password: 'patient123', role: 'patient' },
    ];

    // Check if the user exists
    const user = validUsers.find(
      (u) => u.username === username && u.password === password,
    );

    if (user) {
      return HttpResponse.json({ message: 'Login successful', role: user.role });
    } else {
      return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }
  }),
];