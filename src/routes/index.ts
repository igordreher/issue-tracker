import { Router } from 'express';
import issuesRoutes from './issuesRoutes';
import usersRoutes from './usersRoutes';
import projectsRoutes from './projectsRoutes';

const router = Router();

router.use(issuesRoutes);
router.use(usersRoutes);
router.use(projectsRoutes);

export default router;