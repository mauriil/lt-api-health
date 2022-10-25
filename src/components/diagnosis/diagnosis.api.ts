import { Router } from 'express';
import { validateSchema } from '../../middlewares/validation';
import {
  createDiagnosis,
  getUserDiagnosis,
  patchDiagnosis,
} from './diagnosis.service';
import {
  PostDiagnosisRequest,
  ByUserIdRequest,
  patchDiagnosticIdRequest,
} from './diagnosis.types';
import {
  DiagnosisPostSchema,
  DiagnosisPatchSchema,
} from './diagnosis.validators';
import { verifyToken } from '../../services/jwt'

const router = Router();


router.post(
  '/',
  verifyToken,
  validateSchema(DiagnosisPostSchema),
  async (req: PostDiagnosisRequest, res, next) => {
    try {
      const data = await createDiagnosis(req.body);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  '/:userId',
  verifyToken,
  async (req: ByUserIdRequest, res, next) => {
    try {
      const data = await getUserDiagnosis(req.params.userId);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
);

router.patch(
  '/:diagnosticId',
  verifyToken,
  validateSchema(DiagnosisPatchSchema),
  async (req: patchDiagnosticIdRequest, res, next) => {
    try {
      const data = await patchDiagnosis(req.params.diagnosticId, req.body);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
