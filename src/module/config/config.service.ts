import * as dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { appConst } from '../appConst';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const env = process.env.NODE_ENV;
    if (env === appConst.dev) {
      this.envConfig = dotenv.parse(readFileSync('.env'));
    } else if (env === appConst.testing) {
      this.envConfig = dotenv.parse(readFileSync('.env.testing'));
    }
  }

  get(key: string): string {
    const env = process.env.NODE_ENV;
    if (env === appConst.dev || env === appConst.testing) {
      return this.envConfig[key];
    }
    return process.env[key] || '';
  }
}
