import { GoogleGenAI } from "@google/genai";
import { OPEN_API_KEY } from "./constant";

const GoogleGenAIS = OPEN_API_KEY ? new GoogleGenAI({
  apiKey: OPEN_API_KEY,
}) : null;

export default GoogleGenAIS;




