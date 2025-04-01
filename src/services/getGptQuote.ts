import OpenAI from "openai";
export const openai = new OpenAI({
  apiKey: process.env.GPTKEY as string,
});

export const getGptQuote = async (
  imageUrls: string[],
  options: string[],
  squareFootage: number,
  town: string
) => {
  try {
    const trainingExamples = [
      {
        url: "https://grahampowerwashing.com/img1.jpeg",
        description:
          "This house only wash is $600 because it's vinyl siding. If it were cedar shake, it would be $700.",
      },
      {
        url: "https://www.grahampowerwashing.com/ai-1.png",
        description: "$400 for the house.",
      },
      {
        url: "https://www.grahampowerwashing.com/ai-2.png",
        description:
          "$300 for the house. Small houses are $300. Small houses are <1000 sqft.",
      },
      {
        url: "https://www.grahampowerwashing.com/ai-3.png",
        description: "$450 for the house.",
      },
      {
        url: "https://www.grahampowerwashing.com/ai-4.png",
        description:
          "$425 for the house — slightly more expensive due to cedar shake.",
      },
      {
        url: "https://www.grahampowerwashing.com/ai-5.png",
        description:
          "$750 for full patio with walls and fireplace. Without the back wall, it would be $500.",
      },
      {
        url: "https://www.grahampowerwashing.com/ai-10.png",
        description:
          "$450 for the house. If it were cedar shake, it would be $500. This house that is 3900 sqft is cheaper because its in Plymouth.",
      },
      {
        url: "https://www.grahampowerwashing.com/ai-6.png",
        description:
          "$900 for the big wooden deck. If it were composite, it would be $500.",
      },
      {
        url: "https://www.grahampowerwashing.com/ai-7.png",
        description: "$800 for house + wood deck.",
      },
      {
        url: "https://www.grahampowerwashing.com/ai-8.png",
        description: "$450 for house + wood deck.",
      },
      {
        url: "https://www.grahampowerwashing.com/ai-9.png",
        description:
          "$650 for the house, $900 with the deck. All wood deck = $1300. Wall below deck + side stairs = $2000 total.",
      },
    ];

    const messages: any[] = [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: "You are a power washing expert. Use these examples to learn how the company quotes jobs based on house material, deck size, siding type, and extras like patios and stairs. A quick thing to know are box style houses run cheaper because they are easy, house shape and complexity can change pricing, Big houses (4000 sqft+) are usually 600+ some neighborhood houses are above 3500 sqft but mainly box-like and they can be done around $500, and reasonable sized composite decks (10x10) or smaller are only $70-$50 if they are done with the house. Same with small patios (5x5).",
          },
        ],
      },
      {
        role: "user",
        content: trainingExamples.flatMap((ex) => [
          { type: "image_url", image_url: { url: ex.url } },
          { type: "text", text: ex.description },
        ]),
      },
      {
        role: "system",
        content:
          "You’ve learned the quoting style. Use the same logic moving forward.",
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "If cedar shake is painted, treat it like vinyl siding. Now, here are the new images to quote:",
          },
          ...imageUrls.map((url) => ({
            type: "image_url",
            image_url: { url },
          })),
          {
            type: "text",
            text: `${
              town.toLowerCase() === "plymouth"
                ? "This house is located near me so give a better price"
                : ""
            } Only give a quote for the selected options: ${
              squareFootage ? `Home: ${squareFootage} sqft ` : ""
            }

     ${options.join(", ")}. Respond in this format exactly:

quote: $XXXX  
House Color: ___  
How many images were shown: ___  
Why: [reason].  
|| No other text, no explanations, just the quote.`,
          },
        ],
      },
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages,
    });

    const content = response.choices[0].message?.content;
    if (!content) throw new Error("No message in response");

    console.log("GPT Response:", content);
    console.log("Tokens:", response.usage?.total_tokens);

    return content;
  } catch (error) {
    console.error("Error fetching GPT quote:", error);
    throw error;
  }
};
