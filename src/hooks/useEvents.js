import {useEffect, useState} from "react";
import {FetchBuilder} from "../api/fetch";
import {dateFromStr, strFromDate} from "../utils/datetimeUtil";

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

  datePeriod(firstDatetime) {
    return (Math.floor(
        (
          this.endDateLast().getTime() -
          (firstDatetime.getTime() > this.startDateFirst().getTime()
            ? firstDatetime.getTime()
            : this.startDateFirst().getTime())
        ) / (1000 * 60 * 60 * 24),
      )
      + 1);
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

export function useEvents(firebaseUser, calenderId, firstDatetime, lastDatetime) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const search = new URLSearchParams();

    if (firstDatetime == null || lastDatetime == null) return;

    search.set("start", strFromDate(firstDatetime));
    search.set("end", strFromDate(lastDatetime));
    new FetchBuilder(`/api/calender/${calenderId}/public-event`)
      .searchParams(search)
      .method("GET")
      .token(firebaseUser.uid)
      .fetch()
      .then((values) => {
        setEvents(values.map(value => new EventData(value)));
        console.log("event fetched!", values);
      })
      .catch(reason => console.error(reason.apiErrorResponse ? reason.apiErrorResponse.message : reason));
  }, [firebaseUser, calenderId, firstDatetime, lastDatetime]);
  return events;
}
