-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 17, 2023 at 08:26 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fed22_photos`
--

-- --------------------------------------------------------

--
-- Table structure for table `album`
--

CREATE TABLE `album` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `album`
--

INSERT INTO `album` (`id`, `title`, `user_id`) VALUES
(3, 'Fights', 3),
(4, 'Gaming', 1),
(5, 'Fights2', 3),
(6, 'Buddies', 2),
(7, 'Unicorns', 1),
(8, 'Sleep', 2),
(9, 'Horses', 4),
(10, 'Rodeo', 4);

-- --------------------------------------------------------

--
-- Table structure for table `photo`
--

CREATE TABLE `photo` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `photo`
--

INSERT INTO `photo` (`id`, `title`, `url`, `comment`, `user_id`) VALUES
(1, 'Doggy', 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'Best buddy', 2),
(2, 'Cutecorn', 'https://images.unsplash.com/photo-1550747528-cdb45925b3f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80', 'Cute unicorn', 1),
(3, 'Zzzzz', 'https://images.unsplash.com/photo-1630910627747-299d3bc50b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80', 'So sleepy', 2),
(4, 'THIS is meeee', 'https://images.unsplash.com/photo-1566577134624-6f6cc4bb272b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Me myself and I', 3),
(5, 'Friend', 'https://images.unsplash.com/photo-1546461410-034f0bd8d5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'My friend', 3),
(6, 'Board game', 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Woopiedoo', 1),
(7, 'Lollipop', 'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', 'Yummy in my tummy', 1),
(8, 'One more lollipop', 'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80', 'Yummy in my tummy yaaay', 1),
(9, 'Brown horse', 'https://images.unsplash.com/photo-1561132538-fa3e519681c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'My favorite horse', 1),
(10, 'Rodeo', 'https://images.unsplash.com/photo-1619368562181-1e4b3dc70570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80', 'I\'m having fun at the rodeo', 4),
(11, 'Brown horse', 'https://images.unsplash.com/photo-1561132538-fa3e519681c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'My favorite horse', 4);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `first_name`, `last_name`) VALUES
(1, 'juni16@gmail.com', '$2b$10$g9Nvrgz33rTnqiluEYPR7eHGD94cGEIXgR5Uz6LUxDLJ/BSaSbING', 'Juni', 'Nilsson'),
(2, 'dellakatt@gmail.com', '$2b$10$jL0WdGMkDzBgOLvgPqZwZ.jCg.Zi9OJmBbreN7pypZdOUp1xLCzAK', 'Della', 'Oodelali'),
(3, 'link@gmail.com', '$2b$10$FtqBDp9Q7ykAQujXbv2Scuu1ESuHSxr1Tv7DuilAKQjFKGgHqyNHe', 'Link', 'Hyruleking'),
(4, 'rip@gmail.com', '$2b$10$lauAkeS8haU8f4ceEfVG0umEJ8XFRtlhHg4qrZmZsOjkkRjpiRPyW', 'Rip', 'Walker');

-- --------------------------------------------------------

--
-- Table structure for table `_albumtophoto`
--

CREATE TABLE `_albumtophoto` (
  `A` int(10) UNSIGNED NOT NULL,
  `B` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_albumtophoto`
--

