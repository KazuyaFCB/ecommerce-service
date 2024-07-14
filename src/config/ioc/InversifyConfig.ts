import 'reflect-metadata';
import { Container } from 'inversify';

import MongoDB from '../database/MongoDB';

// // Create container
const container = new Container({ autoBindInjectable: true, defaultScope: 'Singleton'}); // if use autoBindInjectable, defaultScope, then no need to use @provide and container.bind

// For configuration, mean not injected anywhere in project, just run constructor once, 
// same as @Configuration in Java Spring Boot
container.resolve(MongoDB);

export default container;
