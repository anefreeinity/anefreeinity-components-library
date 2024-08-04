import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { InputType } from './input-type';

export interface IInputProperty {
    InputType: InputType;
    RequiredStarPosition: string;
    RequiredStarColor: string;
    RequiredStarFontSize: string;
    // InputBoxBackgroundColorOnFocus: string;
    InputBoxBackgroundColor: string;
    InputBoxBackgroundColorOnError: string;
    InputBoxBorderColor: string;
    InputBoxBorderColorOnFocus: string;
    InputBoxBorderColorOnHover: string;
    InputBoxBorderColorOnError: string;
    InputBoxBorderRadius: string;
    InputBoxBackgroundOpacity: string;
    InputBoxBackgroundOpacityOnError: string;
    InputBoxTextColor: string;
    InputBoxTextSize: string;
    LabelPosition: string;
    LabelColor: string;
    LabelColorOnFocus: string;
    LabelColorOnError: string;
    LabelFontSize: string;
    LabelFontSizeOnFocus: string;
    Icon: IconDefinition | null;
    IconPosition: string;
    IconColor: string;
    IconColorOnFocus: string;
    IconFontSize: string;
    EyeIcon: IconDefinition | null;
    SlashEyeIcon: IconDefinition | null;
    ErrorMessageColor: string;
    ErrorMessageFontSize: string;
    ErrorMessagePosition: string;
    TransitionDuration: string;
}
