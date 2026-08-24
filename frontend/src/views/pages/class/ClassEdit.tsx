import { useState, useEffect } from "react";
import { useParams } from "react-router";
import BackButton from "../../../components/Button/BackButton";
import PageHeading from "../../../components/PageHeading";
import InputField from "../../../components/Form/InputField";
import SubmitButton from "../../../components/Button/SubmitButton";
import ResetButton from "../../../components/Button/ResetButton";
import FormElement from "../../../components/Form/FormElement";
import FormButtonParent from "../../../components/Form/FormButtonParent";
import PageWrapper from "../../layout/PageWrapper";
//inteface
import { classSchema, defaultClass, type ClassSchema } from "../../../interfaces/Class";
// React hook form with Zod
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../../config";
import InputFieldHidden from "../../../components/Form/InputFieldHidden";
import ActionAlert from "../../../components/ActionAlert";

const ClassEdit = () => {
  // Select the class id to edit
  const { classId } = useParams();
  const [classroom, setClassroom] = useState<ClassSchema>(defaultClass);

  // Error and success messaage handler
  const [msg, setMsg] = useState(false);
  const [success, setSuccess] = useState(false);

  // React hook form with Zod
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(classSchema),
    defaultValues: {
      ...defaultClass,
    },
  });

  // Get class data by api
  const getClass = () => {
    api
      .get(`class?id=${classId}`)
      .then((res) => {
        setClassroom(res.data);

        reset({
          ...res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getClass();
    console.log(classroom);
  }, []);

  // Edit data handler
  const formDataHandler: SubmitHandler<ClassSchema> = (data) => {
    // console.log(data);
    api
      .put("class-update", data)
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
    <>
      <PageWrapper>
        <PageHeading title="Edit Class" subtitle="Update class information">
          <BackButton to="/class" text="Back to Class List" />
        </PageHeading>

        {msg && <ActionAlert success={success} successText="Class edited successfully" onClick={() => setMsg(false)} />}

        <FormElement onSubmit={handleSubmit(formDataHandler)}>
          {/* id */}
          <InputFieldHidden formHook={{ ...register("id") }} type="hidden" />
          {/* Class Name */}
          <InputField
            formHook={{ ...register("class_name") }}
            placeholder="Name"
            label="Class Name:"
            icon="bi bi-book"
            type="text"
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

export default ClassEdit;
