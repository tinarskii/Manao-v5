import { startSetupServer } from "./index";
import open from "open";
startSetupServer();
await open("http://localhost:4000");
