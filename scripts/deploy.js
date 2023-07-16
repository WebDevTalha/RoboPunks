const hre = require("hardhat")

async function main() {
    // const currentTimestampInSeconds = Math.round(Date.now() / 1000)
    // const unlockTime = currentTimestampInSeconds + 60

    // const lockedAmount = hre.ethers.parseEther("0.001")

    console.log("Deploying Contract...")

    const RoboPunksNFT = await hre.ethers.deployContract("RoboPunksNFT")

    await RoboPunksNFT.waitForDeployment()

    console.log(`RoboPunksNFT deployed to ${RoboPunksNFT.target}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})

// const hre = require("hardhat")

// async function main() {
//     // const currentTimestampInSeconds = Math.round(Date.now() / 1000)
//     // const unlockTime = currentTimestampInSeconds + 60

//     // const lockedAmount = hre.ethers.parseEther("0.001")

//     const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT")

//     const roboPunksNFT = await RoboPunksNFT.deploy()
//     await roboPunksNFT.deployed()

//     console.log(`RoboPunksNFT deployed to ${roboPunksNFT.address}`)
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//     console.error(error)
//     process.exitCode = 1
// })
