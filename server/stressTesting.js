import http from "k6/http";
import { sleep } from "k6";

export default function() {
  http.get("http://localhost:3010/9992844/reviews");
  sleep(1);
};