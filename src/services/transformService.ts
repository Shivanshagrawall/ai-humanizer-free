
// This would be a real API service in a production application
// Here we're just creating a skeleton to demonstrate the structure
import { GoogleGenerativeAI } from "@google/generative-ai";
export interface TransformRequest {
  text: string;
  maxWords?: number;
}

export interface TransformResponse {
  transformedText: string;
  originalCharCount: number;
  transformedCharCount: number;
}

// In a real application, this would call the Gemini API
// For this demo, we're mocking the functionality
// export const transformText = async (request: TransformRequest): Promise<TransformResponse> => {
//   try {
//     const apiKey = import.meta.env.VITE_GEMINI_API_KEY;;
    
//     if (!apiKey) {
//       throw new Error("API key not found");
//     }

//     const genAI = new GoogleGenerativeAI(apiKey);
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });

//     const prompt = `Humanize the following text, making it sound more natural and engaging while preserving its original meaning and structure:

// ${request.text}

// Guidelines:
// - Maintain the original intent and key information
// - Improve readability and conversational tone
// - Preserve any existing lists, headings, or formatting
// - Do not add or remove substantive content
// - Limit response to ${request.maxWords || 1000} words`;

//     const result = await model.generateContent(prompt);
//     const humanizedText = result.response.text();

//     return {
//       transformedText: humanizedText,
//       originalCharCount: request.text.length,
//       transformedCharCount: humanizedText.length
//     };
//   } catch (error) {
//     console.error("Error transforming text:", error);
//     throw error;
//   }
// };

export const transformText = async (request: TransformRequest): Promise<TransformResponse> => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      throw new Error("API key not found");
    }

    const prompt = `Humanize the following text, making it sound more natural and engaging while preserving its original meaning and structure:

${request.text}

Guidelines:
Rework the input text: Rewrite the text so that it keeps the original meaning and key details intact.

Use different words: Feel free to change the words, but ensure the meaning remains the same.

Preserve structure: Keep all formatting elements like lists, headings, and other structural cues unchanged.

Avoid adding or removing content: Do not include any extra information or remove anything essential to the text.

No extra commentary: Only provide the transformed text. No explanations, notes, or additional comments.

Maintain language: The final result should be in the same language as the input text.

Word count: The transformed text should not exceed the original word count by more than 5%.

Incorporate minor errors: Introduce a few grammar mistakes and inconsistencies to make the text feel more human-generated. 

The final result should be in the same language as the input and should not exceed ${request.maxWords || 1000} words`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      })
    });

    const data = await response.json();

    if (!data.candidates || data.candidates.length === 0) {
      throw new Error("No response from Gemini API");
    }

    const humanizedText = data.candidates[0].content.parts[0].text;

    return {
      transformedText: humanizedText,
      originalCharCount: request.text.length,
      transformedCharCount: humanizedText.length
    };
  } catch (error) {
    console.error("Error transforming text:", error);
    throw error;
  }
};


// Guidelines:
// - Maintain the original intent and key information
// - Improve readability and conversational tone
// - Preserve any existing lists, headings, or formatting
// - Do not add or remove substantive content
// - Limit response to ${request.maxWords || 1000} words
// - Only the tranformed text should be returned, no other text or explanation or comments
// - the response should be in the same language as the input text
// - the response words limit should be 10% more than the input text words limit


// You are a skilled human editor, who specialize in making text sound more natural and engaging. Your task is to rework the input text, so it keeps the same meaning and all important details, but with a more human touch. Feel free to use differents words, but as long as the meaning stay the same. Be sure to keep things like lists, headings, and other formats intact. Don’t add extra info, and don’t remove anything crucial. Only the transformed text should be returned, no extra explanations or notes. The final result should be in the same language as the input and should not exceed ${request.maxWords || 1000} words, but you can let it be upto 5% longer than the original word count. And remember, throw in a few grammar mistakes and inconsistencies to make it feel more like it’s written by a person.`