/**
 * Script to accept an arbitrary string and convert it to a series of emoticons
 * that draw out the string as a bitmap in Slack. Ignores characters that are not yet
 * implemented in CharToBitmapMap.
 *
 * Usage: writeWord(word_to_write, icon_for_text, icon_for_background);
 * Eg: writeWord('WORD');
 *     writeWord('WORD', ':simple_smile:', ':disappointed:');
 * Note: This does a *case-sensitive* matching of characters to the bitmaps, in case
 *  I want to support lowercase letters in the future. Right now, only a subset of the
 *  uppercase Latin alphabet, and certain punctuation marks have been mapped to bitmaps.
 */
var DEFAULT_FG = ':shipit:'
var DEFAULT_BG = ':troll:'
var CharToBitmapMap = {
' ':
[
'0',
'0',
'0',
'0',
'0'
],
':': [
'0',
'1',
'0',
'1',
'0'
],
'#': [
'01010',
'11111',
'01010',
'11111',
'01010'
],
'A': [
'01110',
'10001',
'11111',
'10001',
'10001'
],
'B': [
'11110',
'10001',
'11110',
'10001',
'11110'
],
'D': [
'1110',
'1001',
'1001',
'1001',
'1110',
],
'E': [
'111',
'100',
'110',
'100',
'111',
],
'F': [
'111',
'100',
'110',
'100',
'100',
],
'G': [
'01111',
'10000',
'10011',
'10001',
'01111'
],
'H': [
'101',
'100',
'111',
'101',
'101'
],
'I': [
'11111',
'00100',
'00100',
'00100',
'11111'
],
'L': [
'100',
'100',
'100',
'100',
'111'
],
'M': [
'10001',
'11011',
'10101',
'10001',
'10001'
],
'N': [
'10001',
'11001',
'10101',
'10011',
'10001'
],
'O': [
'111',
'101',
'101',
'101',
'111'
],
'P': [
'111',
'101',
'111',
'100',
'100'
],
'R': [
'11110',
'10001',
'11110',
'10010',
'10001'
],
'S': [
'111',
'100',
'111',
'001',
'111'
],
'T': [
'11111',
'00100',
'00100',
'00100',
'00100'
],
'U': [
'10001',
'10001',
'10001',
'10001',
'01110'
],
'V': [
'10001',
'10001',
'10001',
'01010',
'00100'
],
'X': [
'10001',
'01010',
'00100',
'01010',
'10001'
],
'Y': [
'10001',
'01010',
'00100',
'00100',
'00100'
],
'Z': [
'11111',
'00010',
'00100',
'01000',
'11111'
]
}

/**
 * Using the CharToBitmapMap defined above, writes a word out of icons.
 * @param word: The word to write
 * @param fgIcon: the icon to use for the text. Defaults to :shipit:
 * @param bgIcon: the icon to use for the background. Defaults to :troll:
 */
var writeWord = function(word, fgIcon, bgIcon) {
  if (!fgIcon) {
    fgIcon = DEFAULT_FG;
  }
  if (!bgIcon) {
    bgIcon = DEFAULT_BG;
  }
  var output = ['', '', '', '', ''];
  for (var i in word) {
    var letter = word[i];
    if (CharToBitmapMap[letter]) {
      appendChar(output, CharToBitmapMap[' ']);
      appendChar(output, CharToBitmapMap[letter]);
    }
  }
  appendChar(output, CharToBitmapMap[' ']);

  translateBitmap(output, fgIcon, bgIcon);
}

var appendChar = function(stringArr, letterArr) {
  for (var i in stringArr) {
    stringArr[i] += letterArr[i];
  }
}

var translateBitmap = function(bitMap, fgIcon, bgIcon) {
  console.log('.');
  for (var i in bitMap) {
    var row = bitMap[i];
    var string = '';
    for (var j in row) {
      if (row[j] === '1') {
        string += fgIcon;
      } else {
        string += bgIcon;
      }
    }
    console.log(string);
  }
}
