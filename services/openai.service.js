import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL:
    "https://arvancloudai.ir/gateway/models/GPT-5-Mini/N_swQejOZ4DZUqxdll0mkl_BNAAmalW0YH-NIebwMRU9bjNST0zMLOD2wLUD6a0__PQHt6pduA5hzRbg5yvCPnDyvzP3oynyDnKTcq44020d4Djp-EeV0JgKh8k-a_y35B783g7PBuKsbKA8uosZroYe4ogbSOJnLfqdxDB8bLpVnuHRmX7dS8zGTLYV06A4uBNELlh2-YRlbMwhYX2ovHEOhCsStPDo9vJuMIry77ev4aH_rjTYMXOFGrc/v1",
});

export async function callOpenAI(messages) {
  const response = await client.chat.completions.create({
    model: "GPT-5-Mini",
    messages,
    max_tokens: 10000,
    temperature: 0.8,
  });

  return {
    text: response.choices[0].message.content,
  };
}
