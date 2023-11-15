export interface Calender {
    calender_id?: number
    calender_name: string
    ical_url: string
}

export interface CalenderId {
    calender_id: number
}

export interface ApiErrorResponse {
    error_id: string,
    message: string
}

export interface Empty {
}