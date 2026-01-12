# Database Installation & Setup

## Prerequisites
- Node.js installed
- PostgreSQL/MySQL database server running

## Installation Steps

1. **Install dependencies**
    ```bash
    npm install sequelize
    npm install pg pg-hstore  # for PostgreSQL
    # OR
    npm install mysql2        # for MySQL
    ```

2. **Configure database connection**
    - Update database credentials in your config file
    - Set environment variables for DB_HOST, DB_USER, DB_PASSWORD, DB_NAME

3. **Run migrations (if applicable)**
    ```bash
    npx sequelize-cli db:migrate
    ```

4. **Sync models** (development only)
    ```javascript
    const db = require('./models');
    db.sequelize.sync();
    ```

## Models Structure
- `user.js` - User entity model
- `role.js` - Role entity model  
- `user_role.js` - User-Role association (many-to-many)
- `index.js` - Model initialization and associations