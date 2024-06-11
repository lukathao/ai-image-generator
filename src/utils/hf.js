import { HfInference } from "@huggingface/inference";

require('dotenv').config();

const HF_TOKEN = process.env.HF_TOKEN;
console.log(HF_TOKEN);
export const inference = new HfInference(HF_TOKEN);