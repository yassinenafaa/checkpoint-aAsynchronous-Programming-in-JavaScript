// Tâche 01
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Délai de 1 seconde
    }
}

// Exemple d'utilisation
iterateWithAsyncAwait(["Valeur 1", "Valeur 2", "Valeur 3"]);

// Tâche 02
async function awaitCall() {
    console.log("Attente des données...");

    // Simulation d'une API
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Données de l'API récupérées");
        }, 2000); // Simule un délai de 2 secondes
    });

    console.log(data);
}

// Exemple d'utilisation
awaitCall();


// Tâche 03
async function awaitCallWithErrorHandling() {
    try {
        console.log("Attente des données...");

        // Simulation d'une API
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simule une erreur aléatoire
                const success = Math.random() > 0.5;
                if (success) {
                    resolve("Données de l'API récupérées");
                } else {
                    reject(new Error("Échec de la récupération des données"));
                }
            }, 2000); // Simule un délai de 2 secondes
        });

        console.log(data);
    } catch (error) {
        console.error("Erreur :", error.message);
    }
}

// Exemple d'utilisation
awaitCallWithErrorHandling();
