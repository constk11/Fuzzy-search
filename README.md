# Нечёткий поиск 

## Установка
npm install calculate-levenshtein-distance

## Подключение к файлу js
const { selectRelevantItems, calculateLevenshteinDistance } = require('calculate-levenshtein-distance');

## Описание
calculation-levenshtein-distance(firstString, secondString);
// Рассчитывает расстояние Левенштейна между двумя строками. Возвращает целое число

selectRelevantItems(data, selectedField, searchQuery) // Принимает список объектов (data) и отбирает по выбранному полю (selectedField) подходящие поисковому запросу (searchQuery) на основе расстояния Левенштейна. Возвращает список отобранных объектов, отсортированных по возрастанию расстояния Левенштейна