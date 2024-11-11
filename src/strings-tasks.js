/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the length of the given string.
 *
 * @param {string} value - Входная строка для расчета длины.
 * @return {number} -Длина струны.
 *
 * @example
 *   getStringLength('aaaaa') => 5
 *   getStringLength('b') => 1
 *   getStringLength('') => 0
 *   getStringLength() => 0
 *   getStringLength(null) => 0
 *   getStringLength(undefined) => 0
 */
function getStringLength(value) {
  if (value === null || value === undefined) {
    return 0;
  }
  return value.length;
}

/**
 * Возвращает true, если значение является строкой, в противном случае возвращает false.
 *
 * @param {string} value - Значение, чтобы проверить, является ли это строкой.
 * @return {boolean} - Верно, если значение - это строка, false в противном случае.
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Возвращает результат объединения двух строк.
 *
 * @param {string} value1 - Первая строка для объединения.
 * @param {string} value2 - Вторая строка для объединения.
 * @return {string} - Согласованная строка.
 *
 * @example
 *   concatenateStrings('aa', 'bb') => 'aabb'
 *   concatenateStrings('aa', '') => 'aa'.
 *   concatenateStrings('', 'bb') => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}

/**
 * Возвращает первый символ данной строки.
 *
 * @param {string} value - Входная строка, чтобы извлечь первый символ из.
 * @return {string} - Первый символ строки.
 *
 * @example
 *   getFirstChar('John Doe') => 'J'
 *   getFirstChar('cat') => 'c'
 *   getFirstChar('') => ''
 */
function getFirstChar(value) {
  if (value.length === 0) {
    return '';
  }
  return value.charAt(0);
}
/**
 * Удаляет ведущие и следующий пробел символов из строки.
 *
 * @param {string} value - Входная строка для удаления ведущих и следственных пробелов из.
 * @return {string} - Строка с ведущими и запекающими пробелами удалена.
 *
 * @example
 *   removeLeadingAndTrailingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingAndTrailingWhitespaces('cat ') => 'cat'
 *   removeLeadingAndTrailingWhitespaces('\t\t\tHello, World! ') => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Удаляет только ведущие матча -символы из строки.
 *
 * @param {string} value - Входная строка для удаления ведущих пробелов.
 * @return {string} - Строка с ведущими пробелами удалена.
 *
 * @example
 *   removeLeadingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingWhitespaces('cat ') => 'cat '
 *   removeLeadingWhitespaces('\t\t\tHello, World! ') => 'Hello, World! '
 */
function removeLeadingWhitespaces(value) {
  return value.replace(/^\s+/, '');
}

/**
 * Удаляет только запекание символов пробелов из строки.
 *
 * @param {string} value - Входная строка для удаления сцепных путей.
 * @return {string} - Строка с удаленными пробелами удалена.
 *
 * @example
 *   removeTrailingWhitespaces('  Abracadabra') => '  Abracadabra'
 *   removeTrailingWhitespaces('cat ') => 'cat'
 *   removeTrailingWhitespaces('\t\t\tHello, World! ') => '\t\t\tHello, World!'
 */
function removeTrailingWhitespaces(value) {
  return value.replace(/\s+$/, '');
}

/**
 * Возвращает строку, которая повторяется указанное количество раз.
 *
 * @param {string} str - Строка повторить.
 * @param {number} times - Количество раз повторить строку.
 * @return {string} - Строка результата.
 *
 * @example
 *   repeatString('A', 5) => 'AAAAA'
 *   repeatString('cat', 3) => 'catcatcat'
 *   repeatString('', 3) => ''
 *   repeatString('abc', -2) => ''
 */
function repeatString(str, times) {
  if (times <= 0) {
    return '';
  }
  return str.repeat(times);
}

/**
 * Удалите первое вхождение подстроения из строки.
 *
 * @param {string} str - Входная строка.
 * @param {string} value - Подстроение для удаления из строки.
 * @return {string} - Строка с первым появлением подстроки удалена.
 *
 * @example
 *   removeFirstOccurrences('To be or not to be', 'be') => 'To  or not to be'.
 *   removeFirstOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeFirstOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  if (index === -1) {
    return str;
  }
  return str.slice(0, index) + str.slice(index + value.length);
}

/**
 * Удалите последнее вхождение подстроения из строки.
 *
 * @param {string} str - Входная строка.
 * @param {string} value - Подстроение для удаления из строки.
 * @return {string} - Строка с последним появлением подстроки удалена.
 *
 * @example
 *   removeLastOccurrences('To be or not to be', 'be') => 'To be or not to '.
 *   removeLastOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeLastOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeLastOccurrences(str, value) {
  const lastIndex = str.lastIndexOf(value);
  if (lastIndex === -1) {
    return str;
  }
  return str.slice(0, lastIndex) + str.slice(lastIndex + value.length);
}

/**
 * Рассчитайте сумму кодов символов данной строки.
 *
 * @param {string} str - Входная строка.
 * @return {number} - Сумма кодов символов строки.
 *
 * @example
 *   sumOfCodes('My String') => 861 (77 + 121 + 32 + 83 + 116 + 114 + 105 + 110 + 103 = 861)
 *   sumOfCodes('12345') => 255 (49 + 50 + 51 + 52 + 53 = 255)
 *   sumOfCodes('') => 0
 *   sumOfCodes() => 0
 */