INSERT INTO `_albumtophoto` (`A`, `B`) VALUES
(6, 1),
(7, 2),
(8, 3),
(5, 4),
(3, 5),
(4, 6),
(4, 7),
(4, 8),
(10, 10),
(9, 11);

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('085de49f-a02c-47df-bf57-3926a5d41b50', '5ad306c899e266ed476ef54cc46a94165c393d3a6e1a20d703c8a0aa78fd14ac', '2023-02-13 18:33:26.281', '20230213183326_relations', NULL, NULL, '2023-02-13 18:33:26.113', 1),
('30ec94e1-d908-4dff-9664-343b271ee955', '6acc60f9d6eb298c2d2d3f80f8b472c782d24df58285165f88e88ae507f4b409', '2023-02-13 14:42:47.038', '20230213144246_do_over', NULL, NULL, '2023-02-13 14:42:46.962', 1),
('39c910bb-79e7-4c3e-bbad-a6da6f1d4320', 'ccf3bf8beea19a08e05739c9ca997fb3e6bdadebab112ebb217a00249f89e141', '2023-02-13 14:42:34.038', '20230211075128_removed_album_id', NULL, NULL, '2023-02-13 14:42:33.963', 1),
('5468ec92-cc87-44e3-bf13-a19841fa319c', '0c110215729dbd3d5f2e3282b0b49614c0ff05a6dec94b18b3160ead2cba0d74', '2023-02-13 14:42:33.960', '20230211072932_changed_relations', NULL, NULL, '2023-02-13 14:42:33.726', 1),
('578cddd1-5157-401d-af2b-21e555dc61e6', 'f0ff70c972ea869dcc7eceeb7df9ecd9fea5907ef2eed7a3daa8f529b87b20d1', '2023-02-13 14:42:34.283', '20230211194221_relations', NULL, NULL, '2023-02-13 14:42:34.042', 1),
('5a68c07e-2208-4224-9155-c0cccbbb51e7', '12dea41da5e1b94489bd23628473a6b712d125ba7fbd312bfc8649c459d9e7a4', '2023-02-13 14:42:34.561', '20230212081000_comment_photo', NULL, NULL, '2023-02-13 14:42:34.384', 1),
('5eed2586-ae05-474e-b519-881d1b4bc242', '4f689c8e6c312a7dddff9e1f4a5087e4a8e7959e858ef42e7a0b1606244f9f94', '2023-02-13 14:42:36.776', '20230213142518_relation', NULL, NULL, '2023-02-13 14:42:36.699', 1),
('5f9a00e6-d20c-4b81-8787-3bd97a827e43', '91fe38e439ce81c96dfa19e04b26ba4099583ead4b44327bbc8750a24f0713ca', '2023-02-13 14:42:35.490', '20230212184341_relations', NULL, NULL, '2023-02-13 14:42:35.166', 1),
('77a14d4b-ad72-41fd-8c2b-7d9281623b99', 'adb17f1027de99a0fa7b2a757669a8d99c21cb80dfde41e3df7925a1a6879cc9', '2023-02-13 14:42:36.854', '20230213142818_relation', NULL, NULL, '2023-02-13 14:42:36.779', 1),
('7a7a067a-24a9-43dc-b246-530d280d672d', 'a35c0ee83118363d3a49b92355472a71a68eae1cb81337f78901eced971e0e63', '2023-02-13 14:42:36.175', '20230213110133_userid_not_required', NULL, NULL, '2023-02-13 14:42:35.838', 1),
('850d2341-769b-4316-b5c0-018ddccd8966', '8c9af04ffb07c3e0a0f143d6d8286a8fbe13afa067456e8d1ee45e99c521dbcd', '2023-02-13 14:42:34.824', '20230212091518_albumid_photo', NULL, NULL, '2023-02-13 14:42:34.745', 1),
('8e1397a3-656f-4513-91d3-10e29c7869da', 'adb17f1027de99a0fa7b2a757669a8d99c21cb80dfde41e3df7925a1a6879cc9', '2023-02-14 07:48:17.255', '20230214074817_relation', NULL, NULL, '2023-02-14 07:48:17.139', 1),
('942c801b-be41-4991-881b-293918f4e07e', 'dd92dbf2c70fe32796841c5bb65e13b2c62c5080774a090cae2c5deaac58f62a', '2023-02-13 14:42:35.163', '20230212123712_relations', NULL, NULL, '2023-02-13 14:42:34.828', 1),
('97b8aab0-3a3f-4289-b008-eac59ab1ce54', '40879efb2ea246c1b4f5cca6437f80f7f38e6a9c08d820b2b5cd3f6cf84d2e78', '2023-02-13 14:42:34.742', '20230212090717_userid_photo', NULL, NULL, '2023-02-13 14:42:34.565', 1),
('98b8ff9e-b667-4ada-ac9f-9a6da8240ca7', 'd9c1ad5e125689522b440a706381a9494fdce8d263a1c828576ba89d639972b6', '2023-02-13 14:42:35.835', '20230213084102_user_id_required', NULL, NULL, '2023-02-13 14:42:35.492', 1),
('9c830889-94a6-44d4-8331-6c9d5b02044d', 'a99ffcac3d6d2203fc16df098e328dfc0b54e9bd2fda05a88a1ba41bf0deaefb', '2023-02-13 14:42:36.519', '20230213112908_id_required', NULL, NULL, '2023-02-13 14:42:36.178', 1),
('b0af1a12-f4b9-422d-bcda-3c6ed89dfcf8', '71f7b1d57783f44d832d01a34b99fa927ad52e6635144726793ee704f6682e04', '2023-02-13 14:42:33.722', '20230210175426_new_schema', NULL, NULL, '2023-02-13 14:42:33.431', 1),
('b67619e9-5cbc-4428-999d-952c45e87c71', '10abb60de56bf562bb2bad8d885a3784ffa2e6a1722e29e3f34dbad7d3d5e68d', '2023-02-13 14:42:36.695', '20230213142210_relations', NULL, NULL, '2023-02-13 14:42:36.523', 1),
('c5b93545-8295-4699-ad1a-106802cd0ed5', '86e8add9310477e4b099823a097ec7d51e1d6f0065f7a07de6dbd7525f37bb15', '2023-02-13 14:42:34.382', '20230211213455_added_albumid', NULL, NULL, '2023-02-13 14:42:34.287', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Album_user_id_fkey` (`user_id`);

--
-- Indexes for table `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Photo_user_id_fkey` (`user_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `_albumtophoto`
--
ALTER TABLE `_albumtophoto`
  ADD UNIQUE KEY `_AlbumToPhoto_AB_unique` (`A`,`B`),
  ADD KEY `_AlbumToPhoto_B_index` (`B`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `album`
--
ALTER TABLE `album`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `photo`
--
ALTER TABLE `photo`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `album`
--
ALTER TABLE `album`
  ADD CONSTRAINT `Album_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `photo`
--
ALTER TABLE `photo`
  ADD CONSTRAINT `Photo_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `_albumtophoto`
--
ALTER TABLE `_albumtophoto`
  ADD CONSTRAINT `_AlbumToPhoto_A_fkey` FOREIGN KEY (`A`) REFERENCES `album` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `_AlbumToPhoto_B_fkey` FOREIGN KEY (`B`) REFERENCES `photo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
