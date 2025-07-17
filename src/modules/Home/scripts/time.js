import moment from "moment";

export const date = (createdAt) => {
  /** generate time */
  const today = new Date();
  const old = new Date(createdAt);
  // console.log(today, old);
  /** Extract infos */
  const today_day = today.getUTCDate();
  const today_month = today.getUTCMonth() + 1;
  const today_year = today.getUTCFullYear();
  const today_hours = today.getUTCHours() + 1;
  const today_minutes = today.getUTCMinutes() + 1;

  const old_day = old.getUTCDate();
  const old_month = old.getUTCMonth() + 1;
  const old_year = old.getUTCFullYear();
  const old_hours = old.getUTCHours() + 1;
  const old_minutes = old.getUTCMinutes() + 1;

  /** Calculs diff */
  const day = today_day - old_day;
  const month = today_month - old_month;
  const year = today_year - old_year;
  const hours = today_hours - old_hours;
  const minutes = today_minutes - old_minutes;
  // console.log(year, month, day, hours, minutes);
  // Same year
  if (year === 0) {
    // Same months
    if (month === 0) {
      // Same day
      if (day === 0) {
        // Same houre
        if (hours === 0) {
          return `Il y a ${minutes} minutes`;
        } else {
          return `Il y a ${hours} heures`;
        }
      } else {
        return `Il y a ${day} jours`;
      }
    } else {
      return `Il y a ${month} mois`;
    }
  } else {
    return `Il y a ${year} années`;
  }
};
