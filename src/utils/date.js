import dayjs from "dayjs"
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export const getDate = ({ startDate, days = 1, isAdd = true }) => {
  const daysInMilliseconds = (days * 24) * 60 * 60 * 1000;
  if (isAdd) {
    return new Date(startDate.getTime() + daysInMilliseconds);
  }
  return new Date(startDate.getTime() - daysInMilliseconds);
}

export const getMonth = ({ startDate, months = 1, isAdd = true }) => {
  if (isAdd) {
    return new Date(startDate.setMonth(startDate.getMonth() + months));
  }
  return new Date(startDate.setMonth(startDate.getMonth() - months));
}

export const getYear = ({ startDate, years = 1, isAdd = true }) => {
  if (isAdd) {
    return new Date(startDate.setFullYear(startDate.getFullYear() + years));
  }
  return new Date(startDate.setFullYear(startDate.getFullYear() - years));
}

export const getArrayDaysInMonth = (year, month) =>  {
  const days = [];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let day = 1; day <= daysInMonth; day++) {
    const key = day < 10 ? `0${day}` : day.toString();
    days.push({ key, time: day.toString() });
  }

  return days;
}

export const getArrayHourByDay = () => {
  const hours = [];

  for (let hour = 0; hour < 24; hour++) {
    const startHour = hour.toString().padStart(2, "0");
    const endHour = (hour + 1).toString().padStart(2, "0");
    const key = startHour?.toString();
    const hourRange = `${startHour} - ${endHour}`;

    hours.push({ key, time: hourRange })
  }
  return hours;
}

export const getArrayYear = () => {
  const years = [];
  for (let year = 1; year <= 12; year++) {
    const key = year < 10 ? `0${year}` : year.toString();

    years.push({ key, time: year.toString() })
  }
  return years;
}

export const convertStringToDate = (dateString) => {
  if (!dateString && (dateString.length !== 8 || dateString.length !== 10)) return;
  const year = parseInt(dateString.substring(0, 4), 10);
  const month = parseInt(dateString.substring(4, 6), 10) - 1;
  const day = parseInt(dateString.substring(6, 8), 10);
  const dateObject = new Date(year, month, day);

  return dateObject;
}

export const getTimeZoneLocal = () => {
  const timeZoneOffsetInMinutes = new Date().getTimezoneOffset();
  return -timeZoneOffsetInMinutes / 60;
}

export const formatSecondToTime = (seconds) => {
  if (!seconds || typeof seconds === 'string') return;

  const m = Math.floor(seconds / 60);
  const s = seconds - m * 60;

  return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
}