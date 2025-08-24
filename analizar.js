/**
 * ESTE ARCHIVO DEBE ESTAR DENTRO DE UNA CARPETA LLAMADA /api EN TU PROYECTO
 *
 * Esta es tu función serverless (proxy). Se ejecuta en un servidor seguro, no en el navegador.
 * Su trabajo es recibir la petición de tu PWA, añadir de forma segura tu clave API
 * y luego hacer la llamada a la API de Google.
 */
export default async function handler(request, response) {
  // 1. Solo permitir peticiones POST
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  // 2. Obtener el prompt que envió la PWA desde el cuerpo de la petición
  const { prompt } = request.body;

  if (!prompt) {
    return response.status(400).json({ message: 'No prompt provided' });
  }

  // 3. Obtener la clave API de forma segura desde las variables de entorno del servidor
  // NUNCA se expone al público.
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return response.status(500).json({ message: 'API key not configured on the server' });
  }

  // 4. Preparar y realizar la llamada a la API de Google Gemini
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
  
  const payload = {
    contents: [{
      role: "user",
      parts: [{ text: prompt }]
    }]
  };

  try {
    const geminiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error('Google API Error:', errorText);
      return response.status(geminiResponse.status).json({ message: 'Error from Google API', details: errorText });
    }

    const data = await geminiResponse.json();
    
    // 5. Devolver la respuesta de la IA a tu PWA
    response.status(200).json(data);

  } catch (error) {
    console.error('Internal Server Error:', error);
    response.status(500).json({ message: 'Internal Server Error', details: error.message });
  }
}
