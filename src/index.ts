import Express from 'express';
import { MainRoute } from './routers/main';
import ExceptionHandler from './middlewares/error_handler';

const app= Express();

app.use("/", new MainRoute().create());
app.use(ExceptionHandler);

app.listen(3000, () => {
  console.log("Express application starts on port 3000.");
});
