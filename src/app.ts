import { Configuration, Inject, PlatformApplication } from '@tsed/common';
import { GlobalAcceptMimesMiddleware } from '@tsed/platform-express';
import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import { createConnection, ConnectionOptions } from 'typeorm';
// import { getRepository } from 'typeorm';
// import StandUsersControllerCal from './controllers/CalendarCtrl';
const rootDir = __dirname;

@Configuration({
  rootDir,
  acceptMimes: ['application/json'],
})
export default class App {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;

  connectionSettings: ConnectionOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities: [`${__dirname}/services/db/models/*.ts`],
  };

  public async $beforeInit(): Promise<void> {
    await createConnection(this.connectionSettings);
  }

  public async $beforeRoutesInit(): Promise<void> {
    this.app
      .use(GlobalAcceptMimesMiddleware)
      .use(cookieParser())
      .use(compress({}))
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended: true,
        }),
      );
  }
}
