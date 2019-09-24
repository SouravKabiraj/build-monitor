import {Container} from "inversify";
import {CicdViewManagerService} from "./services/CicdViewManager.service";
import {FileLogUtility} from "./utility/file-log.utility";

FileLogUtility.log('Hello Finzy..');
FileLogUtility.log('GoCD build monitor is starting...');
FileLogUtility.log('GoCD build monitor is running...');

const container = new Container({autoBindInjectable: true});

const cicdViewManager = container.get(CicdViewManagerService);

setInterval(async function () {
    await cicdViewManager.updateCicdView();
}, 5000);
