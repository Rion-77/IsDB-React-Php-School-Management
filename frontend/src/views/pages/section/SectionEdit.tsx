import BackButton from "../../../components/Button/BackButton";
import PageHeading from "../../../components/PageHeading";
import InputField from "../../../components/Form/InputField";
import SubmitButton from "../../../components/Button/SubmitButton";
import ResetButton from "../../../components/Button/ResetButton";
import FormElement from "../../../components/Form/FormElement";
import FormButtonParent from "../../../components/Form/FormButtonParent";
import PageWrapper from "../../layout/PageWrapper";
import SelectOption from "../../../components/Form/SelectOption";
import SelectField from "../../../components/Form/SelectField";
//inteface
import { sectionSchema, type SectionSchema } from "../../../interfaces/Section";
// React hook form with Zod
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const SectionEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(sectionSchema),
  });

  const formDataHandler: SubmitHandler<SectionSchema> = (data) => {
    console.log(data);
  };

  return (
    <>
      <PageWrapper>
        <PageHeading title="Edit Section" subtitle="Edit an existing section">
          <BackButton to="/section" text="Back to Section List" />
        </PageHeading>

        <FormElement onSubmit={handleSubmit(formDataHandler)}>
          {/* Section Name */}
          <InputField
            formHook={{ ...register("section_name") }}
            placeholder="Name"
            label="Section Name:"
            icon="bi bi-person-lines-fill"
            type="text"
            errorMessage={errors}
          />

          {/* Class */}
          <SelectField formHook={{ ...register("class_id") }} label="Class:" icon="bi bi-people" errorMessage={errors}>
            <SelectOption text="Select a Class" disabled={true} selected={true} />
            <SelectOption value={1} text="Class 1" />
            <SelectOption value={2} text="Class 2" />
            <SelectOption value={3} text="Class 3" />
            <SelectOption value={4} text="Class 4" />
            <SelectOption value={5} text="Class 5" />
          </SelectField>

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

export default SectionEdit;
