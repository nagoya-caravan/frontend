import {Box} from "@mui/material";
import {useEvents} from "../../hooks/useEvents.js";
import {firebaseAuth} from "../../utils/firebaseConfig.js";
import {Navigate, useParams} from "react-router-dom";
import DetailModal from "./DetailModal.jsx";
import {datetimeFirst, datetimeLast} from "../../utils/datetimeUtil.js";
import {useEffect, useState} from "react";

export function CalendarEvents(props) {
  const {year, month, week, isFirstWeek, isLastWeek, weekElementRef} = props;
  const {calendar_id} = useParams();
  const firebaseUser = firebaseAuth.currentUser;
  const [firstDatetime, setFirstDatetime] = useState();
  const [lastDatetime, setLastDatetime] = useState();
  const [eventList, setEventList] = useState([]);
  if (firebaseUser == null) {
    return <Navigate to={"/"}/>;
  }
  useEffect(() => {
    if (isFirstWeek) {
      setFirstDatetime(datetimeFirst(year, month - 1, week[0].date));
    } else setFirstDatetime(datetimeFirst(year, month, week[0].date),
    );
    if (isLastWeek) {
      setLastDatetime(datetimeFirst(year, month + 1, week[6].date));
    } else setLastDatetime(datetimeLast(year, month, week[6].date),
    );
  }, [year, month, week, isFirstWeek, isLastWeek]);
  const [events, reload] = useEvents(
    firebaseUser, calendar_id, firstDatetime, lastDatetime,
  );

  useEffect(() => {
    const renderEvents = [];
    const restEvents = events.sort((a, b) => a.start.getTime() > b.start.getTime());
    let position = 0;
    while (restEvents.length > 0) {
      console.log("while");
      if (position >= 7) position = 0;
      console.log(position);
      const currentDate = week[position].date;
      if (firstDatetime == null) break;
      const i = restEvents.findIndex(value => {
        const startDate = value.start;
        if (startDate.getTime() < firstDatetime.getTime()) return true;
        return startDate.getDate() === currentDate;
      });
      if (i < 0) {
        renderEvents.push(undefined);
        position += 1;
        continue;
      }
      const event = restEvents[i];
      restEvents.splice(i, 1);
      renderEvents.push(event);
      position += event.datePeriod(firstDatetime);

      setEventList(renderEvents);
    }
  }, [events]);

  const element = weekElementRef.current;
  const width = element ? element.offsetWidth : 0;
  return (
    <Box sx={{position: "absolute", top: "28px", left: 0, display: "flex", flexWrap: "wrap"}}>
      {eventList.map((value, index) => {
        return value
          ? <Box
            sx={{
              width: (
                  (width / 7)
                  * value.datePeriod(firstDatetime)
                )
                + "px",
              textAlign: "center",
            }}
            key={index}>
            <DetailModal eventData={value} editable reload={reload}/>
          </Box>
          : <Box sx={{
            width: (width / 7) + "px",
          }} key={index}/>;
      })}
    </Box>
  );
}