-- USER
create table user(
    id int primary key AUTO_INCREMENT,
    name varchar(250),
    email varchar(250),
    password varchar(250),
    role varchar(250),
    user_seed varchar(250),
    nonce integer,
    UNIQUE(email)
);

insert into user (name, email, password, role, user_seed, nonce) values ('admin', 'admin@admin.admin', 'admin', 'admin', 'd0b9adf6cf697300ab98361f95103b2ac3dfe37353e2a9aef240c9c992358d3e', 0);

-- WEAPONS
create table weapon(
    id int primary key AUTO_INCREMENT,
    name varchar(250) NOT NULL
);

-- SKIN
create table skin(
    id int primary key AUTO_INCREMENT,
    name varchar(250) NOT NULL,
    img varchar(250),
    quality varchar(250),
    price varchar(250),
    weaponId integer NOT NULL
);

-- CASE
create table box(
    id int primary key AUTO_INCREMENT,
    name varchar(250) NOT NULL,
    img varchar(250),
    price varchar(250),
    fee integer NOT NULL,
    items JSON
);

create table history(
    id_user int,
    server_seed varchar(250),
    user_seed varchar(250),
    nonce integer,
    hash varchar(250),
    item JSON
);