import { Ratelimit } from "@upstash/ratelimit";
import { Redis} from "@upstash/redis";
import dotEnv from "dotenv";

dotEnv.config();

// create a ratelimiter that allows 10 requests per 20 seconds

const ratelimit = new Ratelimit({
	redis: Redis.fromEnv(),
	limiter: Ratelimit.slidingWindow(10, "20 s"),
});

export default ratelimit;