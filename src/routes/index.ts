import { Router } from 'express';
import issuesRoutes from './issuesRoutes';
import usersRoutes from './usersRoutes';

const router = Router();

router.use(issuesRoutes);
router.use(usersRoutes);

export default router;