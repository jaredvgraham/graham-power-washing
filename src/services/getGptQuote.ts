import OpenAI from "openai";
export const openai = new OpenAI({
  apiKey: process.env.GPTKEY as string,
});

// export const getGptQuote = async (
//   imageUrls: string[],
//   options: string[],
//   squareFootage: number,
//   town: string
// ) => {
//   try {
//     const trainingExamples = [
//       {
//         url: "https://grahampowerwashing.com/img1.jpeg",
//         description:
//           "This house only wash is $600 because it's vinyl siding. If it were cedar shake, it would be $700.",
//       },
//       {
//         url: "https://www.grahampowerwashing.com/ai-1.png",
//         description: "$400 for the house.",
//       },
//       {
//         url: "https://www.grahampowerwashing.com/ai-2.png",
//         description:
//           "$300 for the house. Small houses are $300. Small houses are <1000 sqft.",
//       },
//       {
//         url: "https://www.grahampowerwashing.com/ai-3.png",
//         description: "$450 for the house.",
//       },
//       {
//         url: "https://www.grahampowerwashing.com/ai-4.png",
//         description:
//           "$425 for the house — slightly more expensive due to cedar shake.",
//       },
//       {
//         url: "https://www.grahampowerwashing.com/ai-5.png",
//         description:
//           "$750 for full patio with walls and fireplace. Without the back wall, it would be $500.",
//       },
//       {
//         url: "https://www.grahampowerwashing.com/ai-10.png",
//         description:
//           "$450 for the house. If it were cedar shake, it would be $500. This house that is 3900 sqft is cheaper because its in Plymouth.",
//       },
//       {
//         url: "https://www.grahampowerwashing.com/ai-6.png",
//         description:
//           "$900 for the big wooden deck. If it were composite, it would be $500.",
//       },
//       {
//         url: "https://www.grahampowerwashing.com/ai-7.png",
//         description: "$800 for house + wood deck.",
//       },
//       {
//         url: "https://www.grahampowerwashing.com/ai-8.png",
//         description: "$450 for house + wood deck.",
//       },
//       {
//         url: "https://www.grahampowerwashing.com/ai-9.png",
//         description:
//           "$650 for the house, $900 with the deck. All wood deck = $1300. Wall below deck + side stairs = $2000 total.",
//       },
//     ];

//     const messages: any[] = [
//       {
//         role: "system",
//         content: [
//           {
//             type: "text",
//             text: "You are a power washing expert. Use these examples to learn how the company quotes jobs based on house material, deck size, siding type, and extras like patios and stairs. A quick thing to know are box style houses run cheaper because they are easy, house shape and complexity can change pricing, Big houses (4000 sqft+) are usually 600+ some neighborhood houses are above 3500 sqft but mainly box-like and they can be done around $500, and reasonable sized composite decks (10x10) or smaller are only $70-$50 if they are done with the house. Same with small patios (5x5).",
//           },
//         ],
//       },
//       {
//         role: "user",
//         content: trainingExamples.flatMap((ex) => [
//           { type: "image_url", image_url: { url: ex.url } },
//           { type: "text", text: ex.description },
//         ]),
//       },
//       {
//         role: "system",
//         content:
//           "You’ve learned the quoting style. Use the same logic moving forward.",
//       },
//       {
//         role: "user",
//         content: [
//           {
//             type: "text",
//             text: "If cedar shake is painted, treat it like vinyl siding. Now, here are the new images to quote:",
//           },
//           ...imageUrls.map((url) => ({
//             type: "image_url",
//             image_url: { url },
//           })),
//           {
//             type: "text",
//             text: `${
//               town.toLowerCase() === "plymouth"
//                 ? "This house is located near me so give a better price unless its a small or medium house or dont if its really big (4000sqft+)."
//                 : ""
//             } Only give a quote for the selected options: ${
//               squareFootage ? `Home: ${squareFootage} sqft ` : ""
//             }

//      ${options.join(", ")}. Respond in this format exactly:

// quote: $XXXX
// House Color: ___
// How many images were shown: ___
// Why: [reason].
// || No other text, no explanations, just the quote.`,
//           },
//         ],
//       },
//     ];

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o",
//       messages,
//     });

//     const content = response.choices[0].message?.content;
//     if (!content) throw new Error("No message in response");

//     console.log("GPT Response:", content);
//     console.log("Tokens:", response.usage?.total_tokens);

//     return content;
//   } catch (error) {
//     console.error("Error fetching GPT quote:", error);
//     throw error;
//   }
// };
export const getGptQuote = async (
  imageUrls: string[],
  options: string[],
  squareFootage: number,
  town: string
) => {
  try {
    const messages: any[] = [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: `You are a power washing expert providing job quotes. Base your quote on the provided image(s) and context, considering factors like siding type (vinyl, cedar shake, painted cedar shake treated as vinyl), size/complexity, included items (house, deck, patio, fence, walls, stairs), material (wood, composite/PVC), bundling discounts, and location (Plymouth gets a discount on medium/large jobs unless very large >4000sqft). Small houses (<1000 sqft) are ~$300. Box style houses are often cheaper. Small bundled composite decks/patios can be $50-$70.`,
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Now, here are the new images to quote but if the house is just a big box and 2300-3500sqft the price should be <500 but houses arent made equally is sqft the design matters more and additional decks/patios etc.. usually add at least $100 big decks/additional things can scale up more unless its a very small thing to do:",
          },
          ...imageUrls.map((url) => ({
            type: "image_url",
            image_url: { url },
          })),
          {
            type: "text",
            text: `${
              town.toLowerCase() === "plymouth"
                ? "This house is in Plymouth. If the house looks like the examples for plymouth price accordingly."
                : ""
            }Only give a quote for the selected options: ${
              squareFootage ? `Home: ${squareFootage} sqft` : ""
            }${options.length ? `, ${options.join(", ")}` : ""}.
  
  Respond in this format exactly:
  
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
      model:
        "ft:gpt-4o-2024-08-06:jared-graham:v1-graham-power-washing:BHb2Dhxc",
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
