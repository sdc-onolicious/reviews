import http from "k6/http";
import { check, sleep } from "k6";

const randomId = () => parseInt(Math.random() * 10000000)
// export let options = {
//   rps: 600
// };

export default function() {
  // let res = http.get(`http://localhost:3010/${randomId()}/reviews`);
  let res = http.get(`http://127.0.0.1/${randomId()}/reviews`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 2000
  });
  // sleep(1);
};