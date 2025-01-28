-- USE `plusmed_db`;

-- dummy data
-- Doc

insert into doctors (AVATAR_PATH, BIRTH_DATE  ,DESCRIPTION ,EMAIL ,NAME ,PASSWORD ,PESEL ,PHONE ,SPECIALIZATION ,SURNAME, role ) values('kowalski.jpg', '1984-02-13', 'descr', 'mail5', 'Krzysztof', '84021351671', 'pesel','654987123','Internista', 'Kowalski', 'doctor');
insert into doctors (AVATAR_PATH, BIRTH_DATE  ,DESCRIPTION ,EMAIL ,NAME ,PASSWORD ,PESEL ,PHONE ,SPECIALIZATION ,SURNAME, role ) values('nowak.jpg', '1985-05-01', 'descr', 'mail6', 'Adam', 'pass', '85050182739','123456789','Internista', 'Nowak', 'doctor');
insert into doctors (AVATAR_PATH, BIRTH_DATE  ,DESCRIPTION ,EMAIL ,NAME ,PASSWORD ,PESEL ,PHONE ,SPECIALIZATION ,SURNAME, role ) values('michalik.jpg', '1970-11-23', 'descr', 'mail7', 'Jadwiga', 'pass', '70112364268','645879213','Neurolog', 'Michalik', 'doctor');

-- User

insert into users (address, avatar_path, birth_date, chronic_diseases, email, gender, name, password,pesel, phone, surname, role) values('Sienkiewicza 63/14 Łódź 94-212', 'sikorski.jpg','2001-01-11', 'Alergia', 'mail1', 'm', 'Arkadiusz', 'pass', '01211178474', '600125974', 'Sikorski', 'user');
insert into users (address, avatar_path, birth_date, chronic_diseases, email, gender, name, password,pesel, phone, surname, role) values('Łódzka 12 Tuszyn 95-080', 'czerwinska.jpg','1998-04-07', 'brak', 'mail2', 'k', 'Aleksandra', 'pass', '98040711349', '798459781', 'Czerwińska', 'user');
insert into users (address, avatar_path, birth_date, chronic_diseases, email, gender, name, password,pesel, phone, surname, role) values('Wschodnia 24/10 Zgierz 92-021', 'wroblewski.jpg','2001-08-30', ' Astma', 'mail3', 'm', 'Marcel', 'pass', '01283082653', '500149988', 'Wróblewski', 'user');
insert into users (address, avatar_path, birth_date, chronic_diseases, email, gender, name, password,pesel, phone, surname, role) values('Bandurskiego 33/14 Łódź 94-045', 'kucharska.jpg','1994-12-30', ' Padaczka', 'mail4', 'k', 'Lidia', 'pass', '94123039641', '658978145', 'Kucharska', 'user');

-- Reception

insert into reception (name, surname, phone, email, password, avatar_Path, role) values ('Janusz' , 'Januszewski' , '123789456', 'mail10', 'pass','januszewski.jpg','reception');

-- Appointments

insert into appointments (date_Time, diagnosis, price, recommendations,type, user_Id,doctor_Id) values('2000-08-11 10:15:00' , 'diagnosis' , 100 , 'recommendation' , 15 , 1 , 1);
insert into appointments (date_Time, diagnosis, price, recommendations,type, user_Id,doctor_Id) values('2000-08-11 10:30:00' , 'diagnosis2' , 100 , 'recommendation2' , 15 , 2 , 1);
insert into appointments (date_Time, diagnosis, price, recommendations,type, user_Id,doctor_Id) values('2021-08-12 11:00:00' , 'diagnosis' , 100 , 'recommendation' , 15 , 3 , 1);
insert into appointments (date_Time, diagnosis, price, recommendations,type, user_Id,doctor_Id) values('2021-08-12 11:15:00' , 'diagnosis2' , 100 , 'recommendation2' , 15 , 4 , 1);
insert into appointments (date_Time, diagnosis, price, recommendations,type, user_Id,doctor_Id) values('2000-08-18 09:00:00' , 'diagnosis' , 100 , 'recommendation' , 30 , 1 , 2);
insert into appointments (date_Time, diagnosis, price, recommendations,type, user_Id,doctor_Id) values('2000-08-18 09:30:00' , 'diagnosis2' , 100 , 'recommendation2' , 30 , 2 , 2);
insert into appointments (date_Time, diagnosis, price, recommendations,type, user_Id,doctor_Id) values('2000-08-19 10:00:00' , 'diagnosis' , 100 , 'recommendation' , 30 , 3 , 2);
insert into appointments (date_Time, diagnosis, price, recommendations,type, user_Id,doctor_Id) values('2000-08-19 10:30:00' , 'diagnosis2' , 100 , 'recommendation2' , 30 , 4 , 2);
insert into appointments (date_Time, diagnosis, price, recommendations,type, user_Id,doctor_Id) values('2000-08-19 10:30:00' , 'diagnosis2' , 100 , 'recommendation2' , 30 , 4 , 3);

-- Prescription

insert into prescription (content, appointment_id)  values('Aponapro 2x na dobe po 1 tabletce, dużo odpoczynku' , 5);
insert into prescription (content, appointment_id)  values('Momoster 2x2' , 5);
insert into prescription (content, appointment_id)  values('Aponapro 2x na dobe po 1 tabletce, dużo odpoczynku' , 1);
insert into prescription (content, appointment_id)  values( 'Paracetamol przy występowaniu gorączki, Scorbolamid 2x3' , 6);
insert into prescription (content, appointment_id)  values('brak' , 7);
insert into prescription (content, appointment_id)  values( 'brak' , 8);

-- Referral

insert into referrals (content, appointment_id)  values('Badanie CT twarzoczaszki' , 5);
insert into referrals (content, appointment_id)  values('Badanie osocza krwi' , 5);
insert into referrals (content, appointment_id)  values('Badanie moczu' , 1);
insert into referrals (content, appointment_id)  values('Wizyta u okulisty' , 6);
insert into referrals (content, appointment_id)  values('Wiecej swiezego powietrza' , 7);
