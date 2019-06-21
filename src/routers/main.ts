import * as Express from 'express';

export class MainRoute {

    /**
     * ルーターを返却する
     */
    public create(): Express.Router {
        return Express.Router().get("/", (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
            res.send("Hello world!!!!!");
        });
    }
}
