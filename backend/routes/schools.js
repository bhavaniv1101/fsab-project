const express = require('express');
const router = express.Router();
const firestore = require('../firebase');

// Get all schools
router.get('/', async (req, res) => {
    try {
        const schoolsRef = firestore.collection('schools');
        const snapshot = await schoolsRef.get();
        const schoolsList = snapshot.docs.map(doc => doc.data());
        res.json(schoolsList);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch schools' });
    }
});

module.exports = router;
