exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },

<<<<<<< HEAD
    // For reference, GitHub liits usernames to 39 characters.
=======
    // For reference, GitHub limits usernames to 39 characters.
>>>>>>> 93eb7a1 (feat: hide migrator logs, add runPendingMigrations method to orchestrator and add migration to create users table)
    username: {
      type: "varchar(30)",
      notull: true,
      unique: true,
    },

    email: {
      type: "varchar(254)",
      notNull: true,
      unique: true,
    },

    password: {
<<<<<<< HEAD
      type: "varchar(72)",
=======
      type: "varchar(60)",
>>>>>>> 93eb7a1 (feat: hide migrator logs, add runPendingMigrations method to orchestrator and add migration to create users table)
      notNull: true,
    },

    created_at: {
      type: "timestamptz",
<<<<<<< HEAD
      default: pgm.func("now()"),
    },

    update_at: {
      type: "timestamptz",
      default: pgm.func("now()"),
=======
      notNull: true,
      default: pgm.func("timezone('utc', now())"),
    },

    updated_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("timezone('utc', now())"),
>>>>>>> 93eb7a1 (feat: hide migrator logs, add runPendingMigrations method to orchestrator and add migration to create users table)
    },
  });
};

exports.down = false;
