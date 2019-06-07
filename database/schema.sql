CREATE TABLE restaurants (
  id                serial primary key unique,
  name              varchar(256),
  location          varchar(256), 
  noise             varchar(10),
  recommendpercent  int,
  averageoverall    numeric,
  averageservice    numeric,
  averageambience   numeric,
  averagefood       numeric,
  valuerating       numeric
);

CREATE TABLE diners (
  id            serial primary key unique,
  firstname     varchar(256),
  lastname      varchar(256),
  city          varchar(256),
  avatarcolor   varchar(10),
  isvip         boolean,
  totalreviews  int
);

CREATE TABLE reviews (
  id              serial primary key unique,
  restaurant      int,
  diner           int,
  text            varchar(1000),
  date            date,
  overall         int,
  food            int,
  service         int,
  ambience        int,
  wouldrecommend  boolean,
  tags            varchar(256),
  foreign key (diner) references diners(id),
  foreign key (restaurant) references restaurants(id)
);