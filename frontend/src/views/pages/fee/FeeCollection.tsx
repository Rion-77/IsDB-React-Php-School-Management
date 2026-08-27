import { useEffect, useState } from "react";
import PageWrapper from "../../layout/PageWrapper";
import PageHeading from "../../../components/PageHeading";
import BackButton from "../../../components/Button/BackButton";
// interfaces
import {
  type StudentSchema,
  defaultStudent,
} from "../../../interfaces/Student";
import {
  defaultFeeType,
  type FeeTypeSchema,
} from "../../../interfaces/FeeType";
import { api } from "../../../config";
import { defaultFee, type FeeSchema } from "../../../interfaces/Fee";
import ActionAlert from "../../../components/ActionAlert";

const FeeCollection = () => {
  const [students, setStudents] = useState<StudentSchema[]>([defaultStudent]);
  const [feeTypes, setFeeTypes] = useState<FeeTypeSchema[]>([defaultFeeType]);
  const [fee, setFee] = useState<FeeSchema>(defaultFee);
  const [displayFee, setDisplayFee] = useState(0);

  // Error and success messaage handler
  const [msg, setMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  // Get all students from database
  const getStudents = () => {
    api
      .get(`students`)
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Get all classes from database
  const getFeeTypes = () => {
    api
      .get("fee-types")
      .then((res) => {
        // console.log(res.data);
        setFeeTypes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFeeTypes();
    getStudents();
  }, []);

  useEffect(() => {
    console.log(fee);
  }, [fee]);

  // Fee collection submit handler
  const feeCollector = (data: FeeSchema) => {
    console.log(data);
    api
      .post("fee-create", data)
      .then((res) => {
        if (res.status == 200 || res.status == 201) {
          setMsg(true);
          setSuccess(true);
        }
      })
      .catch(() => {
        setMsg(true);
        setSuccess(false);
      });
  };

  return (
    <PageWrapper>
      <PageHeading title="Collect New Fee" subtitle="Collect a New Fee">
        <BackButton to="/fee-history" text="See All Fee History" />
      </PageHeading>

      {msg && (
        <ActionAlert
          success={success}
          successText="New fee collected added successfully"
          onClick={() => setMsg(false)}
        />
      )}

      <div className="card">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="studentSelect">Student</label>
            <select
              name="student_id"
              className="form-select"
              required
              onChange={(e) => {
                setFee({
                  ...fee,
                  student_id: Number(e.target.value),
                });
              }}
            >
              <option value="">Select Student</option>
              {students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.name}
                </option>
              ))}
            </select>
          </div>

          <hr />

          <h6>Fee Types</h6>

          {feeTypes.map((feeType) => (
            <div className="form-check mb-2" key={feeType.id}>
              <input
                className="form-check-input fee-checkbox"
                type="radio"
                data-amount={feeType.fee_amount}
                name="fee_type_id"
                value={feeType.id}
                onClick={() => {
                  setFee({
                    ...fee,
                    fee_type_id: Number(feeType.id),
                  });
                  setDisplayFee(feeType.fee_amount);
                }}
              />
              <label className="form-check-label">
                {feeType.fee_type_name} ({feeType.fee_amount} Tk)
              </label>
            </div>
          ))}

          <hr />

          <h5>
            Total :&nbsp;
            <span id="totalAmount">{displayFee}</span>
            &nbsp;Tk
          </h5>

          <br />

          <button
            className="btn btn-primary"
            onClick={() => {
              feeCollector(fee);
            }}
          >
            Collect Fee
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FeeCollection;
