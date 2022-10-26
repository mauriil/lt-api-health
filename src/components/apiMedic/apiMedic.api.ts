import { Router } from 'express';
import { validateSchema } from '../../middlewares/validation';
import {
  getAllDiagnosis,
    getAllSymptoms,
} from './apiMedic.service';
import { verifyToken } from '../../services/jwt'
import { getDiagnosisRequest } from './apiMedic.types';

const router = Router();


router.get(
  '/symptoms',
  verifyToken,
  async (req, res, next) => {
    try {
      const data = await getAllSymptoms();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  '/diagnosis',
  verifyToken,
  async (req: getDiagnosisRequest, res, next) => {
    try {
      const data = await getAllDiagnosis(req);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
