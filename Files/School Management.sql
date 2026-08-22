CREATE TABLE `users` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `phone` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `role_id` integer COMMENT 'Admin, Moderator etc'
);

CREATE TABLE `roles` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `role_name` varchar(255),
  `role_desciption` varchar(255)
);

CREATE TABLE `students` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `father_name` varchar(255),
  `mother_name` varchar(255),
  `address` varchar(255),
  `phone` varchar(255),
  `class_id` int,
  `section_id` int,
  `group_id` int,
  `photo` varchar(255)
);

CREATE TABLE `classes` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `class_name` varchar(255)
);

CREATE TABLE `sections` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `section_name` varchar(255),
  `class_id` int
);

CREATE TABLE `groups` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `group_name` varchar(255)
);

CREATE TABLE `teachers` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255),
  `designation` varchar(255) COMMENT 'Principal, Vice Principal, Head Teacher / Headmaster / Headmistress, Assistant Head Teacher, Senior Teacher, Assistant Teacher, Lecturer (Common in colleges)',
  `address` varchar(255),
  `phone` varchar(255),
  `qualifiactions` text,
  `subject_id` varchar(255),
  `photo` varchar(255)
);

CREATE TABLE `subjects` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `subject_name` varchar(255),
  `subject_code` varchar(255)
);

CREATE TABLE `exams` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `exam_name` varchar(255),
  `exam_type_id` varchar(255),
  `exam_start_date` date
);

CREATE TABLE `exam_types` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `exam_type_name` varchar(255)
);

CREATE TABLE `exam_results` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `exam_id` varchar(255),
  `student_id` int,
  `subject_id` int,
  `mark` decimal
);

CREATE TABLE `fees` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `student_id` int,
  `fee_type_id` varchar(255),
  `fee_collected_at` date
);

CREATE TABLE `fee_types` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `fee_type_name` varchar(255),
  `fee_amount` int
);

ALTER TABLE `roles` ADD FOREIGN KEY (`id`) REFERENCES `users` (`role_id`);

ALTER TABLE `classes` ADD FOREIGN KEY (`id`) REFERENCES `students` (`class_id`);

ALTER TABLE `sections` ADD FOREIGN KEY (`id`) REFERENCES `students` (`section_id`);

ALTER TABLE `groups` ADD FOREIGN KEY (`id`) REFERENCES `students` (`group_id`);

ALTER TABLE `classes` ADD FOREIGN KEY (`id`) REFERENCES `sections` (`class_id`);

ALTER TABLE `subjects` ADD FOREIGN KEY (`id`) REFERENCES `teachers` (`subject_id`);

ALTER TABLE `exam_types` ADD FOREIGN KEY (`exam_type_name`) REFERENCES `exams` (`exam_type_id`);

ALTER TABLE `exams` ADD FOREIGN KEY (`id`) REFERENCES `exam_results` (`exam_id`);

ALTER TABLE `students` ADD FOREIGN KEY (`id`) REFERENCES `exam_results` (`student_id`);

ALTER TABLE `subjects` ADD FOREIGN KEY (`id`) REFERENCES `exam_results` (`subject_id`);

ALTER TABLE `students` ADD FOREIGN KEY (`id`) REFERENCES `fees` (`student_id`);

ALTER TABLE `fee_types` ADD FOREIGN KEY (`id`) REFERENCES `fees` (`fee_type_id`);
