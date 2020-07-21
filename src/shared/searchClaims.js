import axios from "axios";

let isLocal = process.env.IS_LOCAL ?? false;
let SEARCH_URI = ''
let config = {};

isLocal = false;

if (isLocal) {
  const HOST = process.env.ES_HOST ?? 'http://localhost:9200/';
  SEARCH_URI = `${HOST}claim-match/_search`;
}
else {
  SEARCH_URI = 'https://dth721wco0.execute-api.us-west-2.amazonaws.com/dev';
  config = {
    headers: {
      'x-api-key': 'Atw9UJtWiftiOggtm5HnauIs2lzQXsI4yzpUwTmf',
      'Content-Type': 'application/json'
    }
  }
}

const searchClaims = (query) => {
    return axios.post(SEARCH_URI, {
        "query": {
            "match": {
            "claim": {
                "query": query,
                "operator": "or",
                "fuzziness": 1
            }
            }
        },
        "sort": ["_score", {"date": "desc"}]
    }, config)
    .then(res => {  
        const body = isLocal ? res.data : JSON.parse(res.data.body)
        const results = body.hits.hits.map((i) => ({
            claim: i._source.claim,
            claim_source: i._source.claim_source,
            label: i._source.label,
            date: i._source.date,
            explanation: i._source.explanation,
            clean_claim: i._source.clean_claim,
            source: i._source.source,
            source_label: i._source.source_label,
            fact_check_url: i._source.fact_check_url,
            relevance_score: i._score
        }));

        return results;
    })
}

export default searchClaims;