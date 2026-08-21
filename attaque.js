import http from 'k6/http'

export const options = {
        scenarios: {
            load: {
                executor: 'constant-arrival-rate',
                rate : 15000,
                timeUnit: '1s',
                duration: '1m',

                preAllocatedVUs: 10,
                maxVUs: 5000
            },
        },
};

export default function () {
    http.get('http://servercrash.example.com');
}