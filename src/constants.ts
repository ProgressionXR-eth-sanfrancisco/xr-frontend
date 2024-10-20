import { AIRDAO, SKALE_NEBULA_TESTNET } from "./utils/chains";

export const FITNESS_ADDRESS = "0x38e66af679D2B0a4C12a5f0Ba3a3dCeA13d10b87";

export const FITNESS_ADDRESS_MAPPING = {
  [SKALE_NEBULA_TESTNET.id]: FITNESS_ADDRESS,
  [AIRDAO.id]: "0xF99b791257ab50be7F235BC825E7d4B83942cf38",
};
export const MUSD = {
  [SKALE_NEBULA_TESTNET.id]: "0x309222b7833D3D0A59A8eBf9C64A5790bf43E2aA",
  [AIRDAO.id]: "0x309222b7833D3D0A59A8eBf9C64A5790bf43E2aA",
};
