export default class UtilHelper {
  static leadingZeros(number: number, length: number): string {
    const result = number + '';
    return result.length > length ? result : new Array(length - result.length + 1).join('0') + result;
  }

  static isEmpty(value: any): boolean {
    if ( value === '' || value == null || value === undefined ||
      (value != null && typeof value === 'object' && !Object.keys(value).length) ) {
      return true;
    }
    return false;
  }

  static isObject(value: any): boolean {
    return (!!value) && (value.constructor === Object);
  }

  static isArray(value: any): boolean {
    return (!!value) && (value.constructor === Array);
  }

  static isString(value: any): boolean {
    return typeof(value) === 'string';
  }

  static sortObjArrDesc(array: any, key: string): any {
    return array.sort((a, b) => parseInt(b[key], 10) - parseInt(a[key], 10));
  }

  static sortObjArrAsc(array: any, key: string): any {
    return array.sort((a, b) => parseInt(a[key], 10) - parseInt(b[key], 10));
  }

  static convFilesize(bytes, precision) {
    const units = [
      'bytes',
      'KB',
      'MB',
      'GB',
      'TB',
      'PB'
    ];
    if ( isNaN(parseFloat(bytes.toString())) || !isFinite(bytes) ) {
      return '?';
    }

    let unit = 0;

    while ( bytes >= 1024 ) {
      bytes /= 1024;
      unit++;
    }

    return bytes.toFixed(+precision) + ' ' + units[unit];
  }

  static isEnglish(str) {
    const re = /^[a-zA-Z]$/g;
    return re.test(str.substr(0, 1));
  }

  static isKorean(str) {
    const re = /^[ㄱ-ㅎㅏ-ㅣ가-힇]$/g;
    return re.test(str.substr(0, 1));
  }

  static isNumber(str) {
    const re = /^[0-9]$/g;
    return re.test(str.substr(0, 1));
  }

  static isSpecial(str) {
    const re = /[^0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힇]&/g;
    return re.test(str.substr(0, 1));
  }

  static isKoreanAndEnglish(a, b) {
    return (UtilHelper.isEnglish(a) && UtilHelper.isKorean(b)) || (UtilHelper.isKorean(a) && UtilHelper.isEnglish(b));
  }

  static isKoreanAndNumber(a, b) {
    return (UtilHelper.isKorean(a) && UtilHelper.isNumber(b)) || (UtilHelper.isNumber(a) && UtilHelper.isKorean(b));
  }

  static isEnglishAndNumber(a, b) {
    return (UtilHelper.isEnglish(a) && UtilHelper.isNumber(b)) || (UtilHelper.isNumber(a) && UtilHelper.isEnglish(b));
  }

  static isKoreanAndSpecial(a, b) {
    return (UtilHelper.isKorean(a) && UtilHelper.isSpecial(b)) || (UtilHelper.isSpecial(a) && UtilHelper.isKorean(b));
  }

  static isEnglishAndSpecial(a, b) {
    return (UtilHelper.isEnglish(a) && UtilHelper.isSpecial(b)) || (UtilHelper.isSpecial(a) && UtilHelper.isEnglish(b));
  }

  static isNumberAndSpecial(a, b) {
    return (UtilHelper.isNumber(a) && UtilHelper.isSpecial(b)) || (UtilHelper.isSpecial(a) && UtilHelper.isNumber(b));
  }

  /**
   * compare function for sorting (Korean -> English -> Special)
   * @param a
   * @param b
   * @returns {number}
   */
  static compareName(a, b) {
    const REVERSE = -1;
    const LEFT_FIRST = -1;
    const RIGHT_FIRST = 1;

    const left = a.name.toUpperCase().replace(/ /gi, '');
    const right = b.name.toUpperCase().replace(/ /gi, '');

    const leftLength = left.length;
    const rightLength = right.length;
    const minLength = Math.min(leftLength, rightLength);

    for ( let i = 0; i < minLength; i++ ) {
      const leftChar = left.charAt(i);
      const rightChar = right.charAt(i);

      if ( leftChar !== rightChar ) {
        if ( UtilHelper.isKoreanAndEnglish(leftChar, rightChar)
          || UtilHelper.isKoreanAndNumber(leftChar, rightChar)
          || UtilHelper.isEnglishAndNumber(leftChar, rightChar)
          || UtilHelper.isKoreanAndSpecial(leftChar, rightChar) ) {
          const sortNum = (leftChar.charCodeAt() - rightChar.charCodeAt()) * REVERSE;
          return sortNum < 0 ? LEFT_FIRST : sortNum > 0 ? RIGHT_FIRST : 0;
        } else if ( UtilHelper.isEnglishAndSpecial(leftChar, rightChar)
          || UtilHelper.isNumberAndSpecial(leftChar, rightChar) ) {
          if ( UtilHelper.isEnglish(leftChar) || UtilHelper.isNumber(leftChar) ) {
            return LEFT_FIRST;
          } else {
            return RIGHT_FIRST;
          }
        } else {
          return leftChar.charCodeAt() < rightChar.charCodeAt()
            ? LEFT_FIRST : leftChar.charCodeAt() > rightChar.charCodeAt() ? RIGHT_FIRST : 0;
        }
      }
    }

    return leftLength < rightLength ? LEFT_FIRST : leftLength > rightLength ? RIGHT_FIRST : 0;
  }

  static validateEmail(email: string): boolean {
    const re = /[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}/gi;
    return re.test(email);
  }

  static validateUrl(url: string): boolean {
    const re = /(https?:\/\/)?(([a-z0-9-]+\.)+[a-z0-9]{2,4})+(?!\@)/gi;
    return re.test(url);
  }
}
