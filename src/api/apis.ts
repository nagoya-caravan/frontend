import axios from "axios";
import useSWRMutation, {SWRMutationResponse} from "swr/mutation";
import {Arguments} from "swr";
import {ApiErrorResponse, Calender, CalenderId} from "./objects";


export const useCreateCalender = createHook<CalenderId, Calender>("/api/calender", createPost());

function createPost<RESULT>(): (url: string | URL, {arg}: { arg: Arguments }) => Promise<RESULT> {

    return async (url: string, {arg}: { arg: Arguments }) => {
        const res = await axios.post<RESULT>(url, arg)
        return res.data
    }
}

function createPut<RESULT>(): (url: string | URL, {arg}: { arg: Arguments }) => Promise<RESULT> {

    return async (url: string, {arg}: { arg: Arguments }) => {
        const res = await axios.put<RESULT>(url, arg)
        return res.data
    }
}

function createHook<RESULT, BODY = never>(
    path: string,
    fetcher: (url: string, {arg}: { arg: Arguments }) => Promise<RESULT>
): () => SWRMutationResponse<RESULT, ApiErrorResponse, string, BODY> {

    return () => {
        return useSWRMutation(path, fetcher)
    }
}