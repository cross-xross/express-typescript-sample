import Express from 'express';
import path from 'path';
import { MainRoute } from './routers/main';
import { ApiRoute } from './routers/api';
import ExceptionHandler from './middlewares/error_handler';

const app= Express();
app.set('views', 'dist/views');
app.set('view engine', 'pug');
app.use("/", new MainRoute().create());
app.use("/api", new ApiRoute().create());
app.use(ExceptionHandler);

app.listen(3000, () => {
  console.log("Express application starts on port 3000.");
});
