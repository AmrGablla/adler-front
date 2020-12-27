export class ApiResponse<T = any> {
  pageNumber: number;
  pageSize: number;
  succeeded: boolean;
  message: string;
  errors: string;
  data: T;
}
