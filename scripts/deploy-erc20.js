const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying ERC20 token...", deployer.address);

    console.log("Account balance: ", (await deployer.getBalance()).toString());

    const erc20Contract = await ethers.getContractFactory("ERC20Basic");
    const deployedContract = await erc20Contract.deploy(1000);

    console.log("Deployed ERC20 token: ", deployedContract.address);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});