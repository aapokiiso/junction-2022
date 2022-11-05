SET NAMES utf8;
CREATE TABLE links(
   id        INTEGER PRIMARY KEY AUTO_INCREMENT,
   source VARCHAR(200) NOT NULL
  ,target VARCHAR(200) NOT NULL
  ,diameter INTEGER
);
INSERT INTO links(source,target,diameter) VALUES ('St1','1',100);
INSERT INTO links(source,target,diameter) VALUES ('1','2',39);
INSERT INTO links(source,target,diameter) VALUES ('1','5',61);
INSERT INTO links(source,target,diameter) VALUES ('2','Konetalo',5);
INSERT INTO links(source,target,diameter) VALUES ('2','3',10);
INSERT INTO links(source,target,diameter) VALUES ('3','Kandikeskus',26);
INSERT INTO links(source,target,diameter) VALUES ('3','4',5);
INSERT INTO links(source,target,diameter) VALUES ('4','Nanotalo',8);
INSERT INTO links(source,target,diameter) VALUES ('5','6',61);
INSERT INTO links(source,target,diameter) VALUES ('6','Kvarkki',9);
INSERT INTO links(source,target,diameter) VALUES ('6','7',52);
INSERT INTO links(source,target,diameter) VALUES ('7','Sähkötalo',14);
INSERT INTO links(source,target,diameter) VALUES ('7','8',38);
INSERT INTO links(source,target,diameter) VALUES ('8','Raksatalo',8);
INSERT INTO links(source,target,diameter) VALUES ('8','9',30);
INSERT INTO links(source,target,diameter) VALUES ('9','10',30);
INSERT INTO links(source,target,diameter) VALUES ('10','11',14);
INSERT INTO links(source,target,diameter) VALUES ('10','15',16);
INSERT INTO links(source,target,diameter) VALUES ('11','OK20',2);
INSERT INTO links(source,target,diameter) VALUES ('11','12',12);
INSERT INTO links(source,target,diameter) VALUES ('12','Täffä',2);
INSERT INTO links(source,target,diameter) VALUES ('12','13',10);
INSERT INTO links(source,target,diameter) VALUES ('13','Dipoli',7);
INSERT INTO links(source,target,diameter) VALUES ('13','14',3);
INSERT INTO links(source,target,diameter) VALUES ('14','A Blanc',3);
INSERT INTO links(source,target,diameter) VALUES ('15','JMT1',2);
INSERT INTO links(source,target,diameter) VALUES ('15','16',14);
INSERT INTO links(source,target,diameter) VALUES ('16','OK18',3);
INSERT INTO links(source,target,diameter) VALUES ('16','17',11);
INSERT INTO links(source,target,diameter) VALUES ('17','Teekkarimuseo',3);
INSERT INTO links(source,target,diameter) VALUES ('17','18',8);
INSERT INTO links(source,target,diameter) VALUES ('18','JMT6',2);
INSERT INTO links(source,target,diameter) VALUES ('18','19',6);
INSERT INTO links(source,target,diameter) VALUES ('19','JMT11',6);
