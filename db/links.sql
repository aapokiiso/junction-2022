SET NAMES utf8;
CREATE TABLE links(
   id        INTEGER PRIMARY KEY AUTO_INCREMENT,
   source VARCHAR(200) NOT NULL
  ,target VARCHAR(200) NOT NULL
  ,diameter INTEGER
  ,deltaT   INTEGER  NOT NULL
);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('St1','1',100,60);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('1','2',39,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('1','5',61,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('2','Konetalo',5,35);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('2','3',10,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('3','Kandikeskus',26,50);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('3','4',5,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('4','Nanotalo',8,38);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('5','6',61,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('6','Kvarkki',9,40);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('6','7',52,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('7','Sähkötalo',14,45);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('7','8',38,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('8','Raksatalo',8,38);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('8','9',30,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('9','10',30,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('10','11',14,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('10','15',16,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('11','OK20',2,30);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('11','12',12,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('12','Täffä',2,30);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('12','13',10,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('13','Dipoli',7,40);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('13','14',3,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('14','A Blanc',3,36);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('15','JMT1',2,45);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('15','16',14,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('16','OK18',3,45);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('16','17',11,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('17','Teekkarimuseo',3,55);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('17','18',8,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('18','JMT6',2,40);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('18','19',6,0);
INSERT INTO links(source,target,diameter,deltaT) VALUES ('19','JMT11',6,45);
