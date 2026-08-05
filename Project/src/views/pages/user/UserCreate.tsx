import { useState } from "react";
import BackButton from "../../../components/Button/BackButton";
import PageHeading from "../../../components/PageHeading";
import { type User, defaultUserData } from "../../../interfaces/User";
import InputField from "../../../components/FormInput/InputField";
import SelectField from "../../../components/FormInput/SelectField";
import SubmitButton from "../../../components/Button/SubmitButton";
import ResetButton from "../../../components/Button/ResetButton";

const UserCreate = () => {
  const [userFormData, setUserFormData] = useState<User>(defaultUserData);

  // onChange event handler function
  const handleUserFormChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName = e.target.name as keyof User;

    setUserFormData((prev) => {
      if (typeof defaultUserData[fieldName] === "number") {
        return {
          ...prev,
          [fieldName]: Number(e.target.value),
        };
      }
      return {
        ...prev,
        [fieldName]: e.target.value,
      };
    });
  };

  return (
    <>
      <div className="page-heading">
        <PageHeading title="Create User" subtitle="Multiple form layouts, you can use.">
          <BackButton to="/user" text="Back to User List" />
        </PageHeading>

        <section id="basic-vertical-layouts">
          <div className="row match-height">
            <div className="col-12">
              <div className="card">
                <div className="card-content">
                  <div className="card-body">
                    <form className="form form-vertical">
                      <div className="form-body">
                        <div className="row">
                          {/* Test */}
                          {/* <div>{JSON.stringify(userFormData)}</div> */}

                          {/* Full Name */}
                          <InputField
                            label="Full Name"
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            value={userFormData.name}
                            onChange={handleUserFormChange}
                            icon="bi bi-person"
                          />
                          {/* Mobile */}
                          <InputField
                            label="Phone"
                            name="phone"
                            type="text"
                            placeholder="Phone"
                            value={userFormData.phone}
                            onChange={handleUserFormChange}
                            icon="bi bi-telephone"
                          />

                          {/* Email */}
                          <InputField
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={userFormData.email}
                            onChange={handleUserFormChange}
                            icon="bi bi-envelope"
                          />

                          {/* Password */}
                          <InputField
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="password"
                            value={userFormData.password}
                            onChange={handleUserFormChange}
                            icon="bi bi-lock"
                          />

                          {/* Role */}
                          <SelectField
                            label="Role"
                            name="role_id"
                            value={userFormData.role_id}
                            onChange={handleUserFormChange}
                            icon="bi bi-person-badge"
                          >
                            <option value={0} disabled>
                              Select a Role
                            </option>
                            <option value={1}>Admin</option>
                            <option value={2}>Moderator</option>
                          </SelectField>

                          {/* Buttons */}
                          <div className="col-12 d-flex justify-content-end">
                            <SubmitButton />
                            <ResetButton />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserCreate;
