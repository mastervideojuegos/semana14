-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-04-2019 a las 23:39:18
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pong`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modos`
--

CREATE TABLE `modos` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `equipo1` int(11) NOT NULL,
  `equipo2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

--
-- Volcado de datos para la tabla `modos`
--

INSERT INTO `modos` (`id`, `descripcion`, `equipo1`, `equipo2`) VALUES
(1, '1 vs 1', 1, 1),
(2, '1 vs 2', 1, 2),
(3, '1 vs 3', 1, 3),
(4, '2 vs 2', 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salas`
--

CREATE TABLE `salas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) COLLATE utf8mb4_spanish_ci NOT NULL,
  `activo` varchar(1) COLLATE utf8mb4_spanish_ci NOT NULL,
  `numJugadores` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `salas`
--

INSERT INTO `salas` (`id`, `nombre`, `activo`, `numJugadores`) VALUES
(1, '', '0', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salasusuarios`
--

CREATE TABLE `salasusuarios` (
  `idSala` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `posX` float NOT NULL,
  `posY` float NOT NULL,
  `listo` int(11) NOT NULL,
  `utc` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `salasusuarios`
--

INSERT INTO `salasusuarios` (`idSala`, `idUsuario`, `posX`, `posY`, `listo`, `utc`) VALUES
(1, 28, 600, 582, 0, 1552935071);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(40) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellidos` varchar(60) NOT NULL,
  `utc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `contrasena`, `nombre`, `apellidos`, `utc`) VALUES
(28, 'arbustus', 'arbustus', 'josemanuel', 'martinezroa', '1552823545'),
(29, 'a', 'a', 'a', 'a', '1554551253');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `modos`
--
ALTER TABLE `modos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `salas`
--
ALTER TABLE `salas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `salasusuarios`
--
ALTER TABLE `salasusuarios`
  ADD PRIMARY KEY (`idSala`,`idUsuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `modos`
--
ALTER TABLE `modos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `salas`
--
ALTER TABLE `salas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
