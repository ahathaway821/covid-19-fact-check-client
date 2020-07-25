import axios from 'axios';

const getSimilarClaims = (claim) => {
    return axios.get(`https://88rrgid4rl.execute-api.us-west-2.amazonaws.com/similar-claims?claim=${claim}`)
}

export default getSimilarClaims;

