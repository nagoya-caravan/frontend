import {Box} from "@mui/material";
import {useEvents} from "../../hooks/useEvents.js";
import {firebaseAuth} from "../../utils/firebaseConfig.js";
import {useParams} from "react-router-dom";
import {datetimeFirst, datetimeLast} from "../../utils/datetimeUtil.js";
import DetailModal from "./DetailModal.jsx";

export function CalenderEvents(props) {
  const {year, month, week, weekElementRef} = props;
  const {calendar_id} = useParams();
  const firebaseUser = firebaseAuth.currentUser;
  if (firebaseUser == null) {
    // return <Navigate to={"/"}/>
    return <Box sx={{backgroundColor: "red"}}>user is null</Box>;
  }
  const events = useEvents(
    firebaseUser, calendar_id, datetimeFirst(year, month, week[0]), datetimeLast(year, month, week[6]),
  );

  const renderEvents = [];
  const restEvents = events.sort((a, b) => a.start.getTime() > b.start.getTime());
  let position = 0;
  while (restEvents.length > 0) {
    if (position > 7) position = 0;
    const i = restEvents.findIndex(value => value.start.getDate() === value);
    if (i < 0) {
      renderEvents.push(undefined);
      position += 1;
    }
    const event = restEvents[i];
    restEvents.splice(i, 1);
    renderEvents.push(event);
    position += event.datePeriod();
  }


  const element = weekElementRef.current;
  const width = element ? element.offsetWidth : 0;
  return (
    <Box sx={{position: "absolute", top: 0, left: 0, display: "flex", flexWrap: "wrap"}}>
      {restEvents.map(value => {
        return (
          <Box sx={{width: width}}>
            value && <DetailModal/>
          </Box>
        );
      })}
    </Box>
  );
}