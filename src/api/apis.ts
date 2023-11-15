import {Calender} from "./objects";
import {fetchJson} from "./fetch";

export function createCalender(calender: Calender) {
    return fetchJson("/api/calender", null, calender, "POST")
}

export function editCalender(calender_id: number, calender: Calender) {
    return fetchJson(`/api/calender/${calender_id}`, null, calender, "PUT")
}
