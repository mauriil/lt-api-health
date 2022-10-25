/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from "mongoose";
import { Diagnosis } from "./diagnosis.types";

const diagnosisObject = {  
  issue:{  
     apiMedicId: Number,
     name: String,
     accuracy: Number
  },
}

const DiagnosisSchema = new Schema<Diagnosis>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      index: true,
    },
    symptoms: [{
      id: Number,
      name: String
    }],
    diagnosis: [diagnosisObject],
    confirmed: {type: Boolean, default: false},
    confirmedDiagnosis: diagnosisObject,
  },
  { timestamps: true }
);

export const DiagnosisModel = model<Diagnosis>("Diagnosis", DiagnosisSchema);

void (async () => {
  await DiagnosisModel.syncIndexes();
})();
