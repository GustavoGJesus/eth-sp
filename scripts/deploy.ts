const deploy = async () => {
  
  //Compilando Contrato
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
   
  //Inserindo ETH
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.001"),
  });

  //Deploy
  await waveContract.deployed();

  console.log("Endereço do WavePortal: ", waveContract.address);

  };
  
  const runDeploy = async () => {
    try {
      await deploy();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  runDeploy();