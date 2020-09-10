/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/no-var-requires */
import { config } from 'dotenv';

config();

import fs from 'fs';
import path from 'path';
import { $log } from '@tsed/common';
import { PlatformExpress } from '@tsed/platform-express';
import App from './app';

const key = fs.readFileSync(path.join(__dirname, 'certs', 'key.pem'));
const cert = fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem'));

const bootstrap = async () => {
  try {
    $log.debug('Start server...');
    const platform = await PlatformExpress.bootstrap(App, {
      httpPort: false,
      httpsPort: 5001,
      httpsOptions: {
        cert,
        key,
      },
    });

    await platform.listen();
    $log.debug('Server initialized');
  } catch (error) {
    $log.error(error);
  }
};

bootstrap();
