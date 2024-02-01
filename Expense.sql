CREATE TABLE center.users (
  id VARCHAR(255) PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT null UNIQUE,
  password TEXT NOT null);


insert into center.users (id, username, password) values ('8b79dfa2-368d-4f68-8eed-9cec6dfb8e32', 'admin', '$2a$10$V3bsMdBvjj65TGTD6Pj1/OcUyj6PxnIk4nNoG1NZglwtNWgmMvgTu');

CREATE TABLE center.expenses (
    id VARCHAR(36) PRIMARY key UNIQUE,
    description VARCHAR(191) NOT NULL,
    date DATE NOT NULL,
    username VARCHAR(255) NOT NULL,
    value DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);


insert into center.expenses (id, description,date, user, value) values ("85edfaac-1573-4f93-aeff-6f82f7112313", "food", "01/01/2023", "admin", 10);