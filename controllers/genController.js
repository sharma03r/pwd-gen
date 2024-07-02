import Anthropic from "@anthropic-ai/sdk";

export const generateQuote = async (req, res, next) => {
  const anthropic = new Anthropic({
    apiKey: process.env.CLAUDE_API_KEY,
  });
  const mapping = {
    a: "@",
    b: "B",
    c: "(",
    d: "D",
    e: "3",
    f: "F",
    g: "9",
    h: "H",
    i: "!",
    j: "J",
    k: "K",
    l: "1",
    m: "M",
    n: "N",
    o: "0",
    p: "P",
    q: "Q",
    r: "R",
    s: "$",
    t: "7",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "2",
  };
  const { message } = req.body;

  try {
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content:
            "Generate exactly one 12-letter word. No punctuation, no additional text.",
        },
      ],
    });
    console.log("test");
    console.log(response);
    const text = response.content[0].text;
    const lowerCaseSentence = text.toLowerCase();
    const numCharToReplace = Math.floor(
      lowerCaseSentence.replace(/ /g, "").length * 0.4
    );
    let indicesToReplace = [];
    while (indicesToReplace.length < numCharToReplace) {
      let index = Math.floor(Math.random() * lowerCaseSentence.length);
      if (
        lowerCaseSentence[index] !== " " &&
        !indicesToReplace.includes(index)
      ) {
        indicesToReplace.push(index);
      }
    }
    let password = "";
    for (let i = 0; i < lowerCaseSentence.length; i++) {
      if (lowerCaseSentence[i] === " ") {
        continue;
      }
      if (indicesToReplace.includes(i) && mapping[lowerCaseSentence[i]]) {
        password += mapping[lowerCaseSentence[i]];
      } else {
        password += lowerCaseSentence[i];
      }
    }
    return res.status(200).json({
      text,
      password,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal error: " + error,
    });
  }
};
