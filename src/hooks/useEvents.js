import {useEffect, useState} from "react";
import {FetchBuilder} from "../api/fetch";
import {dateFromStr} from "../utils/datetimeUtil";

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

export function useEvents(firebaseUser, calenderId, startDate, endDate) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const search = new URLSearchParams();
    new FetchBuilder(`/api/calender/${calenderId}/public-event`)
      .searchParams(search)
      .method("GET")
      .token(firebaseUser.uid)
      .fetch()
      .then((values) => {
        setEvents(values.map(value => EventData(value)));
      });
  }, [firebaseUser, calenderId, startDate, endDate]);
  return events;
}
