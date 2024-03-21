import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();
const config = {
  secret_jwt: process.env.SECRET,
  expire_jwt: process.env.EXPIRE_JWT,
};

export default registerAs('appConfig', () => config);
