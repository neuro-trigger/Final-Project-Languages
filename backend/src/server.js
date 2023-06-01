import express from 'express'

const app = express();

// Definir el endpoint
app.post('/api/longText', (req, res) => {
    const longText = req.body.text;
    // Haz algo con la cadena de texto larga, por ejemplo, guardarla en una base de datos
    console.log(longText);
    res.json({ message: 'Cadena de texto larga recibida correctamente' });
  });
// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
