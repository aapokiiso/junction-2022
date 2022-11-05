SET NAMES utf8;
CREATE TABLE nodes(
   id        INTEGER PRIMARY KEY AUTO_INCREMENT
  ,type      VARCHAR(200) NOT NULL
  ,power     INTEGER NOT NULL DEFAULT 20
  ,name      VARCHAR(200) NOT NULL
  ,latitude  VARCHAR(200) NOT NULL
  ,longitude VARCHAR(200) NOT NULL
  ,mapboxid  INTEGER
  ,deltaT    INTEGER
);INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('producer','St1',60.18803446,24.82800426,24408439,60);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','Kandikeskus',60.18653275,24.82832467,4148,50);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','Nanotalo',60.18698854,24.82484653,11159678,38);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','Konetalo',60.18723004,24.82669374,156903276,35);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','Sähkötalo',60.18901735,24.83140802,24342454,45);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','Kvarkki',60.18824527,24.8301013,1402504,40);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','Raksatalo',60.18732835,24.8315244,7579330,38);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','OK20',60.18679975,24.83373056,24334160,30);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','Täffä',60.18607292,24.83297745,4252953,30);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','Dipoli',60.18512581,24.83247243,4252954,40);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','A Blanc',60.18468969,24.83032829,7589907,36);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','OK18',60.18809503,24.83551164,4259264,45);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','JMT1',60.18691892,24.83484714,24334123,45);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','Teekkarimuseo',60.18732858,24.83637993,24333970,55);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','JMT6',60.18849146,24.8373634,24334231,40);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('consumer','JMT11',60.18938122,24.83902024,24334286,45);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','1',60.18780909,24.8285705,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','2',60.1870675,24.82765256,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','3',60.18676515,24.82717064,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','4',60.1873185,24.82508232,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','5',60.18868758,24.82953434,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','6',60.18857349,24.83054407,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','7',60.18856208,24.8316915,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','8',60.18847081,24.83296514,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','9',60.18843088,24.83372244,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','10',60.18770641,24.83319462,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','11',60.18698763,24.83287334,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','12',60.18617185,24.83229963,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','13',60.18532183,24.8311063,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','14',60.1847228,24.83080797,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','15',60.18766078,24.83527146,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','16',60.18764937,24.83566158,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','17',60.18763796,24.83643036,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','18',60.18843089,24.83794496,NULL,NULL);
INSERT INTO nodes(type,name,latitude,longitude,mapboxid,deltaT) VALUES ('junction','19',60.18948619,24.83871373,NULL,NULL);
