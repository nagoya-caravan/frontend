import axios from "axios";
import useSWRMutation, {SWRMutationResponse} from "swr/mutation";
import {Arguments} from "swr";
import {ApiErrorResponse, CalenderId, Empty} from "./objects";


function useCreateCalender() {
    return useApi<CalenderId>("/api/calender", post)
}

function useEditCalender(calender_id: number) {
    return useApi<Empty>(`/api/calender/${calender_id}`, put)
}

async function post<RESULT>(url: string, {arg}: { arg: Arguments }): Promise<RESULT> {
    const res = await axios.post<RESULT>(url, arg)
    return res.data

}

async function put<RESULT>(url: string, {arg}: { arg: Arguments }): Promise<RESULT> {
    const res = await axios.put<RESULT>(url, arg)
    return res.data
}


function useApi<RESULT, BODY = never>(
    path: string,
    fetcher: (url: string, {arg}: { arg: Arguments }) => Promise<RESULT>
): SWRMutationResponse<RESULT, ApiErrorResponse, string, BODY> {
    return useSWRMutation(path, fetcher)
}
