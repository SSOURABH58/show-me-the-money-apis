import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import 'dotenv/config';
import { map } from 'rxjs';

@Injectable()
export class BalanceSheetService {
  constructor(private readonly httpService: HttpService) {}
  getBalanceSheet(): any {
    try {
      return this.httpService
        .get(process.env.XERO_API)
        .pipe(map((res: AxiosResponse) => res.data));
    } catch (err) {
      console.log(err);
      return 'something went wrong';
    }
  }
}
