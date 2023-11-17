export interface Calender {
  calender_id?: number;
  calender_name: string;
  ical_url: string;
  user_token: string;
}

export interface CalenderId {
  calender_id: number;
}

export interface ApiErrorResponse {
  error_id: string;
  message: string;
}

export interface LsUser {
  user_name?: string;
  user_token: string;
}

export interface Empty {}

export enum ErrorIds {
  USER_NOT_FOUND = "USER_NOT_FOUND",
}
