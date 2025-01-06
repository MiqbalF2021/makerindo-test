-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Waktu pembuatan: 06 Jan 2025 pada 08.00
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_demo`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'iqbal@gmail.com', '$2b$10$yicpd6otwe.YBAWSILFeWOT/P9vion.zJJ/4O.U.EkGLBaiYZBsTS'),
(2, 'uzi@gmail.com', '$2b$10$T0dbttKVnbRFGb/yLfDy7uRy.DuRA5xYcRwvqpeniv5idd65GkRfG'),
(3, 'iqball@gmail.com', '$2b$10$2JUJqunE1AJG1sP4jEl6uu.n2q8olTeJO4IIb9GAyVSFUeXgBAmCK'),
(4, 'mail@gma', '$2b$10$I8BVtB1nPOflUZlzabvJtuOdWplJX2CK/V9t2y.oH4ALxixw13O7m'),
(5, 'mail@gmail.com', '$2b$10$Igcpwg5r.Q5CyJOVTqyd8e0FDT8gwlmI7rZcwdKy9Ei1XLaP0PjwS'),
(6, 'mala@gm', '$2b$10$ISPFsihSR9ZbfjhpT7izDO/jMc0i0nJ8Ri2VytanSwxNLgiWjUW0q'),
(7, 'lala@g', '$2b$10$0f1A.inbrpylpL5tltj65exrbNciwys71X6pLDgRZS0ZF1MafBZje'),
(8, 'la@gmail.com', '$2b$10$wGbHXIOe.C98h1QxmcJVK..U4TZs/FqFun6Qd2FqydCDr2wiwe8yq'),
(9, 'email@gmail.com', '$2b$10$7EkzO6uGgfW.0RNCrFh5iu7g8Y1ldj3aTMva3O1mWz87WNje21ohW');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
