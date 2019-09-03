import {Container} from "inversify";
import {CicdViewManagerService} from "./services/CicdViewManager.service";

console.log('Hello Finzy..');
console.log('GoCD build monitor is starting...');
console.log('GoCD build monitor is running...');

const container = new Container({autoBindInjectable: true});

const cicdViewManager = container.get(CicdViewManagerService);

setInterval(async function () {
    await cicdViewManager.updateCicdView();
}, 1000);
