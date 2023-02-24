import React, { useState } from 'react';
import axios from 'axios';





const Translation = () => {



const [text, setText] = useState('');
const [translatedText, setTranslatedText] = useState('');





const handleTranslate = async () => {
    const targetLang = 'FR'; // French
    const translated = await translateText(text, targetLang);
    setTranslatedText(translated);
  };
  const translateText = async (text, targetLang) => {
    const apiKey = '1b5bd459-443c-8e16-65fa-445409b726c2';
    const url = `https://api.deepl.com/v2/translate?text=${text}&target_lang=${targetLang}&auth_key=${apiKey}`;
    try {
      const response = await axios.post(url);
      const translatedText = response.data.translations[0].text;
      return translatedText;
    } catch (error) {
      console.error(error);
    }
  };
  


    return (
        <div>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
    <button onClick={handleTranslate}>Translate</button>
    <p>{translatedText}</p>
        </div>
    );
}

export default Translation;
