require('dotenv').config();
const { ethers } = require('ethers');

async function main() {
    // Crear una instancia del proveedor usando la URL del nodo
    const provider = new ethers.providers.JsonRpcProvider(process.env.SEPOLIA_URL);

    // Verificar la conexión
    try {
        const network = await provider.getNetwork();
        console.log(`Connected to network: ${network.name}`);
    } catch (error) {
        console.error(`Error connecting to the network: ${error.message}`);
    }
}

main();
