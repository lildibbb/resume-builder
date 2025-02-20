import {
  pgTable,
  serial,
  varchar,
  timestamp,
  date,
  integer,
  json,
  numeric,
  pgEnum,
  decimal,
} from 'drizzle-orm/pg-core';

// Define the user authentication table schema
export const user_authentications = pgTable('user_authentications', {
  userID: serial('userID').primaryKey(),
  email: varchar('email', { length: 100 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  role: varchar('role', { length: 50 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  contactDetails: varchar('contactDetails', { length: 255 }).notNull(),
  avatar: varchar('avatar', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
