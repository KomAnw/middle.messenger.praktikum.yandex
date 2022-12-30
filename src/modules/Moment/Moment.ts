const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const Moment = (time: string) => {
  const date = new Date(time);

  const getMonth = () => months[date.getMonth()];
  const getTime = () => {
    const getHours = date.getHours();
    const getMinutes = date.getMinutes();
    const hours = String(getHours).length === 1 ? `0${getHours}` : getHours;
    const minutes =
      String(getMinutes).length === 1 ? `0${getMinutes}` : getMinutes;
    return `${hours}:${minutes}`;
  };

  return {
    month: getMonth(),
    time: getTime(),
    date: date.getDate(),
    year: date.getFullYear(),
  };
};
