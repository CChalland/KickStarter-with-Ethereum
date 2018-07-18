import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xaC52aC55FD54cF42cB39eD23252D52BF8368Ac2c'
);

export default instance;