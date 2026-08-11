import PageWrapper from "../../layout/PageWrapper";
import PageHeading from "../../../components/PageHeading";
import BackButton from "../../../components/Button/BackButton";

const FeeCollection = () => {
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
                <option value="10">মিম আক্তার</option>
                <option value="9">আরিফুল ইসলাম</option>
                <option value="8">নুসরাত জাহান</option>
                <option value="7">রিদয় আহমেদ</option>
                <option value="6">সুমাইয়া আক্তার</option>
                <option value="5">নাঈম ইসলাম</option>
                <option value="4">মারিয়া ইসলাম</option>
                <option value="3">মেহেদী হাসান</option>
                <option value="2">তানজিলা আক্তার</option>
                <option value="1">রাহাত হাসান</option>
              </select>
            </div>

            <hr />

            <h6>Fee Types</h6>

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

            <div className="form-check mb-2">
              <input
                className="form-check-input fee-checkbox"
                type="checkbox"
                data-amount="800.00"
                name="fee_type_id[]"
                value="5"
              />
              <label className="form-check-label">Computer Lab Fee (800.00 Tk)</label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input fee-checkbox"
                type="checkbox"
                data-amount="1200.00"
                name="fee_type_id[]"
                value="7"
              />
              <label className="form-check-label">Development Fee (1200.00 Tk)</label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input fee-checkbox"
                type="checkbox"
                data-amount="1000.00"
                name="fee_type_id[]"
                value="3"
              />
              <label className="form-check-label">Exam Fee (1000.00 Tk)</label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input fee-checkbox"
                type="checkbox"
                data-amount="500.00"
                name="fee_type_id[]"
                value="4"
              />
              <label className="form-check-label">Library Fee (500.00 Tk)</label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input fee-checkbox"
                type="checkbox"
                data-amount="1500.00"
                name="fee_type_id[]"
                value="2"
              />
              <label className="form-check-label">Monthly Tuition (1500.00 Tk)</label>
            </div>

            <div className="form-check mb-2">
              <input
                className="form-check-input fee-checkbox"
                type="checkbox"
                data-amount="300.00"
                name="fee_type_id[]"
                value="6"
              />
              <label className="form-check-label">Sports Fee (300.00 Tk)</label>
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
