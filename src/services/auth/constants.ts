import { config } from 'dotenv';

config();
const { BIT_NFT_API_SECRET } = process.env;

export const jwtConstants = {
  secret: BIT_NFT_API_SECRET,
};
