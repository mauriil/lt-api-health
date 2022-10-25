import { Router } from 'express';
import { validateSchema } from '../../middlewares/validation';
import {
  createDiagnosis,
} from './diagnosis.service';
import {
  PostDiagnosisRequest,
} from './diagnosis.types';
import {
  DiagnosisPostSchema,
} from './diagnosis.validators';

const router = Router();


router.post(
  '/',
  validateSchema(DiagnosisPostSchema),
  async (req: PostDiagnosisRequest, res, next) => {
    try {
      const loggedUser = await createDiagnosis(req.body);
      res.status(200).json(loggedUser);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
