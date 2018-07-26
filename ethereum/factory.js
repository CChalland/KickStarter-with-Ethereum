import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xE21fD230F1a0610e443D760DBA1BB9CE36854585'
);

export default instance;