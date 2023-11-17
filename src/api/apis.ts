import { Calender, ErrorIds, LsUser } from "./objects";
import { ApiError, fetchJson } from "./fetch";

export function createCalender(calender: Calender, firebaseUser) {
  return fetchJson(
    "/api/calender",
    undefined,
    calender,
    "POST",
    undefined,
    firebaseUser.uid
  );
}

export function editCalender(calender_id: number, calender: Calender) {
  return fetchJson(`/api/calender/${calender_id}`, undefined, calender, "PUT");
}

export function getCalenderList(calender: Calender, firebaseUser) {
  return fetchJson(
    "/api/calender",
    undefined,
    calender,
    "GET",
    undefined,
    firebaseUser.uid
  );
}

export function refreshCalender(calender_id: number, firebaseUser) {
  return fetchJson(
    `/api/calender/${calender_id}/refresh`,
    undefined,
    undefined,
    "POST",
    undefined,
    firebaseUser.uid
  );
}

export async function getUser(firebaseUser) {
  const user = await fetchJson<LsUser, undefined>(
    `/api/user`,
    undefined,
    undefined,
    "GET",
    undefined,
    firebaseUser.uid
  ).catch((reason) => {
    if (
      (reason as ApiError).apiErrorResponse.error_id == ErrorIds.USER_NOT_FOUND
    ) {
      return undefined;
    }
    throw reason;
  });
  if (!user) {
    await postUser({
      user_name: firebaseUser.displayName,
      user_token: firebaseUser.uid,
    }).catch((reason: ApiError) => {
      console.error(reason.apiErrorResponse.message);
      if (reason.apiErrorResponse.error_id == ErrorIds.USER_NOT_FOUND) {
        return undefined;
      }
      throw reason;
    });
  }
}

async function postUser(user: LsUser) {
  return await fetchJson("/api/user", undefined, user, "POST");
}
