import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { DataManagementService } from './data-management.service';
import { FakeBackendInterceptor } from './interceptors/fake-backend-interceptor';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ApiService,
    FakeBackendInterceptor,
    DataManagementService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    }
  ]
})
export class ApiModule {}
