const hre = require("hardhat");

async function main() {
  try {
    // Obtener la cuenta del desplegador
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Desplegar el contrato
    const ContractFactory = await hre.ethers.getContractFactory("Lock");

    // Aquí defines el unlockTime, por ejemplo, un año en segundos desde el tiempo actual
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const unlockTime = Math.floor(Date.now() / 1000) + ONE_YEAR_IN_SECS;

    const contract = await ContractFactory.deploy(unlockTime, {
      value: hre.ethers.utils.parseEther("0.1") // Si quieres enviar 1 ether al contrato al desplegarlo
    });

    console.log("Contract deployed to:", contract.address);

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main()
  .then(() => process.exit(0))  // Exit with code 0 if successful
  .catch((error) => {
    console.error(`Unhandled error: ${error.message}`);
    process.exit(1);  // Exit with code 1 if there's an unhandled error
  });
