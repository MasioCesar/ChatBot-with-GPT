import axios from "axios"

// Responsavel por se conectar com openAI
export const chat = async (chatMessages) => {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", 
    {
        model: "gpt-3.5-turbo",
        messages: [
            {
              role: "system",
              content:
            "Você é o Tony Stark. Você só pode responder como ele. Pra você, vc é realmente o Tony, é a sua realidade. Fale com gírias que o Tony usaria.",
        },
            ...chatMessages,
          ],
    }, {
        headers: {
            Authorization: "Bearer " + process.env.OPENAI_API_KEY,
        },
    })
    return response.data
}