function sumOfCodes(str) {
  if (!str) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < str.length; i) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

/**
 * Проверяет, начинается ли строка с определенной подстроки.
 *
 * @param {string} str - Входная строка.
 * @param {string} substr - Подстроение для проверки.
 * @return {boolean} - Возвращает True, если строка начинается с подстроения, False в противном случае.
 *
 * @example:
 *   startsWith('Hello World', 'World') => false
 *   startsWith('Hello World', 'Hello') => true
 */
function startsWith(str, substr) {
  return str.startsWith(substr);
}

/**
 * Проверяет, заканчивается ли строка определенной подстрокой.
 *
 * @param {string} str - Входная строка.
 * @param {string} substr - Подстроение для проверки.
 * @return {boolean} - Возвращает True, если строка начинается с подстроения, False в противном случае.
 *
 * @example:
 *   endsWith('Hello World', 'World') => true
 *   endsWith('Hello World', 'Hello') => false
 */
function endsWith(str, substr) {
  return str.endsWith(substr);
}

/**
 * Возвращает строку времени в формате "MM: SS".
 *
 * @param {number} minutes - Количество минут (неотрицательное целое число).
 * @param {number} seconds - Количество секунд (неотрицательное целое число).
 * @return {string} - Строка времени в формате "MM: SS".
 *
 * @example
 *   formatTime(5, 30) => "05:30"
 *   formatTime(1, 15) => "01:15"
 *   formatTime(0, 45) => "00:45"
 *   formatTime(0, 0) => "00:00"
 */
function formatTime(minutes, seconds) {
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  return `${formattedMinutes}:${formattedSeconds}`;
}

/**
 * Возвращает строку в обратном порядке.
 *
 * @param {string} str - Входная строка.
 * @return {string} - Строка в обратном порядке.
 *
 * @example:
 *   reverseString('abcdef') => 'fedcba'
 *   reverseString('12345') => '54321'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Возвращает строку с символами в алфавитном порядке.
 *
 * @param {string} str - Входная строка.
 * @return {string} - Строка в алфавитном порядке.
 *
 * @example:
 *   orderAlphabetically('webmaster') => 'abeemrstw'
 *   orderAlphabetically('textbook') => 'bekoottx'
 *   orderAlphabetically('abc123xyz') => '123abcxyz'
 */
function orderAlphabetically(str) {
  return str.split('').sort().join('');
}

/**
 * Проверяет, содержит ли данная строка указанное подстроение.
 *
 * @param {string} str - Входная строка для поиска внутри.
 * @param {string} substring - Подстроение для проверки на входной строке.
 * @returns {boolean} - TRUE Если входная строка содержит указанное подстроение, false в противном случае.
 *
 * @example
 *   containsSubstring('Hello, World!', 'World') => true
 *   containsSubstring('JavaScript is Fun', 'Python') => false
 *   containsSubstring('12345', '34') => true
 */
function containsSubstring(str, substring) {
  return str.includes(substring);
}

/**
 * Возвращает количество гласных в строке.
 * Гласные: 'a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'.
 *
 * @param {string} str - Входная строка.
 * @return {number} - Количество гласных в строке.
 *
 * @example:
 *   countVowels('apple')  => 2
 *   countVowels('banana') => 3
 *   countVowels('cherry') => 2
 *   countVowels('aEiOu') => 5
 *   countVowels('XYZ') => 1
 */
function countVowels(str) {
  if (!str) {
    return 0;
  }
  const vowels = str.match(/[aeiouyAEIOUY]/g);
  return vowels ? vowels.length : 0;
}

/**
 * Возвращает True, если строка является палиндром;в противном случае ложь.
 * https://en.wikipedia.org/wiki/Palindrome
 *
 * @param {string} str - Входная строка.
 * @return {bool} - Верно, если строка является палиндром, ложь в противном случае.
 *
 * @example:
 *   isPalindrome('madam') => true
 *   isPalindrome('racecar') => true
 *   isPalindrome('apple') => false
 *   isPalindrome('No lemon, no melon') => true
 */
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

