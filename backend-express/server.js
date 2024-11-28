const express = require('express');
const app = express();

// Exemple de route pour '/api/goals'
app.get('/api/goals', (req, res) => {
    res.json([
        {
            name: 'Apprendre React',
            description: 'Approfondir mes compétences en React',
        },
        { name: 'Faire du sport', description: '3 fois par semaine' },
    ]);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Serveur actif sur le port ${PORT}`));
