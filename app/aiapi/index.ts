import { google } from "@ai-sdk/google";
import { wrapLanguageModel } from "ai";


export const geminiProModel = wrapLanguageModel({
  model: google("gemini-1.5-pro-002"),
  middleware: []
});

export const geminiFlashModel = wrapLanguageModel({
  model: google("gemini-1.5-flash-002"),
  middleware: [] // Add appropriate middleware here
});
