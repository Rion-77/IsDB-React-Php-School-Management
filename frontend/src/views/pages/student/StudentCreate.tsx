import BackButton from "../../../components/Button/BackButton";
import PageHeading from "../../../components/PageHeading";
import InputField from "../../../components/Form/InputField";
import SubmitButton from "../../../components/Button/SubmitButton";
import ResetButton from "../../../components/Button/ResetButton";
import FormElement from "../../../components/Form/FormElement";
import FormButtonParent from "../../../components/Form/FormButtonParent";
import PageWrapper from "../../layout/PageWrapper";
import SelectField from "../../../components/Form/SelectField";
import SelectOption from "../../../components/Form/SelectOption";
//inteface
import { studentSchema, type StudentSchema } from "../../../interfaces/Student";
// React hook form with Zod
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextareaField from "../../../components/Form/TextareaField";

const StudentCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(studentSchema),
  });

  const formDataHandler: SubmitHandler<StudentSchema> = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageWrapper>
        <PageHeading title="Add Student" subtitle="Add a new Student">
          <BackButton to="/student" text="Back to Student List" />
        </PageHeading>

        <FormElement onSubmit={handleSubmit(formDataHandler)}>
          {/* Full Name */}
          <InputField
            formHook={{ ...register("name") }}
            placeholder="Full Name"
            label="Full Name:"
            icon="bi bi-person"
            type="text"
            errorMessage={errors}
          />

          {/* Father's Name */}
          <InputField
            formHook={{ ...register("father_name") }}
            placeholder="Father's Name"
            label="Father's Name:"
            icon="bi bi-gender-male"
            type="text"
            errorMessage={errors}
          />
          {/* Mother's Name */}
          <InputField
            formHook={{ ...register("mother_name") }}
            placeholder="Mother's Name"
            label="Mother's Name:"
            icon="bi bi-gender-female"
            type="text"
            errorMessage={errors}
          />

          {/* Address */}
          <TextareaField
            formHook={{ ...register("address") }}
            placeholder="Address"
            label="Address:"
            icon="bi bi-house"
            errorMessage={errors}
          />

          {/* Mobile */}
          <InputField
            formHook={{ ...register("phone") }}
            label="Phone:"
            type="text"
            placeholder="Phone"
            icon="bi bi-telephone"
            errorMessage={errors}
          />

          {/* Class */}
          <SelectField
            formHook={{ ...register("class_id") }}
            label="Class:"
            icon="bi bi-book"
            errorMessage={errors}
          >
            <SelectOption text="Select a class" disabled={true} selected={true} />
            <SelectOption value={1} text="Class 1" />
            <SelectOption value={2} text="Class 2" />
            <SelectOption value={3} text="Class 3" />
            <SelectOption value={4} text="Class 4" />
            <SelectOption value={5} text="Class 5" />
          </SelectField>

          {/* Section */}
          <SelectField
            formHook={{ ...register("section_id") }}
            label="Section:"
            icon="bi bi-person-lines-fill"
            errorMessage={errors}
          >
            <SelectOption text="Select a Section" disabled={true} selected={true} />
            <SelectOption value={1} text="Section A" />
            <SelectOption value={2} text="Section B" />
          </SelectField>

          {/* Group */}
          <SelectField
            formHook={{ ...register("group_id") }}
            label="Group:"
            icon="bi bi-people"
            errorMessage={errors}
          >
            <SelectOption text="Select a Group" disabled={true} selected={true} />
            <SelectOption value={1} text="Science" />
            <SelectOption value={2} text="Commerce" />
            <SelectOption value={2} text="Arts" />
          </SelectField>

          {/* Photo */}
          <InputField
            formHook={{ ...register("photo") }}
            label="Photo"
            type="file"
            placeholder="Photo"
            icon="bi bi-person-bounding-box"
            errorMessage={errors}
          />


          {/* Buttons */}
          <FormButtonParent>
            <SubmitButton />
            <ResetButton />
          </FormButtonParent>
        </FormElement>
      </PageWrapper>
    </>
  );
};

export default StudentCreate;
