import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get('css/:path')
  getCss(@Param() param: { path: string }, @Res() res: Response): void {
    res.sendFile(join(process.cwd(), `/client/dist/css/${param.path}`));
  }

  @Get('js/:path')
  getJs(@Param() param: { path: string }, @Res() res: Response): void {
    res.sendFile(join(process.cwd(), `/client/dist/js/${param.path}`));
  }
}
