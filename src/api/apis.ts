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
function postUser(firebaseUser) {
  const name = firebaseUser?.displayName;
  const id = firebaseUser?.uid;
  return fetchJson("/api/user", undefined, { name, id }, "POST");
}

const getUser = async () => {
  const firebaseUser = auth.currentUser;
  if (!firebaseUser) return null;
  const id = firebaseUser.uid;
  const user = await fetchJson(`/api/user/${id}`, undefined, "GET");
  if (user) return user;
  else return postUser(firebaseUser);
};
