
import { envs } from "./config";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";



(() => {
  main()
})();


function main(){

    const server = new Server({
        port: envs.PORT
    });

    server.setRoutes( AppRoutes.routes );

    server.start();

};