export class CreateTimesheetInput {

    employeeNumber: number;
    tsEndTime: string;
    tsStartTime: string;
    timeSheetId: string;
    tsType: number;
    tsDate: string;
    projectId: number | null;
    remarks: string;

}