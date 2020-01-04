import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import SessionStudentController from './app/controllers/SessionStudentController';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';
import CheckinController from './app/controllers/CheckinController';
import Help_orderController from './app/controllers/Help_orderController';
import Answer_Help_orderController from './app/controllers/Answer_Help_orderController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessionStudents', SessionStudentController.store);

routes.get('/students/:student_id/checkins', CheckinController.index);
routes.post('/students/:student_id/checkins', CheckinController.store);

routes.get('/students/:student_id/help-orders', Help_orderController.index);
routes.post('/students/:student_id/help-orders', Help_orderController.store);
routes.delete('/help-orders/:id', Help_orderController.delete);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/students', StudentController.index);
routes.get('/students/:id', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.delete('/students/:id', StudentController.delete);

routes.get('/plans', PlanController.index);
routes.get('/plans/:id', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

routes.get('/registrations', RegistrationController.index);
routes.get('/registrations/:id', RegistrationController.index);
routes.post('/registrations', RegistrationController.store);
routes.put('/registrations/:id', RegistrationController.update);
routes.delete('/registrations/:id', RegistrationController.delete);

routes.get('/help-orders/', Answer_Help_orderController.index);
routes.put('/help-orders/:id/answer', Answer_Help_orderController.update);

export default routes;
