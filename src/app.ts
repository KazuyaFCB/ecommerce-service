import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import config from 'config';
import * as dotenv from "dotenv";
dotenv.config();

import commonRouter from './config/route/CommonRoute';
import { errorHandler } from './handler/ErrorHandler';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.setMiddlewares();
        this.setRoutes();
        this.setErrorHandler();
    }

    private setMiddlewares() {
        this.app.use(helmet());
        this.app.use(compression());
        //this.app.use(morgan('dev'));
        this.app.use(morgan('combined'));

        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cookieParser());
        this.app.use(express.static('public'));

        this.app.use(cors({
            origin: '*',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
        }));
        this.app.disable('x-powered-by');

        this.app.use(express.json());
    }

    private setRoutes() {
        this.app.use(commonRouter);
    }

    private setErrorHandler() {
        this.app.use(errorHandler);
    }

    public start() {
        const PORT = config.get(`${process.env.NODE_ENV}.server.port`) || 3000;
        //const PORT = 8080;
        const server = this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
        process.on("SIGINT", () => {
            server.close(() => {
                console.log("Server closed");
                process.exit(0);
            });
        });
    }
}

export default App;
