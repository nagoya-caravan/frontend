import { Calender } from "./objects";
import { fetchJson } from "./fetch";

export function createCalender(calender: Calender) {
  return fetchJson("/api/calender", undefined, calender, "POST");
}

export function editCalender(calender_id: number, calender: Calender) {
  return fetchJson(`/api/calender/${calender_id}`, undefined, calender, "PUT");
}
export function getCalendar(user_id: string) {
  return fetchJson(`/api/user/${user_id}`, undefined, "GET");
}

export async function getUser(uid) {
  try {
    const user = await fetchJson(`/api/user/${uid}`, undefined, "GET");
    if (!user) {
      postUser(uid);
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

async function postUser(uid) {
  try {
    const body = { uid: uid, name: name };
    return await fetchJson("/api/user", undefined, body, "POST");
  } catch (error) {
    console.error("Error posting user:", error);
  }
}
