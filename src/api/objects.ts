export interface Calender {
  calender_id?: number;
  calender_name: string;
  ical_url: string;
}

export interface CalenderId {
  calender_id: number;
}

export interface ApiErrorResponse {
  error_id: string;
  message: string;
}

export interface CalenderEvent {
  calender_id: number;
  is_show: boolean;
  all_day: boolean;
  start: string;
  end: string;
  event_title: string | undefined;
  description: string | undefined;
  location: string | undefined;
  ical_uid: string | undefined;
  event_id: number | undefined;
}

export interface LsUser {
  user_name?: string;
  user_token: string;
}

export interface Empty {}

export enum ErrorIds {
  USER_NOT_FOUND = "USER_NOT_FOUND",
}