/**
 * Найдите самое длинное слово в предложении.Если есть несколько самых длинных слов,
 * Функция возвращает первую встречу.
 *
 * @param {string} sentence - Входное предложение.
 * @returns {string} - Самое длинное слово в предложении.
 *
 * @example:
 *   findLongestWord('The quick brown fox') => 'quick'
 *   findLongestWord('A long and winding road') => 'winding'
 *   findLongestWord('No words here') => 'words'
 */
function findLongestWord(sentence) {
  return sentence.split(' ').reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, '');
}

/**
 * Возвращает строку, в которой каждое слово изменяется.
 *
 * @param {string} str -Входная строка.
 * @return {string} - Строка, где каждое слово изменяется.
 *
 * @example:
 *   reverseWords('Hello World') => 'olleH dlroW'
 *   reverseWords('The Quick Brown Fox') => 'ehT kciuQ nworB xoF'
 */
function reverseWords(str) {
  const words = str.split(' ');
  const reversedWords = [];
  for (let i = 0; i < words.length; i) {
    let reversedWord = '';
    for (let j = words[i].length - 1; j >= 0; j) {
      reversedWord += words[i][j];
    }
    reversedWords.push(reversedWord);
  }
  return reversedWords.join(' ');
}

/**
 * Инвертирует случай каждого символа в данной строке.
 *
 * @param {string} str - Входная строка.
 * @returns {string} - Строка с случаем каждого символа перевернута.
 *
 * @example
 *   invertCase('Hello, World!') =>  'hELLO, wORLD!'
 *   invertCase('JavaScript is Fun') => 'jAVAsCRIPT IS fUN'
 *   invertCase('12345') => '12345'
 */
function invertCase(str) {
  let invertedStr = '';
  str.split('').forEach((char) => {
    if (char === char.toUpperCase()) {
      invertedStr += char.toLowerCase();
    } else {
      invertedStr += char.toUpperCase();
    }
  });
  return invertedStr;
}

/**
 * Возвращает результат шаблона строки и заданных параметров FirstName и Lastname.
 * Пожалуйста, не используйте Concatenation, используйте строку шаблона:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName - Первое имя включает в шаблон.
 * @param {string} lastName - Фамилия для включения в шаблон.
 * @return {string} - Форматированная строка, сгенерированная из шаблона.
 *
 * @example
 *   getStringFromTemplate('John','Doe') => 'Hello, John Doe!'
 *   getStringFromTemplate('Chuck','Norris') => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Извлекает имя из String String 'Hello, First_name Last_Name!'.
 *
 * @param {string} value - Входное значение.
 * @return {string} - Имя извлечено из шаблона.
 *
 * @example
 *   extractNameFromTemplate('Hello, John Doe!') => 'John Doe'
 *   extractNameFromTemplate('Hello, Chuck Norris!') => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  return value.replace('Hello, ', '').replace('!', '');
}

/**
 * Снимите первые и последние угловые кронштейны из строки тега
 *
 * @param {string} str -Входной тег.
 * @return {string} - Метка без первого и последнего углового кронштейна.
 *
 * @example
 *   unbracketTag('<div>') => 'div'
 *   unbracketTag('<span>') => 'span'
 *   unbracketTag('<a>') => 'a'
 */
function unbracketTag(str) {
  return str.slice(1, -1);
}

/**
 * Извлекает электронные письма из одной строки с списком электронных писем, разграниченных полуколонами
 *
 * @param {string} str - Входная строка.
 * @return {array} -Список электронных писем, извлеченных из строки.
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Кодировать указанную строку с шифром ROT13
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str - Входная строка.
 * @return {string} - Кодированная строка ROT13.
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  const input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  return str
    .split('')
    .map((char) => {
      const index = input.indexOf(char);
      return index !== -1 ? output[index] : char;
    })
    .join('');
}

/**
 * Возвращает идентификатор карты Playid.
 *
 * Игрательные карты Начальная колода включает в себя карты в следующем заказе:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Функция возвращает индекс на основе нуля указанной карты в начальной палубе выше.
 *
 * @param {string} value - Значение карты.
 * @return {number} - Индекс на основе нуля.
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const deck = [
    'A♣',
    '2♣',
    '3♣',
    '4♣',
    '5♣',
    '6♣',
    '7♣',
    '8♣',
    '9♣',
    '10♣',
    'J♣',
    'Q♣',
    'K♣',
    'A♦',
    '2♦',
    '3♦',
    '4♦',
    '5♦',
    '6♦',
    '7♦',
    '8♦',
    '9♦',
    '10♦',
    'J♦',
    'Q♦',
    'K♦',
    'A♥',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A♠',
    '2♠',
    '3♠',
    '4♠',
    '5♠',
    '6♠',
    '7♠',
    '8♠',
    '9♠',
    '10♠',
    'J♠',
    'Q♠',
    'K♠',
  ];
  return deck.indexOf(value);
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
