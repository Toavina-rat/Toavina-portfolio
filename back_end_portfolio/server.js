const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Configuration CORS pour Vite (port 5173)
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true
}));

app.use(express.json());

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Vérification de la connexion email
transporter.verify((error, success) => {
    if (error) {
        console.log('❌ Erreur de configuration email:', error);
    } else {
        console.log('✅ Serveur email prêt à envoyer des messages');
    }
});

// Route de test
app.get('/api/test', (req, res) => {
    res.json({
        success: true,
        message: '✅ Serveur backend fonctionne',
        port: 5000,
        frontend: 'http://localhost:5173'
    });
});

// Route d'envoi d'email
app.post('/api/send-email', async(req, res) => {
    try {
        const { name, email, message } = req.body;

        console.log('📨 Requête reçue du frontend:', { name, email, message });

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                error: 'Tous les champs sont requis'
            });
        }

        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            replyTo: email,
            subject: `Nouveau message de ${name}`,
            html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Envoyé depuis votre portfolio</p>
      `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email envoyé:', info.messageId);

        res.json({ success: true, message: 'Email envoyé avec succès' });

    } catch (error) {
        console.error('❌ Erreur:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Gestion des routes non trouvées
app.use((req, res) => {
    res.status(404).json({
        error: 'Route non trouvée',
        availableRoutes: ['GET /api/test', 'POST /api/send-email']
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Backend sur http://localhost:${PORT}`);
    console.log(`📝 Routes:`);
    console.log(`   - GET  http://localhost:${PORT}/api/test`);
    console.log(`   - POST http://localhost:${PORT}/api/send-email`);
    console.log(`🔌 CORS autorisé pour: http://localhost:5173`);
});