import { Calender } from "./objects";
import { fetchJson } from "./fetch";
import { User } from "./objects";

export function createCalender(calender: Calender) {
  return fetchJson("/api/calender", undefined, calender, "POST");
}

export function editCalender(calender_id: number, calender: Calender) {
  return fetchJson(`/api/calender/${calender_id}`, undefined, calender, "PUT");
}
export function getCalendar(user_id: string) {
  return fetchJson(`/api/user/${user_id}`, undefined, "GET");
}

export async function getUser(firebaseUser) {
  try {
    const user = await fetchJson(
      `/api/user/${firebaseUser.uid}`,
      undefined,
      "GET"
    );
    if (!user) {
      postUser({
        username: firebaseUser.displayName,
        password: firebaseUser.uid,
      });
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

async function postUser(user: User) {
  try {
    return await fetchJson("auth/register", undefined, user, "POST");
  } catch (error) {
    console.error("Error posting user:", error);
  }
}
