import { useEffect, useState } from "react";
import PageWrapper from "../../layout/PageWrapper";
import PageHeading from "../../../components/PageHeading";
import BackButton from "../../../components/Button/BackButton";
// interfaces
import { type StudentSchema, defaultStudent } from "../../../interfaces/Student";
import { defaultFeeType, type FeeTypeSchema } from "../../../interfaces/FeeType";
import { api } from "../../../config";

const FeeCollection = () => {
  const [students, setStudents] = useState<StudentSchema[]>([defaultStudent]);
  const [feeTypes, setFeeTypes] = useState<FeeTypeSchema[]>([defaultFeeType]);

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

  return (
    <PageWrapper>
      <PageHeading title="Collect New Fee" subtitle="Collect a New Fee">
        <BackButton to="/fee-history" text="See All Fee History" />
      </PageHeading>
      <div className="card">
        <div className="card-body">
          <form method="post">
            <div className="mb-3">
              <label htmlFor="studentSelect">Student</label>
              <select name="student_id" className="form-select" required>
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
                  type="checkbox"
                  data-amount={feeType.fee_amount}
                  name="fee_type_id[]"
                  value={feeType.id}
                />
                <label className="form-check-label">
                  {feeType.fee_type_name} ({feeType.fee_amount} Tk)
                </label>
              </div>
            ))}

            <div className="form-check mb-2">
              <input
                className="form-check-input fee-checkbox"
                type="checkbox"
                data-amount="5000.00"
                name="fee_type_id[]"
                value="1"
              />
              <label className="form-check-label">Admission Fee (5000.00 Tk)</label>
            </div>

            

            <hr />

            <h5>
              Total :&nbsp;
              <span id="totalAmount">0</span>
              &nbsp;Tk
            </h5>

            <br />

            <button type="submit" name="btnCollect" className="btn btn-primary">
              Collect Fee
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default FeeCollection;
