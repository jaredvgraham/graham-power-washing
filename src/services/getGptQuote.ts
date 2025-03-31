import OpenAI from "openai";
export const openai = new OpenAI({
  apiKey: process.env.GPTKEY as string,
});

export const getGptQuote = async (imageUrls: string[], options: string[]) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: [
            {
              type: "text",
              text: "You are a power washing company. You have a percise method of calculating a job quote after learning from the prices I will give you.",
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "image_url",
              image_url: { url: "https://grahampowerwashing.com/img1.jpeg" },
            },
            {
              type: "text",
              text: `Here are the prices I charge for different jobs: This house only wash is $600 because its vinyl siding if it were cedar shake it would be 800, but if they want a deck depedning on the size and material it can differ. For example a 10x10 wood deck and floor by itself would be $300 but since they are doing the house and deck it would only be $200. If the deck was PVC Railings and wood floor it would be 100 less for each. If the was all composite it would be $50 less than the wood and pvc railings. Now these prices scale up and down depending on size $100 per 5 feet. This same philosiphy applied to fences wood or pvc its $10 per pannel pvc and $15 for wood. You can take a similar approach to patios and driveways. For example a 10x10 patio would be $200 but if they are doing the house it would be $100.    `,
            },
            {
              type: "text",
              text: `now here are just some more examples now that you have the idea`,
            },
            {
              type: "text",
              text: `now here are just some more examples now that you have the idea. This next one is $400 for the house`,
            },
            {
              type: "image_url",
              image_url: {
                url: "https://www.grahampowerwashing.com/ai-1.png",
              },
            },
            {
              type: "text",
              text: `This next one is $300 for the house`,
            },
            {
              type: "image_url",
              image_url: {
                url: "https://www.grahampowerwashing.com/ai-2.png",
              },
            },
            {
              type: "text",
              text: `This next one is $450 for the house`,
            },
            {
              type: "image_url",
              image_url: {
                url: "https://www.grahampowerwashing.com/ai-3.png",
              },
            },
            {
              type: "text",
              text: `This next one is $425 for the house a little bit more expensive because of the cedar shake`,
            },
            {
              type: "image_url",
              image_url: {
                url: "https://www.grahampowerwashing.com/ai-4.png",
              },
            },
            {
              type: "text",
              text: `This entire patio walls fireplace and all is 750 without the back wall it would be 500`,
            },
            {
              type: "image_url",
              image_url: {
                url: "https://www.grahampowerwashing.com/ai-5.png",
              },
            },
            {
              type: "text",
              text: `This big wooden deck is 900 because of the size if it composite it would be 500`,
            },
            {
              type: "image_url",
              image_url: {
                url: "https://www.grahampowerwashing.com/ai-6.png",
              },
            },
            {
              type: "text",
              text: `This house and wood deck is 800`,
            },
            {
              type: "image_url",
              image_url: {
                url: "https://www.grahampowerwashing.com/ai-7.png",
              },
            },
            {
              type: "text",
              text: `This house and wood deck is 450`,
            },
            {
              type: "image_url",
              image_url: {
                url: "https://www.grahampowerwashing.com/ai-8.png",
              },
            },
            {
              type: "text",
              text: `This house only would be 650 but with the deck it would be 900 but if the deck was all wood it would be 1300 if they also wanted the wall bellow the deck and those stairs on the right side of the house it would be 2000`,
            },
            {
              type: "image_url",
              image_url: {
                url: "https://www.grahampowerwashing.com/ai-9.png",
              },
            },
          ],
        },
        {
          role: "system",
          content:
            "Okay I am now ready to give you a quote for the images you provide.",
        },

        {
          role: "user",
          content: [
            {
              type: "text",
              text: `Here are the images I have for you to quote`,
            },

            {
              type: "text",
              text: `Please provide a quote for the images I provided. Only give the price based on the following options selected: ${options.join(
                " "
              )} You will respond in the following format: quote: $1000. No other text, no explanations, just the quote.`,
            },
          ],
          ...imageUrls.map((url) => ({
            content: [{ type: "image_url", image_url: { url } }],
          })),
        },
      ],
    });

    if (!response.choices[0].message) {
      throw new Error("No message in response");
    }

    console.log("GPT Response:", response.choices[0].message.content);
    console.log("Tokens:", response.usage?.total_tokens);

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching GPT quote:", error);
    throw error;
  }
};
