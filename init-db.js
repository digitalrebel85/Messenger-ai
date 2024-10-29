const { sequelize, User } = require('./src/models');
const bcrypt = require('bcryptjs');

async function initDatabase() {
  try {
    // Sync database and create tables
    await sequelize.sync({ force: true });
    console.log('Database synced successfully');

    // Create test user
    const hashedPassword = await bcrypt.hash('password123', 10);
    await User.create({
      username: 'testuser',
      email: 'test@example.com',
      password: hashedPassword,
      role: 'agent'
    });

    console.log('\nTest user created successfully');
    console.log('\nLogin credentials:');
    console.log('Username: testuser');
    console.log('Password: password123');

  } catch (error) {
    console.error('Database initialization failed:', error);
  } finally {
    process.exit();
  }
}

initDatabase();