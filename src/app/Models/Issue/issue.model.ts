export interface Issue {
    concern_title?: string,
    concern_description?: string,
    assignee_id?: number | null,
    status_priority?: string,
    ticket_status?: string,
    ticket_no?: string,
    date_start?: Date,
    date_hold?: Date,
    date_complete?: Date,
    date_resume?: Date,
    created_at?: Date,
}
