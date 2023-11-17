import {useEffect, useState} from "react";
import {FetchBuilder} from "../api/fetch";
import {dateFromStr, datetimeFirst, datetimeLast, strFromDate} from "../utils/datetimeUtil";

class EventData {
  constructor(event) {
    this.event_id = event.event_id;
    this.calender_id = event.calender_id;
    this.is_show = event.is_show;
    this.all_day = event.all_day;
    this.event_title = event.event_title;
    this.description = event.description;
    this.start = dateFromStr(event.start);
    this.end = dateFromStr(event.end);
    this.location = event.location;
    this.ical_uid = event.ical_uid;
  }

  datePeriod() {
    return this.end.getDate() - this.start.getDate() + 1;
  }

  startDateFirst() {
    const result = new Date(this.start.getTime());
    result.setHours(0, 0, 0);
    return result;
  }

  endDateLast() {
    const result = new Date(this.start.getTime());
    result.setHours(23, 59, 59);
    return result;
  }
}

export function useEvents(firebaseUser, calenderId, year, month, week, isFirstWeek, isLastWeek) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const search = new URLSearchParams();
    const first = datetimeFirst(year, month, week[0].date);
    const last = datetimeLast(year, month, week[6].date);
    if (isFirstWeek) {
      let month = first.getMonth();
      month -= 1;
      if (month < 0) {
        month = 11;
        first.setFullYear(first.getFullYear() - 1);
      }
      first.setMonth(month);
    }
    console.log(year, month, week, isFirstWeek, isLastWeek)
    if (isLastWeek) {
      let month = last.getMonth();
      month += 1;
      if (month > 11) {
        month = 0;
        last.setFullYear(last.getFullYear() + 1);
      }
      last.setMonth(month);
    }

    search.set("start", strFromDate(first));
    search.set("end", strFromDate(last));
    new FetchBuilder(`/api/calender/${calenderId}/public-event`)
      .searchParams(search)
      .method("GET")
      .token(firebaseUser.uid)
      .fetch()
      .then((values) => {
        setEvents(values.map(value => EventData(value)));
        console.log("event fetched!");
      })
      .catch(reason => console.error(reason.apiErrorResponse.message));
  }, [firebaseUser, calenderId, year, month, week]);
  return events;
}
