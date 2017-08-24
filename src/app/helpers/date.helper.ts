import * as moment from 'moment';

// setting 'ko' locale
moment.locale('ko');

export default class DateHelper {
  /**
   * 오전 / 오후
   * @param date
   * @returns {string}
   */
  static getAmPm(date) {
    return moment(date).format('a');
  }

  /**
   *
   * @param date
   * @returns {string}
   */
  static getYear(date) {
    return moment(date).format('YYYY');
  }

  /**
   * 1~12
   * @param date
   * @returns {string}
   */
  static getMonth(date) {
    return moment(date).format('M');
  }

  /**
   * 1~31
   * @param date
   * @returns {string}
   */
  static getDay(date) {
    return moment(date).format('D');
  }

  /**
   * 월화수목금토일
   * @param date
   * @returns {string}
   */
  static getKrWeek(date) {
    return moment(date).format('dd');
  }

  /**
   * 1 ~ 24 hours
   * @param date
   * @returns {string}
   */
  static getHours(date) {
    return moment(date).format('HH');
  }

  /**
   * 1 ~ 12 hours
   * @param date
   * @returns {string}
   */
  static getShortHours(date) {
    return moment(date).format('hh');
  }

  /**
   * 1 ~ 60
   * @param date
   * @returns {string}
   */
  static getMinutes(date) {
    return moment(date).format('mm');
  }

  /**
   * 07:30
   * @param date
   * @returns {string}
   */
  static getHoursMinutes(date) {
    return moment(date).format('hh:mm');
  }

  /**
   * minutes:0 seconds:0 => true, else false
   * @param date
   * @returns {boolean}
   */
  static isSameZeroCount(date) {
    const zeroSet = moment().minutes(0).seconds(0);

    if ( moment(date).isSame(zeroSet, 'minute') && moment(date).isSame(zeroSet, 'second') ) {
      return true;
    }

    return false;
  }

  /**
   *
   * @returns {Moment}
   */
  static get2minTime() {
    return moment().minutes(2).seconds(0);
  }

  static get3minTime() {
    return moment().minutes(3).seconds(0);
  }

  static isBefore7days(date) {
    const now = new Date();
    const nextWeek = now.setDate(new Date().getDate() - 7);
    return moment(date).isSameOrAfter(nextWeek);
  }

  /**
   * invalid Date => valid Date
   * @param sDate
   */
  static toDate(sDate) {
    return moment(sDate).toDate();
  }
}
