import { ContainerModule, interfaces } from 'inversify';
import { App } from './app';
import { ConfigService } from './config/config.service';
import { IConfigService } from './config/config.service.interface';
import { PrismaService } from './database/prisma.service';
import { IPrismaService } from './database/prisma.service.interface';
import { ExceptionFilter } from './errors/exception.filter';
import { IExceptionFilter } from './errors/exception.filter.interface';
import { ILogger } from './logger/logger.interface';
import { LoggerService } from './logger/logger.service';
import { TYPES } from './types';
import { IUserService } from './users/user.service.interface';
import { UsersController } from './users/users.controller';
import { IUserController } from './users/users.controller.interface';
import { UserService } from './users/users.service';

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<ILogger>(TYPES.ILogger).to(LoggerService).inSingletonScope();
  bind<IExceptionFilter>(TYPES.ExceptionFilter).to(ExceptionFilter).inSingletonScope();
  bind<IUserController>(TYPES.UserController).to(UsersController).inSingletonScope();
  bind<IUserService>(TYPES.UserService).to(UserService).inSingletonScope();
  bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
  bind<IPrismaService>(TYPES.PrismaService).to(PrismaService).inSingletonScope();
  bind<App>(TYPES.Application).to(App).inSingletonScope();
});
