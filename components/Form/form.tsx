import FormButton from "./form_button";
import FormInput from "./form_input";
import FormCheckbox from "./form_checkbox";
import FormSelect from "./form_select";
import FormHorizontal from "./form_horizontal";
import Divider from "../divider";
import FormTextField from "./form_textfield";
import { FormFileInput } from "./form_file_input";
import classNames from "classnames";

interface TFormProps {
    children: React.ReactNode,
    className?: string,
    action: (form: FormData) => void
}

const Form = ({
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

export default Form