import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptor } from "./error.interceptor";
import { BusyInterceptor } from "./busy.interceptor";

export const httpInterceptorsProviders = [ 
    {provide: HTTP_INTERCEPTORS, useClass: BusyInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
]