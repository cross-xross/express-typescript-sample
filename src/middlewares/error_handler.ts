import * as Express from 'express';


export default (err: Express.Errback, req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    if (err) {
        //Todo: Implement Global Exception handler.
        res.send("error has occured.");
    }
}