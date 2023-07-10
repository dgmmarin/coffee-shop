import { config } from 'dotenv';
import { SetMetadata } from '@nestjs/common';

config();
const { BIT_NFT_API_SECRET } = process.env;

export const jwtConstants = {
  secret: BIT_NFT_API_SECRET,
};


export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
