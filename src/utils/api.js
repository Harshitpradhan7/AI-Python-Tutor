import axios from 'axios'
import axiosRetry from 'axios-retry'


export const getAIResponse = async (message, apiKey) => {
    
    try{
        const response = await axios({
            url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            method: 'post',
            data: {
                "contents": [{
                    "parts": [{ text: `You are a Python coding tutor for kids. Please explain in a simple and engaging way: ${message}`  }]
                }]
            }
            },
        );
        // const ans = response['data']['candidates'][0]['content']['parts'][0]['text'];
        const ans = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;
        // ans = marked(ans)
        console.log(ans);
        return ans;

    }catch(error){
        console.error("Error fetching AI response:", error);
        if (error.response && error.response.status === 429) {
            return 'Rate limit exceeded. Please try again later.';
        }
        if (error.response && error.response.status === 401) {
            return 'Unauthorized. Please check your API key.';
        }
        return 'Check API Keys';
    }
}