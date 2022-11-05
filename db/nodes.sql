SET NAMES utf8;
CREATE TABLE nodes(
   id        INTEGER PRIMARY KEY AUTO_INCREMENT
  ,type      VARCHAR(200) NOT NULL
  ,power     INTEGER NOT NULL
  ,name      VARCHAR(200) NOT NULL
  ,latitude  VARCHAR(200) NOT NULL
  ,longitude VARCHAR(200) NOT NULL

);
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('producer',0,'St1','60,18803446','24,82800426');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'Kandikeskus','60,18653275','24,82832467');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'Nanotalo','60,18698854','24,82484653');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'Konetalo','60,18723004','24,82669374');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'Sähkötalo','60,18901735','24,83140802');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'Kvarkki','60,18824527','24,8301013');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'Raksatalo','60,18732835','24,8315244');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'OK20','60,18679975','24,83373056');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'Täffä','60,18607292','24,83297745');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'Dipoli','60,18512581','24,83247243');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'A Blanc','60,18468969','24,83032829');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'OK18','60,18809503','24,83551164');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'JMT1','60,18691892','24,83484714');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'Teekkarimuseo','60,18732858','24,83637993');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'JMT6','60,18849146','24,8373634');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('consumer',0,'JMT11','60,18938122','24,83902024');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'1','60,18780909','24,8285705');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'2','60,1870675','24,82765256');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'3','60,18676515','24,82717064');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'4','60,1873185','24,82508232');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'5','60,18868758','24,82953434');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'6','60,18857349','24,83054407');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'7','60,18856208','24,8316915');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'8','60,18847081','24,83296514');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'9','60,18843088','24,83372244');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'10','60,18770641','24,83319462');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'11','60,18698763','24,83287334');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'12','60,18617185','24,83229963');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'13','60,18532183','24,8311063');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'14','60,1847228','24,83080797');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'15','60,18766078','24,83527146');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'16','60,18764937','24,83566158');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'17','60,18763796','24,83643036');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'18','60,18843089','24,83794496');
INSERT INTO nodes(type,power,name,latitude,longitude) VALUES ('junction',0,'19','60,18948619','24,83871373');
