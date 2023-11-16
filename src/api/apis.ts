import { Calender } from "./objects";
import { fetchJson } from "./fetch";
import { auth } from "../utils/firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";

export function createCalender(calender: Calender) {
  return fetchJson("/api/calender", undefined, calender, "POST");
}

export function editCalender(calender_id: number, calender: Calender) {
  return fetchJson(`/api/calender/${calender_id}`, undefined, calender, "PUT");
}
export function getCalendar(user_id: string) {
  return fetchJson(`/api/user/${user_id}`, undefined, "GET");
}

export function getUser(uid) {
  const user = fetchJson(`/api/user/${uid}`, undefined, "GET");
  if (!user) {
    postUser(uid);
  }
}
function postUser(uid) {
  const name = uid?.displayName;
  return fetchJson("/api/user", undefined, { name, uid }, "POST");
}
