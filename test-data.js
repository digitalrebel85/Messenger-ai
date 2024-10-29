const { User, BusinessInfo, Message } = require('./src/models');
const bcrypt = require('bcryptjs');

async function createTestData() {
  try {
    // Create test user
    const user = await User.create({
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      role: 'agent'
    });

    // Create business info
    await BusinessInfo.create({
      companyName: 'Test Company',
      industry: 'Technology',
      productsServices: 'Software Development',
      description: 'We create amazing software solutions',
      contactEmail: 'contact@testcompany.com',
      phoneNumber: '+1234567890',
      UserId: user.id
    });

    // Create some test messages
    await Message.create({
      content: 'Hello, this is a test message',
      channel: 'sms',
      direction: 'outbound',
      phoneNumber: '+1234567890',
      status: 'delivered',
      UserId: user.id
    });

    console.log('Test data created successfully');
    console.log('\nLogin credentials:');
    console.log('Username: testuser');
    console.log('Password: password123');
  } catch (error) {
    console.error('Error creating test data:', error);
  } finally {
    process.exit();
  }
}

// Wait a bit for the database to be ready
setTimeout(createTestData, 2000);