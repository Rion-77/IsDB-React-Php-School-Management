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
import { teacherSchema, type TeacherSchema } from "../../../interfaces/Teacher";
// React hook form with Zod
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextareaField from "../../../components/Form/TextareaField";

const TeacherEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(teacherSchema),
  });

  const formDataHandler: SubmitHandler<TeacherSchema> = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageWrapper>
        <PageHeading title="Edit Teacher" subtitle="Edit an existing Teacher">
          <BackButton to="/teacher" text="Back to Teacher List" />
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

          {/* Designation */}
          <InputField
            formHook={{ ...register("designation") }}
            placeholder="Designation"
            label="Designation:"
            icon="bi bi-briefcase"
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

          {/* Phone */}
          <InputField
            formHook={{ ...register("phone") }}
            label="Phone:"
            type="text"
            placeholder="Phone"
            icon="bi bi-telephone"
            errorMessage={errors}
          />

          {/* Qualifications */}
          <TextareaField
            formHook={{ ...register("qualifications") }}
            placeholder="Qualifications"
            label="Qualifications:"
            icon="bi bi-award"
            errorMessage={errors}
          />

          {/* Subject */}
          <SelectField
            formHook={{ ...register("subject_id") }}
            label="Subject:"
            icon="bi bi-book"
            errorMessage={errors}
          >
            <SelectOption text="Select a subject" disabled={true} selected={true} />
            <SelectOption value={1} text="Mathematics" />
            <SelectOption value={2} text="Science" />
            <SelectOption value={3} text="English" />
            <SelectOption value={4} text="Bangla" />
            <SelectOption value={5} text="Social Science" />
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

export default TeacherEdit;
