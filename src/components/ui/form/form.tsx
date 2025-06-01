import classNames from "classnames";
import { FormButton } from "./form-button";
import { FormInput } from "./form-input";
import { FormCheckbox } from "./form-checkbox";
import { FormSelect } from "./form-select";
import { FormHorizontal } from "./form-horizontal";
import { Divider } from "../divider";
import { FormTextField } from "./form-textfield";
import { FormFileInput } from "./form-file-input";

interface TFormProps {
    children: React.ReactNode,
    className?: string,
    action: (form: FormData) => void
}

export const Form = ({
    children,
    className,
    action,
}: TFormProps) => (
    <form action={action} className={classNames("flex flex-col h-full", className)}>
        { children }
    </form>
)

Form.Input = FormInput;
Form.TextField = FormTextField
Form.Button = FormButton
Form.Checkbox = FormCheckbox;
Form.Select = FormSelect;
Form.Horizontal = FormHorizontal
Form.Divider = Divider
Form.FileInput = FormFileInput
